import {
  Component, OnDestroy
} from '@angular/core';
import { AuthService } from './../shared/auth/auth.service';
import { Subscription } from 'rxjs';
import { EditCourseService } from './../core/editCourse/editCourse.service';

@Component({
  selector: 'home',
  styleUrls: [ 'home.style.scss' ],
  templateUrl: 'home.template.html'
})
export class HomeComponent {
}
