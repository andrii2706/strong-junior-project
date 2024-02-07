import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoginActions } from './actions-types';
import { map, mergeMap, of, pipe, take, takeUntil, tap } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Game } from '../interfaces/games.interface';
import { GamesService } from '../services/games.service';
import { getUserInfo } from './selectors';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private snackBar: MatSnackBar,
    private router: Router,
    private authService: AuthService,
    private gamesService: GamesService
  ) {}

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.login),
        tap(action => {
          this.provideBrowserUpdate(action);
          void this.router.navigateByUrl('/home');
          this.store.select(getUserInfo).subscribe(userInfo => {
            localStorage.setItem('user', JSON.stringify(userInfo));
          });
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

          // this.gamesService.addUserGame(  , action.game.slug, action.game.name, action.game.isBought, action.game.name_original, action.game.description, action.game.released, action.game.background_image, action.game.tba, action.game.rating, action.game.rating_top, action.game.metacritic)
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
    localStorage.setItem('userRole', JSON.stringify(userInfo.userRole));
  }
}
