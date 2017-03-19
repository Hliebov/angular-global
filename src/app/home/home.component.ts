import {
  Component
} from '@angular/core';
import { LoginService } from './../core/login/login.service';

@Component({
  selector: 'home',
  styleUrls: [ 'home.style.scss' ],
  templateUrl: 'home.template.html'
})
export class HomeComponent {
  constructor(public loginService: LoginService) {
    // lint
  }

  public isAuthenticated(): boolean {
    return this.loginService.isAuthenticated();
  }
}
