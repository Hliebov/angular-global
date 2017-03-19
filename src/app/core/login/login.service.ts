import { Injectable } from '@angular/core';

@Injectable()
class LoginService {
  public login(name: string): void {
    if (name) {
      localStorage.setItem('userName', name);
    }
  }

  public logout(): void {
    localStorage.removeItem('userName');
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('userName');
  }

  public getUserInfo(): string {
    return localStorage.getItem('userName') || '';
  }
}

export { LoginService };
