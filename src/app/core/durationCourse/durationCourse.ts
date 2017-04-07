import {
  Component
} from '@angular/core';

@Component({
  selector: 'duration-course',
  styleUrls: [ 'durationCourse.style.scss' ],
  templateUrl: 'durationCourse.template.html'
})
class DurationCourseComponent {
  public duration: number = 0;
}

export { DurationCourseComponent }
