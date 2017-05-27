import { Component, OnDestroy } from '@angular/core';
import { PaginationService } from './paginationService';
import { Subscription } from 'rxjs';
import { EditCourseService } from './../editCourse/editCourse.service';
import { AppState } from '../../app.store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'pagination',
  templateUrl: 'pagination.template.html',
  styleUrls: ['pagination.style.scss']
})
class PaginationComponent implements OnDestroy {
  public pages: number[];
  public activePage: number = 1;

  public pagesSubscription: Subscription;
  public activePageSubscription: Subscription;
  public isEditingSubscription: Subscription;

  constructor( public paginationService: PaginationService,
               public store: Store<AppState>,
               public editCourseService: EditCourseService) {
    this.pagesSubscription = this.paginationService.pages.subscribe((pagesNumber) => {
      this.pages = pagesNumber;
    });
    this.activePageSubscription = this.paginationService.activePage.subscribe((page) => {
      this.activePage = page;
    });
    this.isEditingSubscription = this.store.select('editCourse').subscribe((s: any) => {
      if (!s.isEditing) {
        this.getCoursesByPageNumber(this.activePage);
      }
    });
    this.paginationService.getPagesNumber();
  }

  public getCoursesByPageNumber(pageNumber: number) {
    this.paginationService.getCoursesByPageNumber(pageNumber);
  }

  public ngOnDestroy() {
    this.pagesSubscription.unsubscribe();
    this.activePageSubscription.unsubscribe();
    this.isEditingSubscription.unsubscribe();
  }

}

export { PaginationComponent };
