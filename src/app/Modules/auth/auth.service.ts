import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { BASE_URL } from '../../constants';
import { SuccessfulResponse, UserResponse } from '../../Models/response';
import { User } from '../../Models/user.model';

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

  constructor(private http: HttpClient) {
    if (localStorage.getItem('token')) {
      this.fetchUserInfo().subscribe((res) => {
        this.user = res.result;
      });
    }
  }

  private fetchUserInfo() {
    return this.http.get<UserResponse>(BASE_URL + '/users/me', {
      headers: { Authorization: localStorage.getItem('token') || '' },
    });
  }

  login(user: User): Observable<UserResponse> {
    return this.http.post<SuccessfulResponse>(BASE_URL + '/login', user).pipe(
      tap((res) => {
        localStorage.setItem('token', res.result);
      }),
      switchMap(() => {
        return this.fetchUserInfo();
      }),
      tap((res) => {
        this.user = res.result;
        this.isAuth$.next(true);
      })
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
        })
      );
  }

  isAuth(): BehaviorSubject<boolean> {
    return this.isAuth$;
  }

  getUserInfo(): User {
    return this.user;
  }

  register(user: User): Observable<SuccessfulResponse> {
    return this.http.post<SuccessfulResponse>(BASE_URL + '/register', user);
  }
}
