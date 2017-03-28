import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
class AuthService {
  public username: BehaviorSubject<string>;

  constructor() {
    this.username = new BehaviorSubject(localStorage.getItem('userName') || '');
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

  public getUserInfo(): BehaviorSubject<string> {
    return this.username;
  }
}

export { AuthService };
