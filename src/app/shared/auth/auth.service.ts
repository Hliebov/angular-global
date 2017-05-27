import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { Http } from '@angular/http';
import { User } from '../../core/login/user.type';
import { LoaderBlockService } from '../loaderBlock/loaderBlock.service';
import { CoursesService } from './../../core/courses/courses.service';
import * as Cookies from 'cookies-js';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.store';
import { LOGIN, LOGOUT } from './../../reducers/auth.reducer';

@Injectable()
class AuthService {

  constructor(public http: Http,
              public store: Store<AppState>,
              public router: Router,
              public loaderBlockService: LoaderBlockService,
              public coursesService: CoursesService) {
  }

  public login(name: string, password: string): void {
    this.http.get(`http://localhost:3030/users/?name=${name}`)
      .subscribe((user) => {
        this.loaderBlockService.hide();
        let userInfo = user.json();
        if (!userInfo.length) {
          alert('User not found!');
        } else {
          this.checkCredentials(userInfo[0], password);
        }
      });
  }

  public checkCredentials(userInfo: User, password: string) {
    if (userInfo.password === password) {
      localStorage.setItem('userName', userInfo.name);
      this.store.dispatch({type: LOGIN, payload: userInfo.name});
      this.coursesService.getCoursesByPageNumber(1);
      Cookies.set('token', userInfo.fakeToken);
      this.router.navigate(['/courses']);
    } else {
      alert('Login or password is not correct!');
    }
  }

  public logout(): void {
    localStorage.removeItem('userName');
    this.store.dispatch({type: LOGOUT, payload: ''});
    this.router.navigate(['/login']);
  }
}

export { AuthService };
