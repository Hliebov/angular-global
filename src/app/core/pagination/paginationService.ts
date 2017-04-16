import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs';
import { CoursesService } from '../courses/courses.service';
import { AuthorizedHttpService } from './../../shared/authorizedHttp/authorizedHttp.service';

const itemsPerPage = 3;

@Injectable()
class PaginationService {
  public pages: Subject<number[]> = new Subject();
  public activePage: Subject<number> = new Subject();

  constructor(public http: Http,
              public coursesService: CoursesService,
              public aHttp: AuthorizedHttpService) {
    // lint;
  }

  public getPagesNumber() {
    let pages;
    this.aHttp.get('http://localhost:3030/courses')
      .subscribe((courses) => {
        let items = courses.json().length;
        pages = Math.ceil(items / itemsPerPage);
        let pagesArr = [];
        for (let i = 1; i <= pages; i ++) {
          pagesArr.push(i);
        }
        this.pages.next(pagesArr);
      });
  }

  public getCoursesByPageNumber(pageNumber: number) {
    this.activePage.next(pageNumber);
    this.coursesService.getCoursesByPageNumber(pageNumber);
  }
}

export { PaginationService };
