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
export class HomeComponent implements OnDestroy {
  public username: string;
  public isEditing: boolean;
  public userInfoSubscription: Subscription;
  public isEditingCourseSubscription: Subscription;

  constructor(public authService: AuthService, public editCourseService: EditCourseService) {
    this.userInfoSubscription = this.authService.getUserInfo().subscribe((username) => {
      this.username = username;
    });
    this.isEditingCourseSubscription = this.editCourseService.isEditing.subscribe((isEditing) => {
      this.isEditing = isEditing;
    });
  }

  public ngOnDestroy() {
    this.userInfoSubscription.unsubscribe();
  }
}
