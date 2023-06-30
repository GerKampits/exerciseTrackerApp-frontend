import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExercisesService } from '../exercises.service';
import { Exercises } from '../exercises.interfaces';
@Component({
  selector: 'app-exercises-insert',
  templateUrl: './exercises-insert.component.html',
  styleUrls: ['./exercises-insert.component.css']
})
export class ExercisesInsertComponent {

  form: FormGroup;

  constructor(private fb:FormBuilder, private service: ExercisesService) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      exercise: ['', Validators.required],
      description: ['', Validators.required],
      duration: ['', Validators.required],
      distance: ['', Validators.required],
      calories: ['', Validators.required],
      date: ['', Validators.required],
    })
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      const exercise = this.form.value as Exercises;
      this.service.insertExercise(exercise).subscribe((response)=> {
        console.log(response);
      })
    } else {
      console.log('Form is not valid');
    }
  }
}
