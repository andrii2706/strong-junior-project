import {createAction, props} from "@ngrx/store";
import {Game} from "../../../shared/interfaces/games.interface";

export const gamesActions = createAction(
  '[Games page] Games come form backend',
  props<{games: Game[] }>()
  )


