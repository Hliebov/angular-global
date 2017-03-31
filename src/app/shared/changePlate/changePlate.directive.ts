import { Directive, ElementRef, Input } from '@angular/core';
import { Course } from './../../core/course/course.type';

@Directive({ selector: '[changePlate]' })
class ChangePlateDirective {
  @Input() public course: Course;
  constructor(element: ElementRef) {

  }
}

export { ChangePlateDirective };
