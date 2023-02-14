import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {UserInteface} from "../../../shared/interfaces/user.inteface";
import {AppState} from "../../../reducers";
import {takeUntil} from "rxjs";
import {ClearObservable} from "../../../shared/classes";
import {AuthService} from "../../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends ClearObservable implements OnInit {
  userInfo: UserInteface
  isLoading: boolean;

  constructor(private store: Store<AppState>, private authService: AuthService, private router: Router) {
    super()
  }

  ngOnInit() {
    this.store.pipe(takeUntil(this.destroy$)).subscribe(state => {
      this.userInfo = state.auth.user;
      this.isLoading = false;
    })
  }

  redirectToHome() {
    void this.router.navigateByUrl("home")

  }

  redirectToGames() {
    void this.router.navigateByUrl("games")
  }

  logOut() {
    this.authService.setLoginStatus(false);
    void this.router.navigateByUrl("")
  }
}
