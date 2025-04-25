import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { CommonModule } from '@angular/common';
import { Task } from '../../../core/models/task.model';
import { TaskService } from '../../../core/services/task.service';
import { Router } from '@angular/router';
import { TaskFilterComponent } from '../task-filter/task-filter.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    TaskFilterComponent,
  ],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  displayedColumns: string[] = [
    'title',
    'description',
    'dueDate',
    'priority',
    'status',
    'actions',
  ];
  dataSource!: MatTableDataSource<Task>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  tasks: Task[] = [];

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
      this.dataSource = new MatTableDataSource(this.tasks);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  deleteTask(id: string) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(id).subscribe(() => {
        this.loadTasks();
      });
    }
  }

  getPriorityClass(priority: string): string {
    switch (priority) {
      case 'Low':
        return 'badge-info'; // Blue for Low priority
      case 'Medium':
        return 'badge-warning'; // Yellow for Medium priority
      case 'High':
        return 'badge-danger'; // Red for High priority
      default:
        return '';
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Pending':
        return 'badge-warning'; // Yellow for Pending status
      case 'Completed':
        return 'badge-success'; // Green for Completed status
      case 'In Progress':
        return 'badge-primary'; // Blue for In Progress status
      case 'Overdue':
        return 'badge-danger'; // Red for Overdue status
      default:
        return '';
    }
  }
  // Navigate to task edit page
  editTask(task: Task): void {
    this.router.navigate([`/tasks/${task._id}`]); // Navigate to the edit page
  }
  viewTask(id: string): void {
    this.router.navigate([`/tasks/details/${id}`]);
  }
  
  onTextFilter(value: string) {
    this.dataSource.filterPredicate = (data: Task, filter: string) =>
      data.title.toLowerCase().includes(filter);
    this.dataSource.filter = value;
  }

  onStatusFilter(status: string) {
    if (status) {
      this.dataSource.data = this.tasks.filter(
        (task) => task.status === status
      );
    } else {
      this.dataSource.data = this.tasks;
    }
  }
}
