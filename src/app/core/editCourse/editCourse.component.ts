import { Component, OnInit } from '@angular/core';
import { EditCourseService } from './../editCourse/editCourse.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CoursesService } from '../courses/courses.service';
import * as moment from 'moment';
import {Router, ActivatedRoute} from "@angular/router";

const dateFormat = 'DD/MM/YYYY';

@Component({
  selector: 'edit-course',
  templateUrl: 'editCourse.template.html',
  styleUrls: ['editCourse.style.scss']
})
class EditCourseComponent implements OnInit {
  public activeCourse;
  public myForm;
  public date;
  public id;
  public invalidDate;
  public invalidAuthors;
  constructor(public editCourseService: EditCourseService,
              public route: ActivatedRoute,
              public router: Router,
              public coursesService: CoursesService,
              public _fb: FormBuilder) {
  }

  public ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.coursesService.courses.subscribe((courses) => {
        courses.forEach((course) => {
          if (course._id === this.id) {
            this.activeCourse = course;
            this.myForm = this._fb.group({
              title: [this.activeCourse.title, [<any> Validators.required, <any> Validators.maxLength(50)]],
              description: [this.activeCourse.description,
                [<any> Validators.required, <any> Validators.maxLength(500)]
              ]
            });
            this.date = moment(this.activeCourse.date).format(dateFormat);
          }
        });
      });
    });
  }

  public cancelEdit(): void {
    this.editCourseService.cancelEdit();
    this.router.navigate(['/courses']);
  }

  public onDurationChange(value) {
    this.activeCourse.duration = value;
  }

  public onDateChange(v) {
    let value = v.split('/');
    value = [value[1], value[0], value[2]].join('/');
    this.activeCourse.date = +new Date(value);
    if (isNaN(this.activeCourse.date)) {
      this.invalidDate = true;
    } else {
      this.invalidDate = false;
    }
  }

  public onAuthorsChange(authors) {
    this.activeCourse.authors = authors;
    let checkedAuthors = authors.filter((a) => {
      return a.checked;
    });
    if (checkedAuthors.length < 1) {
      this.invalidAuthors = true;
    } else {
      this.invalidAuthors = false;
    }
  }

  public save(form) {
    this.coursesService.updateCourse(form, this.activeCourse);
    this.editCourseService.cancelEdit();
  }
}

export { EditCourseComponent };
