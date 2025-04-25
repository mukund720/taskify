import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { TaskFormComponent } from './task-form.component';
import { TaskService } from '../../core/services/task.service';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;
  let mockTaskService: any;
  let mockRouter: any;
  let mockActivatedRoute: any;

  beforeEach(async () => {
    mockTaskService = {
      getTaskById: jasmine.createSpy('getTaskById').and.returnValue(of({
        title: 'Test Task',
        description: 'Test description',
        dueDate: '2025-04-30',
        priority: 'High',
        status: 'Pending'
      })),
      createTask: jasmine.createSpy('createTask').and.returnValue(of({})),
      updateTask: jasmine.createSpy('updateTask').and.returnValue(of({}))
    };

    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };

    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: (key: string) => null // initially no taskId
        }
      }
    };

    await TestBed.configureTestingModule({
      imports: [TaskFormComponent, ReactiveFormsModule],
      providers: [
        { provide: TaskService, useValue: mockTaskService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form initially', () => {
    expect(component.taskForm.invalid).toBeTrue();
  });

  it('should have a valid form when required fields are set', () => {
    component.taskForm.setValue({
      title: 'New Task',
      description: 'Some description',
      dueDate: '2025-05-01',
      priority: 'Medium',
      status: 'Completed'
    });

    expect(component.taskForm.valid).toBeTrue();
  });

  it('should call createTask on submit if taskId is null', () => {
    component.taskForm.setValue({
      title: 'Create Task',
      description: 'Create desc',
      dueDate: '2025-05-10',
      priority: 'High',
      status: 'Pending'
    });

    component.taskId = null;
    component.onSubmit();

    expect(mockTaskService.createTask).toHaveBeenCalledWith(component.taskForm.value);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should call updateTask on submit if taskId is present', () => {
    component.taskId = '123';
    component.taskForm.setValue({
      title: 'Update Task',
      description: 'Update desc',
      dueDate: '2025-06-01',
      priority: 'Low',
      status: 'Completed'
    });

    component.onSubmit();

    expect(mockTaskService.updateTask).toHaveBeenCalledWith('123', component.taskForm.value);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
  });
});
