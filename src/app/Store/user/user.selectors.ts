import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Features } from '../features';
import { userStore } from './user.reducer';

export const selectUser = createFeatureSelector<userStore>(Features.User);

export const selectAuthStatus = createSelector(
  selectUser,
  (state: userStore) => state.isAuth
);

export const selectRole = createSelector(
  selectUser,
  (state: userStore) => state.role
);

export const selectName = createSelector(selectUser, (state) => state.name);
