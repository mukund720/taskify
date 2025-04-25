import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskFilterComponent } from './task-filter.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('TaskFilterComponent', () => {
  let component: TaskFilterComponent;
  let fixture: ComponentFixture<TaskFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskFilterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit filterChange on input change', () => {
    spyOn(component.filterChange, 'emit');

    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = 'Test Title';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.filterChange.emit).toHaveBeenCalledWith('test title');
  });

  it('should emit statusChange on status selection change', () => {
    spyOn(component.statusChange, 'emit');

    component.selectedStatus = 'Completed';
    component.onStatusChange();
    fixture.detectChanges();

    expect(component.statusChange.emit).toHaveBeenCalledWith('Completed');
  });
});
