import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';
import { TaskService } from '../../../core/services/task.service';
import { of } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TaskFilterComponent } from '../task-filter/task-filter.component';
import { CommonModule } from '@angular/common';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let taskService: jasmine.SpyObj<TaskService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const taskServiceSpy = jasmine.createSpyObj('TaskService', ['getTasks', 'deleteTask']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    // Mock getTasks to return a mock observable
    taskServiceSpy.getTasks.and.returnValue(of([
      { _id: '1', title: 'Test Task 1', priority: 'High', status: 'Pending' },
      { _id: '2', title: 'Test Task 2', priority: 'Medium', status: 'Completed' }
    ]));

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatButtonModule,
        MatIconModule,
        RouterModule,
        TaskFilterComponent
      ],
      providers: [
        { provide: TaskService, useValue: taskServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    taskService = TestBed.inject(TaskService) as jasmine.SpyObj<TaskService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to view page on view button click', () => {
    const mockTask = { _id: '1', title: 'Test Task' };
    component.viewTask(mockTask._id);

    expect(router.navigate).toHaveBeenCalledWith([`/tasks/details/${mockTask._id}`]);
  });

  it('should apply correct class for "High" priority', () => {
    const priorityClass = component.getPriorityClass('High');
    expect(priorityClass).toBe('badge-danger');
  });

  it('should apply correct class for "Completed" status', () => {
    const statusClass = component.getStatusClass('Completed');
    expect(statusClass).toBe('badge-success');
  });
});
