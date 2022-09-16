import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BASE_URL } from '../../constants';
import { SuccessfulResponse, UserResponse } from '../../Models/response';
import { User } from '../../Models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user: User): Observable<SuccessfulResponse> {
    return this.http.post<SuccessfulResponse>(BASE_URL + '/login', user);
  }

  logout() {
    return this.http.delete(BASE_URL + '/logout');
  }

  getUserInfo(): Observable<UserResponse> {
    return this.http.get<UserResponse>(BASE_URL + '/users/me');
  }

  register(user: User): Observable<SuccessfulResponse> {
    return this.http.post<SuccessfulResponse>(BASE_URL + '/register', user);
  }
}
