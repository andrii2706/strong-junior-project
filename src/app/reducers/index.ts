import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector, createReducer,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {UserInteface} from "../shared/interfaces/user.inteface";

export interface AppState {
  auth:{
    user: UserInteface[]
  }
}





