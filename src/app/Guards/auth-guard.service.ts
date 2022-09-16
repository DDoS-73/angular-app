import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectAuthStatus } from '../Store/user/user.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isAuth: boolean = false;

  constructor(private router: Router, private store: Store) {
    this.store
      .select(selectAuthStatus)
      .subscribe((isAuth) => (this.isAuth = isAuth));
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkLogin();
  }

  checkLogin(): true | UrlTree {
    if (this.isAuth) {
      return true;
    }

    return this.router.parseUrl('login');
  }
}
