import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesInsertComponent } from './exercises-insert.component';

describe('ExercisesInsertComponent', () => {
  let component: ExercisesInsertComponent;
  let fixture: ComponentFixture<ExercisesInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercisesInsertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercisesInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
