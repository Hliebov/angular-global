import { Directive, ElementRef, Input, AfterViewChecked } from '@angular/core';
import { Course } from './../../core/course/course.type';

const twoWeeks = 14 * 24 * 60 * 60 * 1000;

@Directive({ selector: '[changePlate]' })
class ChangePlateDirective implements AfterViewChecked {
  @Input() public changePlate: Course;

  constructor(public element: ElementRef) {
    // lint
  }

  public ngAfterViewChecked() {
    this.checkDate();
  }

  public checkDate() {
    let now = +new Date();
    let created = this.changePlate.date;
    if (created < now && created >= now - twoWeeks) {
      this.element.nativeElement.classList.add('green-bordered');
    }
    if (created > now) {
      this.element.nativeElement.classList.add('blue-bordered');
    }
  }
}

export { ChangePlateDirective };
