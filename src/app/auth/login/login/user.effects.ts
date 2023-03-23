import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {LoginActions} from "./actions-types";
import {map, mergeMap, of, tap} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "../../../shared/services/auth.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../../reducers";
import {SnackbarComponent} from "../../../shared/components/snackbar/snackbar.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {login} from "./login.actions";
import {UserInteface} from "../../../shared/interfaces/user.inteface";

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private snackBar: MatSnackBar,
    private router: Router,
    private authService: AuthService) {
  }

  userCreed$ = createEffect(() =>
      this.actions$.pipe(
        ofType(LoginActions.userCread),
        mergeMap(action => {
          return this.authService.setUser(action.params).pipe(
            map(user => {
              console.log(user)
              if (user.length !== 0) {
                let userInfo: UserInteface
                user.map(user => {
                  userInfo = user
                  this.store.dispatch(login({user: userInfo}))
                })
                this.snackBar.openFromComponent(SnackbarComponent, {
                  data: {text: 'Welcome to Games Store', status: 'success'},
                  verticalPosition: 'top',
                  horizontalPosition: 'center',
                  duration: 3000
                })
                void this.router.navigateByUrl('/home')
              } else {
                this.snackBar.openFromComponent(SnackbarComponent, {
                  data: {text: 'Check Your Credentials', status: 'error'},
                  verticalPosition: "top",
                  horizontalPosition: "center",
                  duration: 3000
                })
              }
            })
          )
        })
      ),
    {dispatch: false}
  )

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
        }),
      ),
    {dispatch: false}
  );

  registration$ = createEffect(() =>
      this.actions$.pipe(
        ofType(LoginActions.register),
        mergeMap(action => {
          return this.authService.registerUser(action.user).pipe(
            map(user => {
              if (user) {
                this.authService.changeLoginStatus(true);
                this.snackBar.openFromComponent(SnackbarComponent, {
                  data: {text: 'Welcome to Games Store now you can see your profile', status: 'success'},
                  verticalPosition: 'top',
                  horizontalPosition: 'center',
                  duration: 3000
                })
                void this.router.navigateByUrl('/home')
              } else {
                this.snackBar.openFromComponent(SnackbarComponent, {
                  data: {text: 'Server not work', status: 'error'},
                  verticalPosition: "top",
                  horizontalPosition: "center"
                })
              }
            })
          )

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
  )
  addGames = createEffect(() =>
      this.actions$.pipe(
        ofType(LoginActions.addGame),
        tap(action => {
          const user = JSON.parse(localStorage.getItem("user") || "null")
          user.games.push(action.game)
          localStorage.setItem("user", JSON.stringify(user));
          this.authService.updateGames(user.games).pipe(
            map(game => {
              console.log(game)
            })
          )
        })
      )
    , {dispatch: false}
  )
  logout$ = createEffect(() =>
      this.actions$.pipe(
        ofType(LoginActions.logout),
        tap(() => {
          localStorage.removeItem("user");
          void this.router.navigateByUrl("")
        })
      ),
    {dispatch: false}
  );


}

