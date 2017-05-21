import {
  Component
} from '@angular/core';
import { EditCourseService } from '../core/editCourse/editCourse.service';

@Component({
  selector: 'courses-all',
  styleUrls: [ 'courses.style.scss' ],
  templateUrl: 'courses.template.html'
})
export class CoursesAllComponent {
  public isEditing: boolean;

  constructor(public editCourseService: EditCourseService) {
    editCourseService.isEditing.subscribe((i) => {
      this.isEditing = i;
    });
  }
}
