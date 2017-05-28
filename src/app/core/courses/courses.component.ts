import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from './../course/course.type';
import { CoursesService } from './courses.service';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { LoaderBlockService } from './../../shared/loaderBlock/loaderBlock.service';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.store';
import { CoursesState } from '../../reducers/courses.reducer';

const MESSAGE = 'Are you sure want to delete this course?';

@Component({
  selector: 'courses',
  templateUrl: 'courses.template.html',
  styleUrls: ['courses.style.scss']
})
class CoursesComponent implements OnInit {
  public courses;

  constructor(public coursesService: CoursesService,
              public store: Store<AppState>,
              public loaderBlockService: LoaderBlockService,
              public modal: Modal) {
    // lint
  }

  public ngOnInit() {
    this.coursesService.getCoursesByPageNumber(1);
    this.courses = this.store.select('courses')
      .map((s: CoursesState) => {
        return s.data;
      });
  }

  public openConfirmModal(message: string): Promise<any> {
    return this.modal.confirm()
      .showClose(true)
      .body(`<h5>${message}</h5>`)
      .open()
      .then((dialog) => {
        return dialog.result;
      });
  }

  public deleteCourseById(course: Course): void {
    this.openConfirmModal(MESSAGE)
      .then((result) => {
        if (result) {
          this.loaderBlockService.show();
          this.coursesService.removeCourse(course._id);
        }
      });
  }
}

export {CoursesComponent, MESSAGE};
