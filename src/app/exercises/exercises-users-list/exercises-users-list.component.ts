import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../exercises.service';
import { orderBy } from 'lodash-es'
import { Exercises, UserExercises,  } from '../exercises.interfaces';
import { UserExercisesAPIList, ExercisesAPIList } from '../exercises.interfaces';
@Component({
  selector: 'app-exercises-users-list',
  templateUrl: './exercises-users-list.component.html',
  styleUrls: ['./exercises-users-list.component.css']
})
export class ExercisesUsersListComponent {
  constructor(private exercisesService: ExercisesService ) {}
  loading = false;
  userExercisesList : UserExercises[] = []
  usernameSortType: 'asc'|'desc' = 'asc'
  

  ngOnInit(): void {
   console.log('Starting API call');
   this.loading = true;
   this.exercisesService.findAllUserExercises().subscribe({
    next: (apiData: UserExercisesAPIList) => {
      const {status, data } = apiData;
      this.userExercisesList = data
      console.log(status, data)
    },
    error: (error) => {
      this.loading = false;
      console.log(error);
    },
    complete: () => {
      this.loading = false;
      console.log('API call completed')
    }
  })
  }

  toggleSort(key:string) {
    switch (key) {
      case 'username':
        this.usernameSortType = 
        this.usernameSortType === 'asc'? 'desc' : 'asc';
        this.userExercisesList = orderBy(this.userExercisesList, [key], [this.usernameSortType])
        break;
      default:
        break;
    }
  }
}
