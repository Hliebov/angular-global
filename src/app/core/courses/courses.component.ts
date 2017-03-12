import { Component } from '@angular/core';
import { Course } from './../course/course.type';
import { mockCourses } from './courses.mock';

@Component({
  selector: 'courses',
  templateUrl: 'courses.template.html'
})
class CoursesComponent {
  public courses: Course[] = mockCourses;

  public printDeletedCourseId(course: Course): void {
    console.log(course._id);
  }
}

export { CoursesComponent };
