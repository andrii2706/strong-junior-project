import {createAction, props} from "@ngrx/store";
import {UserInteface} from "../../../shared/interfaces/user.inteface";
import {Game} from "../../../shared/interfaces/games.interface";

export const login = createAction(
  '[Login page action] User Login',
  props<{user: UserInteface}>()
)
 export const addGame = createAction(
   '[Add games action] Add games to card',
   props<{game: Game}>()
)
