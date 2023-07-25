import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AppMaterialModule } from './app-material/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './auth/login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from './shared/shared.module';
import { GamesModule } from './pages/games/games.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { authReducer } from './auth/login/login/reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './auth/login/login/user.effects';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import {
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { AngularFireModule } from '@angular/fire/compat';

const fireCreds = {
  projectId: 'games-app-angular',
  appId: '1:324958973014:web:d6905c6b1574f97ef2dff7',
  storageBucket: 'games-app-angular.appspot.com',
  apiKey: 'AIzaSyDpQYbI64HUqyezTJDOFbXL4DVIvOCWLq8',
  authDomain: 'games-app-angular.firebaseapp.com',
  messagingSenderId: '324958973014',
  measurementId: 'G-G1E45CSKN5',
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
    LoginModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    SharedModule,
    StoreModule.forFeature('auth', authReducer),
    GamesModule,
    NgxPaginationModule,
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([UserEffects]),
    AngularFireModule.initializeApp(fireCreds),
  ],
  providers: [ScreenTrackingService, UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
