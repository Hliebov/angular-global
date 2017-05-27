import { Component } from '@angular/core';
import { AuthService } from './../../shared/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.store';

@Component({
  selector: 'header',
  templateUrl: './header.template.html',
  styleUrls: ['header.style.scss']
})
class HeaderComponent {
  public username;
  public id: string;

  constructor(public authService: AuthService,
              public route: ActivatedRoute,
              public store: Store<AppState>,
              public router: Router) {
    this.username = this.store.select('auth')
      .filter((s) => {
        return !!s;
      })
      .map((s: any) => {
        return s.username;
      });

    this.router.events.subscribe((val) => {
        if (this.route.children[0].children[0]) {
          this.route.children[0].children[0].params.subscribe((p) => {
            this.id = p['id'];
          });
        } else {
          this.id = null;
        }
      });
  }

  public logout(): void {
    this.authService.logout();
  }

}

export { HeaderComponent };
