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
  const loginCredentials = Object.assign( {isLogged: true} , this.loginForm.value)
    this.authService.setUser(loginCredentials).pipe(take(1),
      tap(user => {
      if(user.length !== 0){
        user.map(user  => this.user = user)
        const loginAction = login({user: this.user})
        this.store.dispatch(loginAction)
        this.snackBar.openFromComponent(SnackbarComponent, {
          data: {text: 'Welcome to Games Store', status: 'success'},
          verticalPosition: 'top',
          horizontalPosition: 'center',
          duration: 3000
        })
      }else {
        this.snackBar.openFromComponent(SnackbarComponent, {
          data: {text: 'Check Your Credentials', status: 'error'},
          verticalPosition: "top",
          horizontalPosition: "center",
          duration: 3000
        })
      }
      }) ,take(1)).subscribe(noop,
      void this.router.navigateByUrl('/home')
    )
  }

}
