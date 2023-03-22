import {Component,  OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../shared/services/auth.service";
import {noop, take, tap} from "rxjs";
import {UserInteface} from "../../../shared/interfaces/user.inteface";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackbarComponent} from "../../../shared/components/snackbar/snackbar.component";
import {Store} from "@ngrx/store";
import {AppState} from "../../../reducers";
import {login} from "./login.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   public loginForm!: FormGroup;
  public userInfo: UserInteface[] = []
  public user!: UserInteface
  constructor(
      private authService: AuthService,
      public snackBar: MatSnackBar,
      public router: Router,
      public store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email] ),
      password: new FormControl('', [Validators.required, Validators.minLength(8)] ),
    })
  }

  login(){
    this.store.dispatch(login({user: this.user}))
  }

}
