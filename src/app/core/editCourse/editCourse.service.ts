import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Course } from './../course/course.type';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.store';
import { EDIT_COURSE, FINISH_EDIT_COURSE } from './../../reducers/editCourse.reducer';

@Injectable()
class EditCourseService {
  constructor(public store: Store<AppState>) {
    // lint;
  }

  public editCourse(course: Course) {
    this.store.dispatch({type: EDIT_COURSE, payload: course});
  }

  public cancelEdit(): void {
    this.store.dispatch({type: FINISH_EDIT_COURSE});
  }

}

export { EditCourseService };
