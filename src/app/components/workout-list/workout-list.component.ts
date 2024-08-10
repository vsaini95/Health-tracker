import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-workout-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css'],
})
export class WorkoutListComponent implements OnInit {
  @Input() workouts: any[] = [];
  filteredWorkouts: any[] = [];
  searchQuery: string = '';
  selectedType: string = '';
  currentPage: number = 1;
  pageSize: number = 5;

  ngOnInit() {
    this.loadWorkouts();
  }

  loadWorkouts() {
    this.workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
    this.filteredWorkouts = this.workouts;
  }

  filterWorkouts() {
    this.filteredWorkouts = this.workouts.filter(
      (workout) =>
        (this.selectedType
          ? workout.workoutType === this.selectedType
          : true) &&
        (this.searchQuery
          ? workout.userName
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase())
          : true)
    );
  }

  searchWorkouts() {
    this.filterWorkouts();
    this.currentPage = 1; // Reset to first page on search
  }

  paginate() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredWorkouts.slice(start, end);
  }

  get totalPages() {
    return Math.ceil(this.filteredWorkouts.length / this.pageSize);
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
