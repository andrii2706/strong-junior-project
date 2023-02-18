import {Component, OnInit} from '@angular/core';
import {ClearObservable} from "./shared/classes";
import {Store} from "@ngrx/store";
import {AppState} from "./reducers";
import {login} from "./auth/login/login/login.actions";
import {UserInteface} from "./shared/interfaces/user.inteface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends ClearObservable implements OnInit {
  title = 'strong-junior-project';
  userProfile: UserInteface;

  constructor(public store: Store<AppState>) {
    super()
  }

  ngOnInit() {
    this.preventBrowserReload();
  }

  preventBrowserReload() {
    this.userProfile = JSON.parse(localStorage.getItem("user") || "null");
    if (this.userProfile)
      this.store.dispatch(login({user: this.userProfile}))
  }

  //  TODO add this script to angular.json
  //  // "allowedCommonJsDependencies": [
  // //              "rxjs-compat",
  // //              "moment"
  // //            ],
}

