import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, mergeMap } from 'rxjs';

import { AuthService } from '../../Modules/auth/auth.service';
import { MessageService } from '../../Modules/message/message.service';
import {
  HeaderAction,
  loadUser,
  loadUserSuccess,
  LoginPageAction,
} from './user.actions';

@Injectable()
export class UserEffects {
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUser),
      mergeMap(() => {
        return this.authService
          .getUserInfo()
          .pipe(map(({ result }) => loadUserSuccess({ user: result })));
      })
    )
  );

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginPageAction.loginUser),
      exhaustMap((action) =>
        this.authService.login(action.user).pipe(
          map(({ result }) => {
            localStorage.setItem('token', result);
            this.messageService.openSuccess('Successful login');
            this.router.navigate(['/', 'courses']);
            return LoginPageAction.loginUserSuccess({ isAuth: true });
          })
        )
      )
    )
  );

  logoutUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeaderAction.logout),
      mergeMap(() =>
        this.authService.logout().pipe(
          map(() => {
            localStorage.removeItem('token');
            this.messageService.openSuccess('Successful logout');
            this.router.navigate(['login']);
            return HeaderAction.logoutSuccess();
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {}
}
