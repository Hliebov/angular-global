import { Component } from '@angular/core';
import { CoursesService } from './../courses/courses.service';

@Component({
  selector: 'add-course',
  templateUrl: 'addCourse.template.html',
  styleUrls: ['addCourse.style.scss']
})
class AddCourseComponent {
  constructor(public coursesService: CoursesService) {
    // lint
  }

  public addCourse(): void {
    this.coursesService.createCourse();
  }
}

export { AddCourseComponent };
