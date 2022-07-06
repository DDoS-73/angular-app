import { Injectable } from '@angular/core';
import { User } from '../../Models/user.model';

@Injectable()
export class AuthService {
  constructor() {}
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
  }

  isAuth(): boolean {
    return Boolean(localStorage.getItem('user'));
  }

  getUserInfo(): User {
    return this.user;
  }
}
