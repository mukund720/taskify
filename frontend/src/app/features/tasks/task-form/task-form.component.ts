import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../../core/services/task.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-task-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;
  taskId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      dueDate: ['', Validators.required],
      priority: ['Low'],
      status: ['Pending']
    });
  }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');
    if (this.taskId) {
      this.taskService.getTaskById(this.taskId).subscribe(task => {
        this.taskForm.patchValue(task);
      });
    }
  }

  onSubmit(): void {
    if (this.taskForm.invalid) {
      return;
    }

    if (this.taskId) {
      this.taskService.updateTask(this.taskId, this.taskForm.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.taskService.createTask(this.taskForm.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}