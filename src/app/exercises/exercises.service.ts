import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAPIList } from '../user/user.interfaces';
import { Exercises, ExercisesAPIList, UserExercisesAPIList } from './exercises.interfaces';

const EXERCISE_API = 'http://localhost:3000/api/exercise'
const USEREXERCISE_API = 'http://localhost:3000/api/userexercise'

@Injectable()
export class ExercisesService {

  constructor(private http: HttpClient) { }

  findAllExercises() {
    return this.http.get<ExercisesAPIList>(`${EXERCISE_API}/findall`)
  }

  findAllUserExercises() {
    return this.http.get<UserExercisesAPIList>(`${USEREXERCISE_API}/findall`)
  }

  insertExercise(exercise : Exercises) {
    return this.http.post<ExercisesAPIList>(`${EXERCISE_API}/create`, exercise)
  }
}
