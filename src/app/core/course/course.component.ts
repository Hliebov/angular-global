import { Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  NgZone } from '@angular/core';
import { Course } from './course.type';
import { EditCourseService } from './../editCourse/editCourse.service';

let t1 = 0;

@Component({
  selector: 'course',
  templateUrl: 'course.template.html',
  styleUrls: ['course.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
class CourseComponent {
  @Input() public course: Course;
  @Output() public courseOutput: EventEmitter<Course> = new EventEmitter();

  constructor(private ngZone: NgZone, public editCourseService: EditCourseService) {
    this.ngZone.onStable.subscribe(this.onZoneStable);
    this.ngZone.onUnstable.subscribe(this.onZoneUnstable);
  }

  public onZoneStable() {
    let timeDiff = +new Date() - t1;
    console.log('We are stable, execution time: ', timeDiff);
  }

  public onZoneUnstable() {
    t1 = +new Date();
    console.log('We are unstable');
  }

  public getProperDate(date: number): string {
    return (new Date(date)).toDateString();
  }

  public getDurationInMinutes(duration: number): string {
    return duration / (1000 * 60) + ' min';
  }

  public onCourseDelete(course: Course): void {
    this.courseOutput.emit(course);
  }

  public editCourse(course: Course) {
    this.editCourseService.editCourse(course);
  }
}

export { CourseComponent };
