import {UserInteface} from "../../../../shared/interfaces/user.inteface";
import { createReducer, on} from "@ngrx/store";
import {LoginActions} from "../actions-types";

export  interface AuthState{
  user: UserInteface[]
}
export const initialAuthState: AuthState = {
  user: []
}

export const authReducer = createReducer(
  initialAuthState,

  on(LoginActions.login, (state, action) => {
    return {
      user: action.user
    }
  })

)
