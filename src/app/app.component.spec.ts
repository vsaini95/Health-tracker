import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { WorkoutFormComponent } from '../app/components/workout-form/workout-form.component';
import { WorkoutListComponent } from '../app/components/workout-list/workout-list.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        RouterOutlet,
        WorkoutFormComponent,
        WorkoutListComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have the title "Health-Challenge-tracker"', () => {
    expect(component.title).toBe('Health-Challenge-tracker');
  });

  it('should render title in a h1 tag', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h1 = compiled.querySelector('h1');
    expect(h1).not.toBeNull();
    expect(h1?.textContent).toContain('Health-Challenge-tracker');
  });
});
