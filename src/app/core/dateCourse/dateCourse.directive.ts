import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';

function validateEmailFactory(date) {
  return (c: FormControl) => {
    let DATE_REGEXP = /^(((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2})))$/i;

    return DATE_REGEXP.test(c.value) ? null : {
      validateDate: {
        valid: false
      }
    };
  };
}

@Directive({
  selector: '[validateDate][ngModel],[validateDate][formControl]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => DateCourseDirective), multi: true }
  ]
})
export class DateCourseDirective {

  public validator: Function;

  constructor(date) {
    this.validator = validateEmailFactory(date);
  }

  public validate(c: FormControl) {
    return this.validator(c);
  }
}
