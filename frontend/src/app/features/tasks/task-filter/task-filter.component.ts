import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-task-filter',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatSelectModule],
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.scss']
})
export class TaskFilterComponent {
  filterText: string = '';
  selectedStatus: string = '';

  @Output() filterChange = new EventEmitter<string>();
  @Output() statusChange = new EventEmitter<string>();

  onFilterChange() {
    this.filterChange.emit(this.filterText.trim().toLowerCase());
  }

  onStatusChange() {
    this.statusChange.emit(this.selectedStatus);
  }
}
