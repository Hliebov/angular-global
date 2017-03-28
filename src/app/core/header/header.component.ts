import { Component } from '@angular/core';
import { AuthService } from './../../shared/auth/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.template.html',
  styleUrls: ['header.style.scss']
})
class HeaderComponent {
  public username: string;
  constructor(public authService: AuthService) {
    this.authService.getUserInfo().subscribe((username) => {
      this.username = username;
    });
  }

  public logout(): void {
    this.authService.logout();
  }

}

export { HeaderComponent };
