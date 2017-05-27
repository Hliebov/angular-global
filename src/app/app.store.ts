import { authReducer, AuthState } from './reducers/auth.reducer';
import { coursesReducer, CoursesState } from './reducers/courses.reducer';
import { editCourseReducer, EditCourseState } from './reducers/editCourse.reducer';

interface AppState {
  authReducer: AuthState;
  courses: CoursesState;
  editCourse: EditCourseState;
}

const reducerDef = {
  auth: authReducer,
  courses: coursesReducer,
  editCourse: editCourseReducer
};

export { reducerDef, AppState };
