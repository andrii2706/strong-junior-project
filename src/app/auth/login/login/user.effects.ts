import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoginActions } from './actions-types';
import { map, mergeMap, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../reducers';
import { SnackbarComponent } from '../../../shared/components/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { login } from './login.actions';
import { UserInteface } from '../../../shared/interfaces/user.inteface';
import { Game } from '../../../shared/interfaces/games.interface';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private snackBar: MatSnackBar,
    private router: Router,
    private authService: AuthService
  ) {}

  userCreed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.userCread),
        mergeMap(action => {
          return this.authService.setUser(action.params).pipe(
            map(user => {
              if (user.length !== 0) {
                user.map(user => {
                  this.store.dispatch(login({ user }));
                });
                this.showSnackbar({
                  text: 'Welcome to Games Store',
                  status: 'success',
                });
                void this.router.navigateByUrl('/home');
              } else {
                this.showSnackbar({
                  text: 'Check Your Credentials',
                  status: 'error',
                });
              }
            })
          );
          this.provideBrowserUpdate(action);
        })
      ),
    { dispatch: false }
  );

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.login),
        tap(action => {
          this.provideBrowserUpdate(action);
        })
      ),
    { dispatch: false }
  );

  registration$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.register),
        mergeMap(action => {
          return this.authService.registerUser(action.user).pipe(
            map(user => {
              if (user) {
                this.authService.changeLoginStatus(true);
                this.snackBar.openFromComponent(SnackbarComponent, {
                  data: {
                    text: 'Welcome to Games Store now you can see your profile',
                    status: 'success',
                  },
                  verticalPosition: 'top',
                  horizontalPosition: 'center',
                  duration: 3000,
                });
                void this.router.navigateByUrl('/home');
              } else {
                this.showSnackbar({ text: 'Server not work', status: 'error' });
              }
            })
          );
        })
      ),
    { dispatch: false }
  );
  addGames = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.addGame),
        tap(action => {
          const user = JSON.parse(localStorage.getItem('user') || 'null');
          user.games.push(action.game);
          localStorage.setItem('user', JSON.stringify(user));
          this.authService.updateGames(user.games).pipe(
            map(game => {
              game;
            })
          );
        })
      ),
    { dispatch: false }
  );
  removeGame$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.removeGame),
        tap(action => {
          const user = JSON.parse(localStorage.getItem('user') || 'null');
          const objWithIdIndex = user.games.findIndex((game: Game) => game.id);
          user.games.splice(objWithIdIndex, 1);
          this.showSnackbar({ text: 'Game Deleted', status: 'success' });
          localStorage.setItem('user', JSON.stringify(user));
        })
      ),
    { dispatch: false }
  );
  deleteAllGames$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.removeAllGames),
        tap(action => {
          const user = JSON.parse(localStorage.getItem('user') || 'null');
          user.games = [];
          localStorage.setItem('user', JSON.stringify(user));
          this.showSnackbar({ text: 'Games Deleted', status: 'success' });
        })
      ),
    {
      dispatch: false,
    }
  );
  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.logout),
        tap(() => {
          localStorage.removeItem('user');
          void this.router.navigateByUrl('');
        })
      ),
    { dispatch: false }
  );

  showSnackbar(shackBarData: { text: string; status: string }) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: shackBarData,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      duration: 3000,
    });
  }
  provideBrowserUpdate(actionUserInfo: any) {
    const userInfo = {
      firstName: actionUserInfo.user.firstName,
      lastName: actionUserInfo.user.lastName,
      email: actionUserInfo.user.email,
      phoneNumber: actionUserInfo.user.phoneNumber,
      avatar: actionUserInfo.user.avatar,
      games: actionUserInfo.user.games,
      userRole: actionUserInfo.user.userRole,
    };
    localStorage.setItem('user', JSON.stringify(userInfo));
  }
}
