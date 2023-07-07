import { Component, DoCheck, OnInit } from '@angular/core';
import { ClearObservable } from '../../classes';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { logout } from '../../../auth/login/login/login.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../reducers';
import { UserInteface } from '../../interfaces/user.inteface';
import { MatDialog } from '@angular/material/dialog';
import { BotComponent } from '../bot/bot.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent
  extends ClearObservable
  implements DoCheck, OnInit
{
  isOpen: boolean;

  title = 'Strong Junior project';

  isLogin$: boolean;
  userAvatar: UserInteface | null;

  constructor(
    private authService: AuthService,
    public router: Router,
    public store: Store<AppState>,
    private matDialog: MatDialog
  ) {
    super();
  }

  ngDoCheck() {
    this.isLogin$ = this.authService.LoginStatus;
    this.userAvatar = JSON.parse(localStorage.getItem('user') || 'null');
  }
  ngOnInit() {
    this.userGames();
  }

  userGames() {}

  logOut() {
    this.isLogin$ = false;
    this.store.dispatch(logout({ user: null }));
    this.authService.setLoginStatus(false);
    void this.router.navigateByUrl('');
  }

  bot() {
    this.matDialog.open(BotComponent, {
      width: '250px',
    });
  }
}
