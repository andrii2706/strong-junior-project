import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './pages/home/home.component';
import {AppMaterialModule} from "./app-material/app-material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoginModule} from "./login/login.module";
import {HttpClientModule} from "@angular/common/http";
import { RegistrationComponent } from './registration/registration/registration.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {SharedModule} from "./shared/shared.module";
import * as fromState from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
    LoginModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    SharedModule,
    StoreModule.forFeature(fromState.stateFeatureKey, fromState.reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
