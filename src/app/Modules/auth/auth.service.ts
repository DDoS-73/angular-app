import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  EMPTY,
  Observable,
  switchMap,
  tap,
} from 'rxjs';
import { BASE_URL } from '../../constants';
import { ServerResponse } from '../../Models/ServerResponse.model';
import { User } from '../../Models/user.model';
import { MessageService } from '../message/message.service';

@Injectable()
export class AuthService {
  isAuth$ = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
  user: User = {
    name: '',
    email: '',
    password: '',
    role: '',
    id: '',
  };

  constructor(private http: HttpClient, private errorService: MessageService) {
    if (localStorage.getItem('token')) {
      this.fetchUserInfo().subscribe((res) => {
        this.user = res.result as User;
      });
    }
  }

  private fetchUserInfo() {
    return this.http.get<ServerResponse>(BASE_URL + '/users/me', {
      headers: { Authorization: localStorage.getItem('token') || '' },
    });
  }

  login(user: User): Observable<ServerResponse> {
    return this.http.post<ServerResponse>(BASE_URL + '/login', user).pipe(
      tap((res) => {
        localStorage.setItem('token', res.result as string);
      }),
      switchMap(() => {
        return this.fetchUserInfo();
      }),
      tap((res) => {
        this.user = res.result as User;
        this.isAuth$.next(true);
      }),
      catchError(this.handleError.bind(this))
    );
  }

  logout() {
    return this.http
      .delete(BASE_URL + '/logout', {
        headers: { Authorization: localStorage.getItem('token') || '' },
      })
      .pipe(
        tap(() => {
          this.user = {
            name: '',
            email: '',
            password: '',
            role: '',
            id: '',
          };
          localStorage.removeItem('token');
          this.isAuth$.next(false);
        }),
        catchError(this.handleError.bind(this))
      );
  }

  isAuth(): BehaviorSubject<boolean> {
    return this.isAuth$;
  }

  getUserInfo(): User {
    return this.user;
  }

  register(user: User): Observable<ServerResponse> {
    return this.http
      .post<ServerResponse>(BASE_URL + '/register', user)
      .pipe(catchError(this.handleError.bind(this)));
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
      this.errorService.openError(['Status code 0']);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
      this.errorService.openError(error.error.errors);
    }
    return EMPTY;
  }
}
