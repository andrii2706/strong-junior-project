import { User } from '@angular/fire/auth/firebase';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const userInfoSelector = createFeatureSelector<User | null>('userInfo');
export const userCreedSelector = createFeatureSelector<{
  email: string;
  password: string;
}>('userCreads');

export const getUserInfo = createSelector(
  userInfoSelector,
  (state: any) => state
);
export const getUserCreeds = createSelector(
  userCreedSelector,
  (state: { email: string; password: string }) => state
);
