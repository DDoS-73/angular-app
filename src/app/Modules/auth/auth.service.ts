import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, EMPTY, Observable } from 'rxjs';
import { BASE_URL } from '../../constants';
import { User } from '../../Models/user.model';
import { MessageService } from '../message/message.service';

@Injectable()
export class AuthService {
  auth$ = new BehaviorSubject<boolean>(false);
  user: User = {
    name: '',
    email: '',
    password: '',
  };

  constructor(private http: HttpClient, private errorService: MessageService) {}

  login(user: User) {
    this.user = { ...user, name: 'name' };
    localStorage.setItem('user', JSON.stringify(this.user));
    this.auth$.next(true);
  }

  logout() {
    this.user = {
      name: '',
      email: '',
      password: '',
    };
    localStorage.clear();
    this.auth$.next(false);
  }

  isAuth(): BehaviorSubject<boolean> {
    return this.auth$;
  }

  getUserInfo(): User {
    return this.user;
  }

  register(user: User): Observable<{ successful: boolean; result: string }> {
    return this.http
      .post<{ successful: boolean; result: string }>(
        BASE_URL + '/register',
        user
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
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
        })
      );
  }
}
