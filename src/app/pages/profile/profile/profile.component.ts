import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {UserInteface} from "../../../shared/interfaces/user.inteface";
import {AppState} from "../../../reducers";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  userInfo: UserInteface
  constructor(private  store: Store<AppState>) {
    this.store.subscribe(state => {
      this.userInfo = state.auth.user;
    })
  }

  ngOnInit()
{
}
}
