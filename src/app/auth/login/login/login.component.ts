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
    private snackBar: MatSnackBar,
    private router:Router,
    private store : Store<AppState>) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email] ),
      password: new FormControl('', [Validators.required, Validators.minLength(8)] ),
    })
  }
  errorSnackbar():void {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 1000,
      data: 'Check Your Credentials',
      horizontalPosition: "end",
      verticalPosition: "top"
    })
  }
  login(){
  const loginCredentials = Object.assign( {isLogged: true} , this.loginForm.value)
    this.authService.setUser(loginCredentials).pipe(take(1),
      tap(user => {
      if(user.length !== 0){
        const loginAction = login({user})
        this.store.dispatch(loginAction)
      }else {
        this.errorSnackbar()
      }
      }) ,take(1)).subscribe(noop,
      void this.router.navigateByUrl('/profile')
    )
  }

}
