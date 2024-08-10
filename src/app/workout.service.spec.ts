import { TestBed } from '@angular/core/testing';
import { WorkoutService } from './workout.service';

describe('WorkoutService', () => {
  let service: WorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutService);
    // Clear localStorage before each test
    localStorage.removeItem('workouts');
  });

  it('should get workouts from localStorage', () => {
    // Add a workout to localStorage
    const workouts = [
      { userName: 'John', workoutType: 'Yoga', workoutMinutes: 30 },
    ];
    localStorage.setItem('workouts', JSON.stringify(workouts));

    const retrievedWorkouts = service.getWorkouts();
    expect(retrievedWorkouts.length).toBe(1);
    expect(retrievedWorkouts[0]).toEqual(workouts[0]);
  });
});
