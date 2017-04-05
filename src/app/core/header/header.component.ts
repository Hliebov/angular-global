import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './../../shared/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'header',
  templateUrl: './header.template.html',
  styleUrls: ['header.style.scss']
})
class HeaderComponent implements OnDestroy {
  public username: string;
  public subscription: Subscription;

  constructor(public authService: AuthService) {
    this.subscription = this.authService.getUserInfo().subscribe((username) => {
      this.username = username;
    });
  }

  public logout(): void {
    this.authService.logout();
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

export { HeaderComponent };
