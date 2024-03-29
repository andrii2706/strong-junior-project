import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { register } from '../../shared/store/login.actions';
import { SnackbarComponent } from '../../shared/components/snackbar/snackbar.component';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  registerFormFireBase: FormGroup;
  registerWithFireBase: boolean;
  showPassword: boolean;
  userAvatar: any;
  showAvatar = false;
  registerWithCustomBackend: boolean;

  constructor(
    public store: Store<AppState>,
    public snackBar: MatSnackBar,
    private authService: AuthService,
    public router: Router
  ) {}

  ngOnInit() {
    this.registrationFormBuild();
    this.registerFormFireBaseBuild();
  }
  showHidePassword() {
    this.showPassword = !this.showPassword;
  }

  private registrationFormBuild() {
    this.registrationForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      password: new FormControl('', Validators.minLength(8)),
      email: new FormControl('', Validators.email),
      phoneNumber: new FormControl(''),
    });
  }

  private registerFormFireBaseBuild() {
    this.registerFormFireBase = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  registerUser() {
    if (
      this.registrationForm.value.firstName !== '' &&
      this.registrationForm.value.lastName !== '' &&
      this.registrationForm.value.password !== '' &&
      this.registrationForm.value.email !== '' &&
      this.registrationForm.value.phoneNumber !== ''
    ) {
      const user = Object.assign(
        { games: [], isLogged: false, avatar: this.userAvatar },
        this.registrationForm.value
      );
      this.store.dispatch(register({ user }));
    } else {
      this.snackBar.openFromComponent(SnackbarComponent, {
        duration: 3000,
        data: { text: 'Fill your form please', status: 'error' },
      });
    }
  }
  registerUserWithFireBase() {
    this.authService.registerUserWithFireBase(
      this.registerFormFireBase.value.email,
      this.registerFormFireBase.value.password
    );
  }

  getFile(event: any) {
    this.userAvatar = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event: any) => {
      this.userAvatar = event.target.result;
    };
    this.showAvatar = !this.showAvatar;
  }
  registerWithFireBaseForm() {
    this.registerWithFireBase = !this.registerWithFireBase;
    this.registerWithCustomBackend = false;
  }
  registerWithOutBackend() {
    this.registerWithCustomBackend = !this.registerWithCustomBackend;
    this.registerWithFireBase = false;
  }
}
