import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { UserInteface } from '../interfaces/user.inteface';

export const userInfoSelector = createFeatureSelector<UserInteface>('userInfo');

export const getUserInfo = createSelector(
  userInfoSelector,
  (state: UserInteface) => state
);
