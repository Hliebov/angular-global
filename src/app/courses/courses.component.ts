import {
  Component
} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './../app.store';
import {FINISH_EDIT_COURSE} from './../reducers/editCourse.reducer';

@Component({
  selector: 'courses-all',
  styleUrls: ['courses.style.scss'],
  templateUrl: 'courses.template.html'
})
export class CoursesAllComponent {
  public isEditing;

  constructor(public store: Store<AppState>) {
    this.isEditing = this.store.select('editCourse')
      .map((s: any) => {
        return s.isEditing;
      });
  }
}
