import {Component, DoCheck} from '@angular/core';
import {ClearObservable} from "../../classes";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {logout} from "../../../auth/login/login/login.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../../reducers";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent extends ClearObservable implements DoCheck {

  isOpen: boolean

  title: string = 'Strong Junior project';

  isLogin$: boolean;

  constructor(private authService: AuthService, private router: Router, private store: Store<AppState>) {
    super();
  }

  ngDoCheck() {
    this.isLogin$ = this.authService.LoginStatus;
  }

  logOut() {
    this.isLogin$ = false;
    this.store.dispatch(logout({user: null}))
    this.authService.setLoginStatus(false);
    void this.router.navigateByUrl("");
  }
}
