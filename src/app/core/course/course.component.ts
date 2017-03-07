import { Component, Input } from '@angular/core';
import { Course } from './course.type';

@Component({
  selector: 'course',
  template: `<div>{{course.title}}</div>`
})
class CourseComponent {
  @Input() public course: Course;
}

export { CourseComponent };
