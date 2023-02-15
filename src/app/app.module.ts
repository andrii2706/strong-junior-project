import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import {AppMaterialModule} from "./app-material/app-material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoginModule} from "./auth/login/login.module";
import {HttpClientModule} from "@angular/common/http";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {SharedModule} from "./shared/shared.module";
import {GamesModule} from "./pages/games/games.module";
import {NgxPaginationModule} from "ngx-pagination";
import {authReducer} from "./auth/login/login/reducer";
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent,
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
    StoreModule.forFeature("auth", authReducer),
    GamesModule,
    NgxPaginationModule,
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
