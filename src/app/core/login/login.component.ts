import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './../../shared/auth/auth.service';
import { LoaderBlockService } from './../../shared/loaderBlock/loaderBlock.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'login',
  templateUrl: './login.template.html',
  styleUrls: ['./login.style.scss']
})
class LoginComponent implements OnDestroy {
  public name: string = '';
  public password: string = '';
  public loaderBlockIsShown: boolean = false;
  public subscription: Subscription;

  constructor(public authService: AuthService, public loaderBlockService: LoaderBlockService) {
    this.subscription = loaderBlockService.isShown.subscribe((show) => {
      this.loaderBlockIsShown = show;
    });
  }

  public login(): void {
    this.loaderBlockService.show();
    setTimeout(() => {
      this.authService.login(this.name);
      this.loaderBlockService.hide();
    }, 500);
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

export { LoginComponent };
