import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from './course.type';

@Component({
  selector: 'course',
  templateUrl: 'course.template.html',
  styleUrls: ['course.style.scss']
})
class CourseComponent {
  @Input() public course: Course;
  @Output() public courseOutput: EventEmitter<Course> = new EventEmitter();

  public getProperDate(date: number): string {
    return (new Date(date)).toString();
  }

  public getDurationInMinutes(duration: number): string {
    return duration / (1000 * 60) + ' min';
  }

  public onCourseDelete(course: Course): void {
    this.courseOutput.emit(course);
  }
}

export { CourseComponent };
