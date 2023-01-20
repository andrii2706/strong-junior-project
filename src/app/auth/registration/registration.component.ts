import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
  registrationForm: FormGroup;
   constructor(private authService :AuthService, private snackBar :MatSnackBar) {
   }
   ngOnInit() {
     this.registrationForm = new FormGroup({
       firstName: new FormControl(''),
       lastName: new FormControl(''),
       password: new FormControl('', Validators.minLength(8)),
       email: new FormControl('',Validators.email),
       phoneNumber: new FormControl(''),
     })
   }

  submitForm() {
     const user = Object.assign( {games: [], isLogged: false} ,this.registrationForm.value)
    console.log(user);
  }
}
