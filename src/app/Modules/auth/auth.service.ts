import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';

import { BASE_URL } from '../../constants';
import { SuccessfulResponse, UserResponse } from '../../Models/response';
import { User } from '../../Models/user.model';

@Injectable()
export class AuthService {
  private user: User = {
    name: '',
    email: '',
    password: '',
    role: '',
    id: '',
  };
  private isAuth$ = new BehaviorSubject<boolean>(
    !!localStorage.getItem('token')
  );
  private user$ = new BehaviorSubject<User>(this.user);

  constructor(private http: HttpClient) {
    if (localStorage.getItem('token')) {
      this.fetchUserInfo().subscribe((res) => {
        this.user$.next(res.result);
      });
    }
  }

  private fetchUserInfo() {
    return this.http.get<UserResponse>(BASE_URL + '/users/me');
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
        this.isAuth$.next(true);
        this.user$.next(res.result);
      })
    );
  }

  logout() {
    return this.http.delete(BASE_URL + '/logout').pipe(
      tap(() => {
        localStorage.removeItem('token');
        this.isAuth$.next(false);
        this.user$.next(this.user);
      })
    );
  }

  isAuth(): BehaviorSubject<boolean> {
    return this.isAuth$;
  }

  getUserInfo(): BehaviorSubject<User> {
    return this.user$;
  }

  register(user: User): Observable<SuccessfulResponse> {
    return this.http.post<SuccessfulResponse>(BASE_URL + '/register', user);
  }
}
