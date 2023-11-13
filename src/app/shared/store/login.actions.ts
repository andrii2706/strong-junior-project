import { createAction, props } from '@ngrx/store';
import { userCreeds, UserInteface } from '../interfaces/user.inteface';
import { Game, Games } from '../interfaces/games.interface';

export const register = createAction(
  '[Register user] User Registration',
  props<{ user: UserInteface }>()
);
export const userCread = createAction(
  '[Login user with cread]',
  props<{ params: userCreeds }>()
);
export const login = createAction(
  '[Login page action] User Login',
  props<{ user: UserInteface }>()
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
