import { Injectable } from '@angular/core';
import { Course } from '../course/course.type';
import { mockCourses } from './courses.mock';
import { Observable } from 'rxjs';

@Injectable()
class CoursesService {
  public courses: Course[] = mockCourses;

  public getList() {
    return Observable.of(this.courses);
  }

  public createCourse(): void {
    this.courses.push(this.courses[0]);
  }

  public getCourseById(id: string): Course {
    let foundCourse;
    this.courses.forEach((course) => {
      if (course._id === id) {
        foundCourse = course;
      }
    });
    return foundCourse || null;
  }

  public updateCourse(): void {
    // lint;
  }

  public removeCourse(id: string): void {
    let index;
    this.courses.forEach((course) => {
      if (course._id === id) {
        index = this.courses.indexOf(course);
      }
    });
    if (index > -1) {
      this.courses.splice(index, 1);
    }
  }
}

export { CoursesService };
