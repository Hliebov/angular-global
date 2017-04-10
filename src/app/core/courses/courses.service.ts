import { Injectable } from '@angular/core';
import { Course } from '../course/course.type';
import { mockCourses, course } from './courses.mock';
import { Observable } from 'rxjs';
import { FilterPipe } from './../../shared/filterPipe/filterPipe';

@Injectable()
class CoursesService {
  public courses: Course[];

  public getList() {
    // mapping mocked (aka BE) response to data model, done for "title" and "duration" fields:
    this.courses = mockCourses.map((course) => {
      return {
        _id: course._id,
        title: course.noTitle,
        description: course.noDescription,
        duration: course.duration,
        date: course.date,
        topRated: course.topRated,
      }
    });

    return Observable.of(this.courses);
  }

  public createCourse(): void {
    this.courses.push(course);
  }

  public onSearch(searchQuery) {
    let filterPipe = new FilterPipe();
    let cs = filterPipe.transform(this.courses, searchQuery);
    this.courses.splice(0, this.courses.length);
    this.courses.push.apply(this.courses, cs);
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
