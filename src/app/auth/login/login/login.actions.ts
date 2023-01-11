import {createAction, props} from "@ngrx/store";
import {UserInteface} from "../../../shared/interfaces/user.inteface";

export const login = createAction(
  '[Login page action] User Login',
  props<{user: UserInteface[]}>()
)
