import { createAction, props } from '@ngrx/store';
import { userCreeds } from '../interfaces/user.inteface';
import { Game } from '../interfaces/games.interface';
import firebase from 'firebase/compat';
import User = firebase.User;

export const register = createAction(
  '[Register user] User Registration',
  props<{ user: User | null }>()
);
export const userCread = createAction(
  '[Login user with cread]',
  props<{ params: userCreeds }>()
);
export const login = createAction(
  '[Login page action] User Login',
  props<{ user: User | null }>()
);
export const logout = createAction(
  '[Logout]- kill user from store and localStorage',
  props<{ user: null }>()
);
export const addGame = createAction(
  '[Add games action] Add games to card',
  props<{ game: Game }>()
);
export const removeGame = createAction('Remove game', props<{ game: Game }>());
export const removeAllGames = createAction(
  'Remove all games',
  props<{ games: [] }>()
);
