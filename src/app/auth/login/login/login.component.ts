import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInteface } from '../../../shared/interfaces/user.inteface';
import { Store } from '@ngrx/store';
import { AppState } from '../../../reducers';
import { userCread } from '../../../shared/store/login.actions';
import { AuthService } from '../../../shared/services/auth.service';
import { SnackbarComponent } from '../../../shared/components/snackbar/snackbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public userInfo: UserInteface[] = [];
  public user!: UserInteface;
  showPassword: boolean;
  constructor(
    public store: Store<AppState>,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  showHidePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    this.store.dispatch(userCread({ params: this.loginForm.value }));
  }

  private initLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
  testFireBase() {
    this.authService.AuthLogin(
      this.loginForm.value.email,
      this.loginForm.value.password
    );
    // this.matDialog.open(SnackbarComponent, {
    //   width: '500px',
    //   data: {
    //     text: 'Welcome to Game store',
    //     status: 'success',
    //   },
    // });
  }
  loginWithAppleId() {
    this.authService.LoginWithAppleId();
  }
  loginWithGoogle() {
    this.authService.LoginWithGoogle();
  }
}
