import { Component, OnInit } from '@angular/core';
import { EditCourseService } from './../editCourse/editCourse.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CoursesService } from '../courses/courses.service';
import * as moment from 'moment';

const dateFormat = 'DD/MM/YYYY';

@Component({
  selector: 'edit-course',
  templateUrl: 'editCourse.template.html',
  styleUrls: ['editCourse.style.scss']
})
class EditCourseComponent implements OnInit{
  public activeCourse;
  public myForm;
  public date;
  public invalidDate;
  constructor(public editCourseService: EditCourseService,
              public coursesService: CoursesService,
              public _fb: FormBuilder) {
    this.activeCourse = editCourseService.activeCourse;
  }

  ngOnInit() {
    this.myForm = this._fb.group({
      title: [this.activeCourse.title, [<any>Validators.required, <any>Validators.maxLength(50)]],
      description: [this.activeCourse.description, [<any>Validators.required, <any>Validators.maxLength(500)]]
    });

    this.date = moment(this.activeCourse.date).format(dateFormat);
  }

  public cancelEdit(): void {
    this.editCourseService.cancelEdit();
  }

  public onDurationChange(value) {
    this.activeCourse.duration = value;
  }

  public onDateChange(value) {
    let value = value.split('/');
    value = [value[1], value[0], value[2]].join('/');
    this.activeCourse.date = +new Date(value);
    if(isNaN(this.activeCourse.date)) {
      this.invalidDate = true;
    } else {
      this.invalidDate = false;
    }
  }

  public onAuthorsChange(authors) {
    this.activeCourse.authors = authors;
  }

  public save(form) {
    this.coursesService.updateCourse(form, this.activeCourse);
  }
}

export { EditCourseComponent };
