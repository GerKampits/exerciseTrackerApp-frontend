import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../exercises.service';
import { Exercises, ExercisesAPIList } from '../exercises.interfaces';
import { orderBy } from 'lodash-es';

@Component({
  selector: 'app-exercises-list',
  templateUrl: './exercises-list.component.html',
  styleUrls: ['./exercises-list.component.css']
})
export class ExercisesListComponent implements OnInit {
  constructor(private exercisesService: ExercisesService) {}

loading = false;
exercisesList : Exercises[] = []

  ngOnInit(): void {
    console.log('Starting API call')
    this.loading = true;
    this.exercisesService.findAllExercises().subscribe({
     next: (apiData: ExercisesAPIList) => {
       const {status, data } = apiData
       this.exercisesList = data
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
 
 }
