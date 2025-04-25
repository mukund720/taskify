import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/tasks/task-list/task-list.component').then(m => m.TaskListComponent) },
  { path: 'tasks', loadComponent: () => import('./features/tasks/task-list/task-list.component').then(m => m.TaskListComponent) },
  { path: 'tasks/new', loadComponent: () => import('./features/tasks/task-form/task-form.component').then(m => m.TaskFormComponent) },
  { path: 'tasks/:id', loadComponent: () => import('./features/tasks/task-form/task-form.component').then(m => m.TaskFormComponent) }, // For editing tasks
  { path: 'tasks/details/:id', loadComponent: () => import('./features/tasks/task-detail/task-detail.component').then(m => m.TaskDetailComponent) }, // For editing tasks

];
