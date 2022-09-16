import { createReducer, on } from '@ngrx/store';

import { User } from '../../Models/user.model';
import { loadUserSuccess, LoginPageAction } from './user.actions';

export interface userStore extends User {
  isAuth: boolean;
}

const initialState: userStore = {
  email: '',
  id: '',
  isAuth: !!localStorage.getItem('token'),
  password: '',
  role: '',
  name: '',
};

export const userReducer = createReducer(
  initialState,
  on(loadUserSuccess, (state, { user }) => ({ ...user, isAuth: true })),
  on(LoginPageAction.loginUserSuccess, (state, { isAuth }) => ({
    ...state,
    isAuth,
  }))
);
