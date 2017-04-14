import { Injectable, OnInit} from '@angular/core';
import { Course } from '../course/course.type';
import { Observable, Subject } from 'rxjs';
import { FilterPipe } from './../../shared/filterPipe/filterPipe';
import { Http, Response } from '@angular/http';
import { PaginationService } from './../pagination/paginationService';

const pageLimit = 3;

@Injectable()
class CoursesService{
  public courses: Subject<Course[]> = new Subject();

  constructor(public http: Http) {
    this.getCoursesByPageNumber(1);
  }

  public createCourse(): void {
    // lint;
  }

  public prepareCourses(courses: Response): Course[] {
    return courses.json()
      .map((course) => {
        return {
          _id: course.id,
          title: course.title,
          description: course.noDescription,
          duration: course.duration,
          date: course.date,
          topRated: course.topRated,
        };
      });
  }

  public getCoursesByPageNumber(pageNumber: number): void {
    this.http.get(`http://localhost:3030/courses?_page=${pageNumber}&_limit=${pageLimit}`)
      .subscribe((courses) => {
        let list = this.prepareCourses(courses);
        this.courses.next(list);
      });
  }

  public onSearch(searchQuery: string): void {
    this.http.get(`http://localhost:3030/courses?title_like=${searchQuery}`)
      .subscribe((courses) => {
        let list = this.prepareCourses(courses);
        this.courses.next(list);
      });
  }

  public updateCourse(): void {
    // lint;
  }

  public removeCourse(id: string): void {
    console.log(id);
    this.http.delete(`http://localhost:3030/courses/${id}`);
    // let index;
    // this.courses.forEach((course) => {
    //   if (course._id === id) {
    //     index = this.courses.indexOf(course);
    //   }
    // });
    // if (index > -1) {
    //   this.courses.splice(index, 1);
    // }
  }
}

export { CoursesService };
