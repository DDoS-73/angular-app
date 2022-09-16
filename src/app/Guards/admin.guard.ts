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

import { selectRole } from '../Store/user/user.selectors';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  role: string | undefined;

  constructor(private router: Router, private store: Store) {
    this.store.select(selectRole).subscribe((role) => {
      this.role = role;
    });
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
    if (this.role === 'admin') {
      return true;
    }

    return this.router.parseUrl('courses');
  }
}
