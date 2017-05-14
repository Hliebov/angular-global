import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Course } from './../course/course.type';

@Injectable()
class EditCourseService {
  public activeCourse: Course;
  public isEditing: ReplaySubject<boolean> = new ReplaySubject(1);

  public editCourse(course: Course) {
    this.activeCourse = course;
    this.isEditing.next(true);
  }

  public cancelEdit(): void {
    this.isEditing.next(false);
  }

}

export { EditCourseService };
