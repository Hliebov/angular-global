import {
  Component, OnDestroy
} from '@angular/core';
import { AuthService } from './../shared/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'home',
  styleUrls: [ 'home.style.scss' ],
  templateUrl: 'home.template.html'
})
export class HomeComponent implements OnDestroy {
  public username: string;
  public subscription: Subscription;

  constructor(public authService: AuthService) {
    this.subscription = this.authService.getUserInfo().subscribe((username) => {
      this.username = username;
    });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
