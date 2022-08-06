import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../Modules/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  role: string | undefined;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.getUserInfo().subscribe((user) => {
      this.role = user.role;
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
