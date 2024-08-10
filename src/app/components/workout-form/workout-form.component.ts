import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workout-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css'],
})
export class WorkoutFormComponent {
  userName: string = '';
  workoutType: string = '';
  workoutMinutes: number | null = null;

  addWorkout() {
    if (this.userName && this.workoutType && this.workoutMinutes) {
      const workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
      workouts.push({
        userName: this.userName,
        workoutType: this.workoutType,
        workoutMinutes: this.workoutMinutes,
      });
      localStorage.setItem('workouts', JSON.stringify(workouts));
      this.userName = '';
      this.workoutType = '';
      this.workoutMinutes = null;
    }
  }
}
