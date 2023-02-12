import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {AppMaterialModule} from "../../app-material/app-material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {LoginRoutingModule} from "./login-routing.module";
import {
  ShowAndHidePasswordComponent
} from "../../shared/components/show-and-hide-password/show-and-hide-password.component";



@NgModule({
    declarations: [
      LoginComponent,
      ShowAndHidePasswordComponent,
    ],
  exports: [
    LoginComponent,
    ShowAndHidePasswordComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
