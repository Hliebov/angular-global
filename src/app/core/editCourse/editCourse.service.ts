import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Course } from './../course/course.type';

@Injectable()
class EditCourseService {
  public isEditing: Subject<boolean> = new Subject();

  public editCourse(course: Course) {
    this.isEditing.next(true);
  }

  public cancelEdit(): void {
    this.isEditing.next(false);
  }

}

export { EditCourseService };
