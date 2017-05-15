import { Component, forwardRef, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
  // lint
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DurationCourseComponent),
  multi: true
};

@Component({
  selector: 'duration-course',
  styleUrls: [ 'durationCourse.style.scss' ],
  templateUrl: 'durationCourse.template.html',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
class DurationCourseComponent {
  public duration: number = 0;
  public onTouchedCallback: () => void = noop;
  public onChangeCallback: (_: any) => void = noop;

  @Output() public onDurationChange = new EventEmitter();

  // get accessor
  get value(): any {
    return this.duration / 60000;
  };

  // set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.duration) {
      this.duration = v * 60000;
      this.onDurationChange.emit(this.duration);
    }
  }

  // From ControlValueAccessor interface
  public writeValue(value: any) {
    if (value !== this.duration) {
      this.duration = value;
    }
  }

  // From ControlValueAccessor interface
  public registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  public registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}

export { DurationCourseComponent }
