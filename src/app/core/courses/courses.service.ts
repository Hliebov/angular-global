import { Injectable } from '@angular/core';
import { Course } from '../course/course.type';
import { ReplaySubject } from 'rxjs';
import { Http, Response } from '@angular/http';
import { AuthorizedHttpService } from './../../shared/authorizedHttp/authorizedHttp.service';
import { LoaderBlockService } from './../../shared/loaderBlock/loaderBlock.service';
import { Router } from '@angular/router';

const pageLimit = 3;

@Injectable()
class CoursesService {
  public courses: ReplaySubject<Course[]> = new ReplaySubject(1);

  constructor(public http: Http,
              public router: Router,
              public aHttp: AuthorizedHttpService,
              public loaderBlock: LoaderBlockService) {
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
          authors: course.authors
        };
      });
  }

  public getCoursesByPageNumber(pageNumber: number): void {
    this.loaderBlock.show();
    this.aHttp.get(`http://localhost:3030/courses?_page=${pageNumber}&_limit=${pageLimit}`)
      .subscribe((courses) => {
        this.loaderBlock.hide();
        let list = this.prepareCourses(courses);
        this.courses.next(list);
      });
  }

  public onSearch(searchQuery: string): void {
    this.aHttp.get(`http://localhost:3030/courses?title_like=${searchQuery}`)
      .subscribe((courses) => {
        let list = this.prepareCourses(courses);
        this.courses.next(list);
      });
  }

  public updateCourse(form, course): void {
    this.aHttp.put(`http://localhost:3030/courses/${course._id}`, {
      id: course._id,
      title: form.title,
      noDescription: form.description,
      duration: course.duration,
      date: course.date,
      topRated: course.topRated,
      authors: course.authors
    })
    .subscribe((response) => {
      if (response.status === 200) {
        alert('The course was updated!');
        this.router.navigate(['/courses']);
        this.getCoursesByPageNumber(1);
      }
    });
  }

  public removeCourse(id: string): void {
    this.aHttp.delete(`http://localhost:3030/courses/${id}`)
      .subscribe((response) => {
        if (response.status === 200) {
          this.getCoursesByPageNumber(1);
        }
      });
  }
}

export { CoursesService };
