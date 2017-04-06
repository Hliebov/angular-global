import { Component } from '@angular/core';
import { EditCourseService } from './../editCourse/editCourse.service';

@Component({
  selector: 'edit-course',
  templateUrl: 'editCourse.template.html',
  styleUrls: ['editCourse.style.scss']
})
class EditCourseComponent {
  constructor(public editCourseService: EditCourseService) {
    // lint
  }

  public cancelEdit(): void {
    this.editCourseService.cancelEdit();
  }
}

export { EditCourseComponent };
