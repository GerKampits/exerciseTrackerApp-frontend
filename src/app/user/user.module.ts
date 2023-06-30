import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserService } from './user.service';
import { HttpClientModule} from '@angular/common/http';
import { UserInsertComponent } from './user-insert/user-insert.component'
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'list', component: UsersListComponent },
  { path: 'insert', component: UserInsertComponent}
]

@NgModule({
  declarations: [
    UsersListComponent,
    UserInsertComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService]
})
export class UserModule { }
