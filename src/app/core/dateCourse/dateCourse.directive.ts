import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';

function validateEmailFactory(date) {
  return (c: FormControl) => {
    let DATE_REGEXP = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/i;

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

  validator: Function;

  constructor(date) {
    this.validator = validateEmailFactory(date);
  }

  validate(c: FormControl) {
    return this.validator(c);
  }
}
