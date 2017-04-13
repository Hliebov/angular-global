import { Component, OnInit, OnDestroy } from '@angular/core';
import { PaginationService } from './paginationService';

@Component({
  selector: 'pagination',
  templateUrl: 'pagination.template.html',
  styleUrls: ['pagination.style.scss']
})
class PaginationComponent {
  public pages: number[];

  constructor( public paginationService: PaginationService) {
    this.paginationService.pages.subscribe((pagesNumber) => {
      this.pages = pagesNumber;
    });
    this.paginationService.getPagesNumber();
  }

  public getCoursesByPageNumber(pageNumber: number) {
    this.paginationService.getCoursesByPageNumber(pageNumber);
  }

}

export { PaginationComponent };
