import {
  Component
} from '@angular/core';
import { AuthService } from './../shared/auth/auth.service';

@Component({
  selector: 'home',
  styleUrls: [ 'home.style.scss' ],
  templateUrl: 'home.template.html'
})
export class HomeComponent {
  public username: string;

  constructor(public authService: AuthService) {
    this.authService.getUserInfo().subscribe((username) => {
      this.username = username;
    });
  }
}
