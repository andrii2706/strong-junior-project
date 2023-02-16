import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {noop, take, tap} from "rxjs";
import {SnackbarComponent} from "../../shared/components/snackbar/snackbar.component";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "../../reducers";
import {register} from "../login/login/login.actions";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  customAvatar = false

  constructor(
    private authService: AuthService,
    private store: Store<AppState>,
    private snackBar: MatSnackBar,
    private router: Router) {
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

  submitForm() {
    const user = Object.assign({games: [], isLogged: false}, this.registrationForm.value)
    this.authService.registerUser(user).pipe(take(1),
      tap(user => {
          if (user) {
            this.store.dispatch(register({user}));
            this.authService.changeLoginStatus(true);
            this.snackBar.openFromComponent(SnackbarComponent, {
              data: {text: 'Welcome to Games Store now you can see your profile', status: 'success'},
              verticalPosition: 'top',
              horizontalPosition: 'center',
              duration: 3000
            })
          } else {
            this.snackBar.openFromComponent(SnackbarComponent, {
              data: {text: 'Server not work', status: 'error'},
              verticalPosition: "top",
              horizontalPosition: "center"
            })
          }
        }
      )).subscribe(() => noop,
      void this.router.navigateByUrl("home")
    )
  }

}
