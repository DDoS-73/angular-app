import { TestBed } from '@angular/core/testing';

import { User } from '../../Models/user.model';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AuthService] });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save user info', () => {
    const user: User = {
      email: 'email',
      password: 'passwords',
      name: '',
    };
    const expectedUser: User = {
      name: '',
      email: 'email',
      password: 'passwords',
    };
    service.login(user);
    expect(service.user).toEqual(expectedUser);
  });

  it('should return isAuth status', () => {
    expect(service.isAuth()).toBeFalse();
  });
});
