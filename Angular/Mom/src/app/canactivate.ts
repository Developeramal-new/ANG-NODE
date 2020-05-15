import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class Canactivate implements CanActivate {
  loggedIn = false;
  admin = false;
  constructor(private authserv: AuthService, private router: Router) {
    this.authserv.loggedin.subscribe(value => {
      this.loggedIn = value;
    });
    this.authserv.admin.subscribe(value => {
      this.admin = value;
    });
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    if (state.url.search('login') > -1) {
      if (this.loggedIn) {
        this.router.navigate(['']);
        return false;
      } else {
        return true;
      }
    }
    if (this.admin === true) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}
