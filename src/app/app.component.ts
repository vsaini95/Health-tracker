import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkoutFormComponent } from '../app/components/workout-form/workout-form.component';
import { WorkoutListComponent } from '../app/components/workout-list/workout-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WorkoutFormComponent, WorkoutListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Health-Challenge-tracker';
}
