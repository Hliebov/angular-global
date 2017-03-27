import { Component } from '@angular/core';
import { AuthService } from './../../shared/auth/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.template.html',
  styleUrls: ['./login.style.scss']
})
class LoginComponent {
  public name: string = '';
  public password: string = '';

  constructor(public authService: AuthService) {
    // lint
  }

  public login(): void {
    this.authService.login(this.name);
  }
}

export { LoginComponent };
