import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WorkoutListComponent } from './workout-list.component';

describe('WorkoutListComponent', () => {
  let component: WorkoutListComponent;
  let fixture: ComponentFixture<WorkoutListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, WorkoutListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter workouts by type', () => {
    component.workouts = [
      { userName: 'John', workoutType: 'Yoga', workoutMinutes: 30 },
      { userName: 'Jane', workoutType: 'Cycling', workoutMinutes: 45 },
    ];
    component.selectedType = 'Yoga';
    component.filterWorkouts();

    expect(component.filteredWorkouts.length).toBe(1);
    expect(component.filteredWorkouts[0].workoutType).toBe('Yoga');
  });

  it('should filter workouts by name', () => {
    component.workouts = [
      { userName: 'John', workoutType: 'Yoga', workoutMinutes: 30 },
      { userName: 'Jane', workoutType: 'Cycling', workoutMinutes: 45 },
    ];
    component.searchQuery = 'Jane';
    component.searchWorkouts();

    expect(component.filteredWorkouts.length).toBe(1);
    expect(component.filteredWorkouts[0].userName).toBe('Jane');
  });

  it('should paginate workouts', () => {
    component.filteredWorkouts = Array.from({ length: 12 }, (_, i) => ({
      userName: `User ${i + 1}`,
      workoutType: 'Yoga',
      workoutMinutes: 30,
    }));
    component.pageSize = 5;
    component.currentPage = 2;
    const paginatedWorkouts = component.paginate();

    expect(paginatedWorkouts.length).toBe(5);
    expect(paginatedWorkouts[0].userName).toBe('User 6');
  });
});
