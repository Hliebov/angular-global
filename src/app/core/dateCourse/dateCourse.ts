import { Component, forwardRef, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import * as moment from 'moment';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateCourseComponent),
  multi: true
};

@Component({
  selector: 'date-course',
  styleUrls: [ 'dateCourse.style.scss' ],
  templateUrl: 'dateCourse.template.html',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
class DateCourseComponent {
  public date: string = '';
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;
  @Output() onDateChange = new EventEmitter();

  //get accessor
  get value(): any {
    return this.date;
  };

  //set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.date) {
      this.date = v;
      this.onDateChange.emit(this.date);
    }
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.date) {
      this.date = value;
    }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}

export { DateCourseComponent }
