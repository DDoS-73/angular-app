import { Injectable } from '@angular/core';
import { User } from '../../Models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  auth$ = new BehaviorSubject<boolean>(false);
  user: User = {
    id: '',
    firstName: '',
    secondName: '',
    email: '',
    password: '',
  };

  login(user: User) {
    this.user = { ...user, id: 'id', firstName: 'name', secondName: 'second' };
    localStorage.setItem('user', JSON.stringify(this.user));
    this.auth$.next(true);
  }

  logout() {
    console.log('Logout');
    this.user = {
      id: '',
      firstName: '',
      secondName: '',
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
