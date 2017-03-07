import { Component } from '@angular/core';
import { Course } from './../course/course.type';

@Component({
  selector: 'courses',
  template: `<div>Courses component
                <course *ngFor="let course of courses" [course]="course"></course>
            </div>`
})
class CoursesComponent {
  public courses: Course[] = [{
      _id: '123',
      title: 'course1',
      description: 'course1 des',
      duration: 60,
      date: 97868778768768
  },
    {
      _id: '123',
      title: 'course2',
      description: 'course1 des',
      duration: 60,
      date: 97868778768768
    }];
}

export { CoursesComponent };
