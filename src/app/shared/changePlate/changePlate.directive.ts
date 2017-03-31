import { Directive, ElementRef, Input, AfterContentInit } from '@angular/core';
import { Course } from './../../core/course/course.type';

@Directive({ selector: '[changePlate]' })
class ChangePlateDirective implements AfterContentInit {
  @Input() public changePlate: Course;
  constructor(element: ElementRef) {
    // lint
  }
  public ngAfterContentInit() {
    //console.log(this.changePlate);
  }
}

export { ChangePlateDirective };
