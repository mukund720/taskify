import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TaskService } from './task.service';
import { Task } from '../models/task.model';
import { environment } from '../../../environments/environment';

describe('TaskService', () => {
  let service: TaskService;
  let httpMock: HttpTestingController;

  const apiUrl = `${environment.apiUrl}/tasks`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TaskService]
    });

    service = TestBed.inject(TaskService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch tasks', () => {
    const mockTasks: Task[] = [
      { _id: '1', title: 'Task 1',description:"Task description 1", status: 'Pending', priority: 'Low', dueDate: new Date().toDateString() },
      { _id: '2', title: 'Task 2',description:"Task description 2", status: 'Completed', priority: 'High', dueDate: new Date().toDateString() }
    ];

    service.getTasks().subscribe((tasks) => {
      expect(tasks.length).toBe(2);
      expect(tasks).toEqual(mockTasks);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockTasks);
  });

  it('should fetch a task by id', () => {
    const mockTask: Task = { _id: '1', title: 'Task 1',description:"Task description 1", status: 'Pending', priority: 'Low', dueDate: new Date().toDateString() };

    service.getTaskById('1').subscribe((task) => {
      expect(task).toEqual(mockTask);
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockTask);
  });

  it('should create a task', () => {
    const newTask: Task = { _id: '3', title: 'Task 3',description:"Task description 3", status: 'Pending', priority: 'Medium', dueDate: new Date().toDateString() };
    const createdTask: Task = { ...newTask, _id: '3' };

    service.createTask(newTask).subscribe((task) => {
      expect(task).toEqual(createdTask);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newTask);
    req.flush(createdTask);
  });

  it('should update a task', () => {
    const updatedTask: Task = { _id: '1', title: 'Updated Task',description:"updated description", status: 'Completed', priority: 'High', dueDate: new Date().toDateString() };

    service.updateTask('1', updatedTask).subscribe((task) => {
      expect(task).toEqual(updatedTask);
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(updatedTask);
    req.flush(updatedTask);
  });

  it('should delete a task', () => {
    const taskId = '1';

    service.deleteTask(taskId).subscribe((response) => {
      expect(response).toEqual({});
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
