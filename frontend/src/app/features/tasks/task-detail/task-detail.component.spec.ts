import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { TaskDetailComponent } from './task-detail.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { TaskService } from '../../core/services/task.service';
import { Task } from '../../core/models/task.model';
import { By } from '@angular/platform-browser';

describe('TaskDetailComponent', () => {
  let component: TaskDetailComponent;
  let fixture: ComponentFixture<TaskDetailComponent>;
  let mockTaskService: jasmine.SpyObj<TaskService>;

  const mockTask: Task = {
    _id: '1',
    title: 'Test Task',
    description: 'Task description',
    dueDate: new Date('2025-05-01').toDateString(),
    priority: 'High',
    status: 'Completed'
  };

  beforeEach(async () => {
    const taskServiceSpy = jasmine.createSpyObj('TaskService', ['getTaskById']);
    await TestBed.configureTestingModule({
      imports: [TaskDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1'
              }
            }
          }
        },
        { provide: TaskService, useValue: taskServiceSpy }
      ]
    }).compileComponents();

    mockTaskService = TestBed.inject(TaskService) as jasmine.SpyObj<TaskService>;
    mockTaskService.getTaskById.and.returnValue(of(mockTask));

    fixture = TestBed.createComponent(TaskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // triggers ngOnInit
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load task details on init', () => {
    expect(component.task).toEqual(mockTask);
    expect(mockTaskService.getTaskById).toHaveBeenCalledWith('1');
  });

  it('should display task details in the template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-card-title')?.textContent).toContain(mockTask.title);
    expect(compiled.querySelector('mat-card-subtitle')?.textContent).toContain(mockTask.status);
    expect(compiled.querySelector('mat-card-content')?.textContent).toContain(mockTask.description);
    expect(compiled.querySelector('mat-card-content')?.textContent).toContain(mockTask.priority);
  });
});
