import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { WorkoutFormComponent } from './workout-form.component';

describe('WorkoutFormComponent', () => {
  let component: WorkoutFormComponent;
  let fixture: ComponentFixture<WorkoutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, WorkoutFormComponent], // Import the standalone component here
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // Clear localStorage before each test
    localStorage.removeItem('workouts');
  });

  it('should add a workout to localStorage', () => {
    component.userName = 'John';
    component.workoutType = 'Yoga';
    component.workoutMinutes = 30;

    component.addWorkout();

    const workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
    expect(workouts.length).toBe(1); // Check if the workout was added
    expect(workouts[0]).toEqual({
      userName: 'John',
      workoutType: 'Yoga',
      workoutMinutes: 30,
    });
  });
});
