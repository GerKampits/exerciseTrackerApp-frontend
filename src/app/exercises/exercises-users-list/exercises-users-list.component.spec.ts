import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesUsersListComponent } from './exercises-users-list.component';

describe('ExercisesUsersListComponent', () => {
  let component: ExercisesUsersListComponent;
  let fixture: ComponentFixture<ExercisesUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercisesUsersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercisesUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
