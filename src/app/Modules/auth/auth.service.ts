import { Injectable } from '@angular/core';
import { User } from '../../Models/user.model';
import { LoginUser } from '../../Models/loginUser.model';

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

  login(user: LoginUser) {
    console.log(user);
    this.user = { ...this.user, ...user };
    localStorage.setItem('user', JSON.stringify(this.user));
  }
  logout() {
    console.log('Logout');
    localStorage.clear();
  }
  isAuth(): boolean {
    return Boolean(this.user.id);
  }
  getUserInfo() {}
}
