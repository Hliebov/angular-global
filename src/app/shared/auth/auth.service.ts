import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { Http } from '@angular/http';
import { User } from './user.type';

@Injectable()
class AuthService {
  public username: ReplaySubject<string>;

  constructor(public http: Http) {
    this.username = new ReplaySubject(1);
    this.username.next(localStorage.getItem('userName') || '');
  }

  public login(name: string, password:string): void {
    this.http.get(`http://localhost:3030/users/?name=${name}`)
      .subscribe((user) => {
        let userInfo = user.json();
        this.checkCredentials(userInfo, password);
      });
    // if (name) {
    //   localStorage.setItem('userName', name);
    //   this.username.next(name);
    // }
  }

  public checkCredentials(userInfo: User, password:string) {

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
