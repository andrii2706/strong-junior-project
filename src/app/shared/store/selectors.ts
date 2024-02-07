import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { UserInteface } from '../interfaces/user.inteface';

export const userInfoSelector = createFeatureSelector<UserInteface>('userInfo');
export const userCreedSelector = createFeatureSelector<{
  email: string;
  password: string;
}>('userCreads');

export const getUserInfo = createSelector(
  userInfoSelector,
  (state: UserInteface) => state
);
export const getUserCreeds = createSelector(
  userCreedSelector,
  (state: { email: string; password: string }) => state
);
