import { Component, OnInit } from '@angular/core';
import { Course } from './../course/course.type';
import { CoursesService } from './courses.service';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { LoaderBlockService } from './../../shared/loaderBlock/loaderBlock.service';

@Component({
  selector: 'courses',
  templateUrl: 'courses.template.html'
})
class CoursesComponent implements OnInit {
  public courses: Course[] = [];

  constructor( public coursesService: CoursesService,
               public loaderBlockService: LoaderBlockService,
               public modal: Modal) {
    // lint
  }

  public ngOnInit() {
    this.coursesService.getList().subscribe((courses) => {
      this.courses = courses;
    });
  }

  public openConfirmModal(message: string): Promise<any> {
    return this.modal.confirm()
      .showClose(true)
      .body(`
            <h5>${message}</h5>
            `)
      .open()
      .then((dialog) => {
        return dialog.result;
      });
  }

  public deleteCourseById(course: Course): void {
    let message = 'Are you sure want to delete this course?';
    this.openConfirmModal(message)
      .then((result) => {
        if (result) {
          this.loaderBlockService.show();
          setTimeout(() => {
            this.loaderBlockService.hide();
            this.coursesService.removeCourse(course._id);
          }, 500);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
}

export { CoursesComponent };
