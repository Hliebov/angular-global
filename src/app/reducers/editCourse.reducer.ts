import { Action } from '@ngrx/store';
import { Course } from './../core/course/course.type';

const EDIT_COURSE = 'EDIT_COURSE';
const FINISH_EDIT_COURSE = 'FINISH_EDIT_COURSE';

const defaultEditCourseState = {
  isEditing: false,
  activeCourse: null
};

interface EditCourseState {
  isEditing: boolean;
  activeCourse: Course;
}

function editCourseReducer(state: EditCourseState = defaultEditCourseState, action: Action) {
  switch (action.type) {
    case EDIT_COURSE:
      return Object.assign({}, state, {
        isEditing: true,
        activeCourse: action.payload
      });

      case FINISH_EDIT_COURSE:
      return Object.assign({}, state, {
        isEditing: false,
        activeCourse: null
      });

    default:
      return state;
  }
}

export { editCourseReducer, EditCourseState, EDIT_COURSE, FINISH_EDIT_COURSE };

