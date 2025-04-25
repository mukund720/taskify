import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NavBarComponent,
        RouterTestingModule, // Used to mock routing in tests
        MatToolbarModule,
        MatButtonModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the brand name "Taskify"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const brand = compiled.querySelector('.brand')!;
    expect(brand.textContent).toBe('Taskify');
  });

  it('should have two navigation links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const navLinks = compiled.querySelectorAll('a');
    expect(navLinks.length).toBe(2);
  });

  it('should have a "Home" link with correct routerLink', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const homeLink = compiled.querySelector('a[routerLink="/"]')!;
    expect(homeLink).toBeTruthy();
    expect(homeLink.getAttribute('routerLink')).toBe('/');
  });

  it('should have an "Add New Task" link with correct routerLink', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const addNewTaskLink = compiled.querySelector('a[routerLink="/tasks/new"]')!;
    expect(addNewTaskLink).toBeTruthy();
    expect(addNewTaskLink.getAttribute('routerLink')).toBe('/tasks/new');
  });
});
