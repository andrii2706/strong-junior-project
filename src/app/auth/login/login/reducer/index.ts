import {UserInteface} from "../../../../shared/interfaces/user.inteface";
import { createReducer, on} from "@ngrx/store";
import {LoginActions} from "../actions-types";

export  interface AuthState{
  user: UserInteface | null | undefined
}
export const initialAuthState: AuthState = {
  user: null,
}

export const authReducer = createReducer(
  initialAuthState,

  on(LoginActions.login, (state, action) => {
    return {
      user: action.user
    }
  }),

  on(LoginActions.addGame, (state, action) => {
   const user = JSON.parse(JSON.stringify(state.user))
    if(user.games){
      user.games.push(action.game);
    }else{
      user.games = [action.game];
    }
    return {
       ...state, user: user
    }
  })

)
