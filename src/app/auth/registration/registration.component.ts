import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "../../reducers";
import {register} from "../login/login/login.actions";
import {SnackbarComponent} from "../../shared/components/snackbar/snackbar.component";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  customAvatar = false

  constructor(
    public store: Store<AppState>,
    public snackBar: MatSnackBar,
    public router: Router) {
  }

  ngOnInit() {
    this.registrationFormBuild();
  }

  changeDefaultAvatar() {
    this.customAvatar = !this.customAvatar
  }

  private registrationFormBuild() {
    this.registrationForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      avatar: new FormControl({value: '', disabled: this.customAvatar}),
      password: new FormControl('', Validators.minLength(8)),
      email: new FormControl('', Validators.email),
      phoneNumber: new FormControl(''),
    })
  }

  registerUser() {
    if (this.registrationForm.value.firstName !== '' &&
      this.registrationForm.value.lastName !== '' &&
      this.registrationForm.value.password !== '' &&
      this.registrationForm.value.email !== '' &&
      this.registrationForm.value.phoneNumber !== ''
    ) {
      const user = Object.assign({games: [], isLogged: false}, this.registrationForm.value)
      this.store.dispatch(register({user}));
    } else {
      this.snackBar.openFromComponent(SnackbarComponent, {
        duration: 3000,
        data: {text: 'Fill your form please', status: 'error'}
      })
    }
  }

}
