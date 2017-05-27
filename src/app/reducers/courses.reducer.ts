import { Action } from '@ngrx/store';
import { Course } from './../core/course/course.type';

const UPDATE_COURSES = 'UPDATE_COURSES';

const defaultCoursesState = {
  data: []
};

interface CoursesState {
  data: Course[];
}

function coursesReducer(state: CoursesState = defaultCoursesState, action: Action) {
  switch (action.type) {
    case UPDATE_COURSES:
      return Object.assign({}, state, {
        data: action.payload
      });

    default:
      return state;
  }
}

export { coursesReducer, CoursesState, UPDATE_COURSES };
