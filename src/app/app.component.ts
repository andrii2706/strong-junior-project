import { Component, HostListener, OnInit } from '@angular/core';
import { ClearObservable } from './shared/classes';
import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import { login } from './shared/store/login.actions';
import { UserInteface } from './shared/interfaces/user.inteface';
import firebase from 'firebase/compat';
import User = firebase.User;
import { getUserCreeds, getUserInfo } from './shared/store/selectors';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends ClearObservable implements OnInit {
  title = 'strong-junior-project';
  userProfile: User | null;
  userInfoFromStore = this.store.select(getUserInfo);

  constructor(public store: Store<AppState>, private authService: AuthService) {
    super();
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event: any) {
    event.preventDefault();
    localStorage.setItem('close tab', 'Your data will be lost!');
    localStorage.clear();
    return false;
  }
  ngOnInit() {
    this.preventBrowserReload();
  }

  preventBrowserReload() {
    this.store.select(getUserCreeds).subscribe(userCreed => {
      if (userCreed) {
        this.authService.AuthLogin(userCreed.email, userCreed.password);
      }
    });
  }
}
