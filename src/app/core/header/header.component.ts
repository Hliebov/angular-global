import { Component } from '@angular/core';
import { AuthService } from './../../shared/auth/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.template.html',
  styleUrls: ['header.style.scss']
})
class HeaderComponent {
  constructor(public authService: AuthService) {
    // lint
  }

  public logout(): void {
    this.authService.logout();
  }

  public isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  public getUserInfo(): string {
    return this.authService.getUserInfo();
  }
}

export { HeaderComponent };
