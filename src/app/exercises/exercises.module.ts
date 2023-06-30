import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExercisesListComponent } from './exercises-list/exercises-list.component';
import { ExercisesService } from '../exercises/exercises.service';
import { HttpClientModule} from '@angular/common/http';
import { ExercisesInsertComponent } from './exercises-insert/exercises-insert.component';
import { ExercisesUsersListComponent } from './exercises-users-list/exercises-users-list.component'
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'list', component: ExercisesListComponent},
  { path: 'userexerciseslist', component: ExercisesUsersListComponent},
  { path: 'insert', component: ExercisesInsertComponent}
]


@NgModule({
  declarations: [
    ExercisesListComponent,
    ExercisesInsertComponent,
    ExercisesUsersListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ExercisesService]
})
export class ExercisesModule { }
