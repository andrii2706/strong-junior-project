import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {AppMaterialModule} from "../../app-material/app-material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {LoginRoutingModule} from "./login-routing.module";



@NgModule({
    declarations: [
        LoginComponent,
    ],
  exports: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
