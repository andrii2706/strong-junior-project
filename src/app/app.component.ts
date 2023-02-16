import {Component, OnInit} from '@angular/core';
import {ClearObservable} from "./shared/classes";
import {Store} from "@ngrx/store";
import {AppState} from "./reducers";
import {addGame, login} from "./auth/login/login/login.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends ClearObservable implements OnInit {
  title = 'strong-junior-project';

  constructor(private store: Store<AppState>) {
    super()
  }

  ngOnInit() {
    const userProfile = localStorage.getItem("user");
    if (userProfile) {
      this.store.dispatch(login({user: JSON.parse(userProfile)}))
    }
  }
}

