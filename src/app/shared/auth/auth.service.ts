import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
class AuthService {
  public username: ReplaySubject<string>;

  constructor() {
    this.username = new ReplaySubject(1);
    this.username.next(localStorage.getItem('userName') || '');
  }

  public login(name: string): void {
    if (name) {
      localStorage.setItem('userName', name);
      this.username.next(name);
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
