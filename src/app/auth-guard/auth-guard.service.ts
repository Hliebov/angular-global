import { Injectable }     from '@angular/core';
import { CanActivate, Router }    from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './../app.store';
import { LOGIN } from '../reducers/auth.reducer';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public router: Router, public store: Store<AppState>) {
    // lint
  }

  public canActivate() {
    let username = localStorage.getItem('userName');
    if (!username) {
      this.router.navigate(['/login']);
      return false;
    } else {
      this.store.dispatch({type: LOGIN, payload: username});
      return true;
    }
  }
}
