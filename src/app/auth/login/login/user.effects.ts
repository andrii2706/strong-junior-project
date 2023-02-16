import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {LoginActions} from "./actions-types";
import {tap} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class UserEffects {
  login$ = createEffect(() =>
      this.actions$.pipe(
        ofType(LoginActions.login),
        tap(action => {
          const userInfo = {
            firstName: action.user.firstName,
            lastName: action.user.lastName,
            email: action.user.email,
            phoneNumber: action.user.phoneNumber,
            avatar: action.user.avatar,
            games: action.user.games
          }
          localStorage.setItem("user", JSON.stringify(userInfo))
        })
      ),
    {dispatch: false}
  );
  logout$ = createEffect(() =>
      this.actions$.pipe(
        ofType(LoginActions.logout),
        tap(action => {
          localStorage.removeItem("user");
          void this.router.navigateByUrl("")
        })
      ),
    {dispatch: false}
  );

  constructor(private actions$: Actions, private router: Router) {
  }
}

