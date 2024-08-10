import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  private workouts: any[] = JSON.parse(
    localStorage.getItem('workouts') || '[]'
  );

  getWorkouts() {
    return this.workouts;
  }

  addWorkout(workout: any) {
    this.workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
  }
}
