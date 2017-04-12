import { Injectable } from '@angular/core';
import { Course } from '../course/course.type';
import { mockCourses, course } from './courses.mock';
import { Observable } from 'rxjs';
import { FilterPipe } from './../../shared/filterPipe/filterPipe';
import { Http } from '@angular/http';

@Injectable()
class CoursesService {
  public courses: Course[];

  constructor(public http: Http) {
    // lint
  }

  public getList() {
    return this.http.get('http://localhost:3030/courses')
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
