import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './../../shared/auth/auth.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.template.html',
  styleUrls: ['header.style.scss']
})
class HeaderComponent implements OnDestroy {
  public username: string;
  public id: string;
  public subscription: Subscription;

  constructor(public authService: AuthService, public route: ActivatedRoute, public router: Router) {
    this.subscription = this.authService.getUserInfo().subscribe((username) => {
      this.username = username;
    });

    this.router.events
      .subscribe((val) => {
        if(this.route.children[0].children[0]) {
          this.route.children[0].children[0].params.subscribe((p) => {
            this.id = p.id;
          });
        } else {
          this.id = null;
        }
      })

  }

  public logout(): void {
    this.authService.logout();
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

export { HeaderComponent };
