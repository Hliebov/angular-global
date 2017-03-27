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
  constructor(public authService: AuthService) {
    // lint
  }

  public isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}
