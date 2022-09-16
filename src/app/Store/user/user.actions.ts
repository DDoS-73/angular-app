import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';

import { User } from '../../Models/user.model';

export const loadUser = createAction('[Course Page] Load User');
export const loadUserSuccess = createAction(
  '[Course Page] Load User Success',
  props<{ user: User }>()
);

export const LoginPageAction = createActionGroup({
  source: 'Login Page',
  events: {
    'Login User': props<{ user: User }>(),
    'Login User Success': props<{ isAuth: boolean }>(),
  },
});

export const HeaderAction = createActionGroup({
  source: 'Header',
  events: {
    Logout: emptyProps(),
    'Logout Success': emptyProps(),
  },
});
