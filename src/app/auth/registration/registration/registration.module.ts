import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from '../registration.component';
import { AppMaterialModule } from '../../../app-material/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from '../../login/login.module';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    RegistrationRoutingModule,
    ReactiveFormsModule,
    LoginModule,
  ],
})
export class RegistrationModule {}
