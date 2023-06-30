export interface Exercises {
  exercise: { type: string},
  duration: { type: number },
  description: { type: string },
  calories: { type: number },
  distance: { type: number },
  date: { type: string },
  _id: { type: string }
}

export interface UserExercises {
    username: string;
    usersExer: Exercises[]
    
   
}

export interface UserExercisesAPIList {
    status: boolean;
    data: UserExercises[]
}

export interface ExercisesAPIList {
    status: boolean;
    data: Exercises[];
}