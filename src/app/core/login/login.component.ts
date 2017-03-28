import { Component } from '@angular/core';
import { AuthService } from './../../shared/auth/auth.service';
import { LoaderBlockService } from './../../shared/loaderBlock/loaderBlock.service';

@Component({
  selector: 'login',
  templateUrl: './login.template.html',
  styleUrls: ['./login.style.scss']
})
class LoginComponent {
  public name: string = '';
  public password: string = '';

  constructor(public authService: AuthService, public loaderBlockService: LoaderBlockService) {
    // lint
  }

  public login(): void {
    this.loaderBlockService.show();
    setTimeout(() => {
      this.authService.login(this.name);
      this.loaderBlockService.hide();
    }, 500);
  }
}

export { LoginComponent };
