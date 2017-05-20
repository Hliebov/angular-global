import { Injectable }     from '@angular/core';
import { CanActivate, Router }    from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public router: Router) {
    // lint
  }

  public canActivate() {
    if (!localStorage.getItem('userName')) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
