import { Component, OnInit } from '@angular/core';
import { Course } from './../course/course.type';
import { CoursesService } from './courses.service';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'courses',
  templateUrl: 'courses.template.html'
})
class CoursesComponent implements OnInit {
  public courses: Course[];

  constructor( public coursesService: CoursesService,
               public modal: Modal) {
    // lint
  }

  public ngOnInit() {
    this.courses = this.coursesService.getList();
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
          this.coursesService.removeCourse(course._id);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
}

export { CoursesComponent };
