import { UserInteface } from '../../interfaces/user.inteface';
import { createReducer, on } from '@ngrx/store';
import { LoginActions } from '../actions-types';
import { Game } from '../../interfaces/games.interface';
import firebase from 'firebase/compat';
import User = firebase.User;

export interface AuthState {
  user: User | null;
}
export const initialAuthState: AuthState = {
  user: null,
};

export const authReducer = createReducer(
  initialAuthState,

  on(LoginActions.login, (state, action) => {
    return {
      user: action.user,
    };
  }),

  on(LoginActions.register, (state, action) => {
    return {
      user: action.user,
    };
  }),

  on(LoginActions.addGame, (state, action) => {
    const user = JSON.parse(JSON.stringify(state.user));
    if (user.games) {
      user.games.push(action.game);
    } else {
      user.games = [action.game];
    }
    return {
      ...state,
      user: user,
    };
  }),
  on(LoginActions.removeGame, (state, action) => {
    const user = JSON.parse(JSON.stringify(state.user));
    if (user.games?.length > 0) {
      const objWithIdIndex = user.games.findIndex((game: Game) => game.id);
      user.games.splice(objWithIdIndex, 1);
    }
    return {
      ...state,
      user: user,
    };
  }),
  on(LoginActions.removeAllGames, state => {
    const user = JSON.parse(JSON.stringify(state.user));
    if (user.games) {
      user.games = [];
    }
    return {
      ...state,
      user: user,
    };
  })
);
