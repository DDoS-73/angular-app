import { Injectable } from '@angular/core';
import { User } from '../../Models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  auth$ = new BehaviorSubject<boolean>(false);
  user: User = {
    name: '',
    email: '',
    password: '',
  };

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
}
