import { Component } from '@angular/core';
import { LoginService } from './../login/login.service';

@Component({
  selector: 'header',
  templateUrl: './header.template.html',
  styleUrls: ['header.style.scss']
})
class HeaderComponent {
  constructor(public loginService: LoginService) {
    // lint
  }

  public logout(): void {
    this.loginService.logout();
  }

  public isAuthenticated(): boolean {
    return this.loginService.isAuthenticated();
  }

  public getUserInfo(): string {
    return this.loginService.getUserInfo();
  }
}

export { HeaderComponent };
