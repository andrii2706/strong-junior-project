import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {UserInteface} from "../../../shared/interfaces/user.inteface";
import {AppState} from "../../../reducers";
import {Observable, takeUntil} from "rxjs";
import {ClearObservable} from "../../../shared/classes";
import {AuthService} from "../../../shared/services/auth.service";
import {Router} from "@angular/router";
import {logout} from "../../../auth/login/login/login.actions";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends ClearObservable implements OnInit {
  userInfo: UserInteface
  isStorageEmpty$: Observable<boolean>;
  isLoading: boolean;

  constructor(public store: Store<AppState>, private authService: AuthService, public router: Router) {
    super();

  }

  ngOnInit() {
    this.store.pipe(takeUntil(this.destroy$)).subscribe(state => {
      this.userInfo = state.auth.user;
      this.isLoading = false;
    })
  }

  redirectToGames() {
    void this.router.navigateByUrl("games")
  }

  logOut() {
    this.authService.setLoginStatus(false);
    this.store.dispatch(logout({user: null}))
    void this.router.navigateByUrl("")
  }

}
