import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: './login.template.html',
  styleUrls: ['./login.style.scss']
})
class LoginComponent {
  public name: string = '';
  public password: string = '';

  constructor(public loginService: LoginService) {
    // lint
  }

  public login(): void {
    this.loginService.login(this.name);
  }
}

export { LoginComponent };
