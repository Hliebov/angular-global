import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { Http } from '@angular/http';
import { User } from '../../core/login/user.type';
import { LoaderBlockService } from '../loaderBlock/loaderBlock.service';

@Injectable()
class AuthService {
  public username: ReplaySubject<string>;

  constructor(public http: Http, public loaderBlockService: LoaderBlockService) {
    this.username = new ReplaySubject(1);
    this.username.next(localStorage.getItem('userName') || '');
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
      this.username.next(userInfo.name);
      document.cookie = `token=${userInfo.fakeToken}`;
    } else {
      alert('Login or password is not correct!');
    }
  }

  public logout(): void {
    localStorage.removeItem('userName');
    this.username.next('');
  }

  public getUserInfo(): ReplaySubject<string> {
    return this.username;
  }
}

export { AuthService };
