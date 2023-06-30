import { Component } from '@angular/core';
import { MenuItem } from './app.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExerciseTracker';

  usersMenu: MenuItem[] = [
    { text: 'List all Users', link: 'user/list'},
    { text: 'Create a User', link: 'user/insert'},
    
  ];
  exercisesMenu: MenuItem[] = [
    { text: 'List all exercises', link: 'exercises/list'},
    { text: "List of all users' exercises", link: 'exercises/userexerciseslist' },
    { text: 'Insert an exercise', link: 'exercises/insert'}
  ];
  aboutMenu: MenuItem[] = [ 
    { text: 'The App', link: 'about/theapp'},
    { text: 'Us', link: 'not-implemented-yet'}
  ]
}
