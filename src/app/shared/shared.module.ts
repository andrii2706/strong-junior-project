import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {AppMaterialModule} from "../app-material/app-material.module";
import {RouterModule} from "@angular/router";
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { LoaderComponent } from './components/loader/loader.component';
import {GameComponent} from "./components/game/game.component";



@NgModule({
  declarations: [
    GameComponent,
    NavBarComponent,
    SnackbarComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppMaterialModule,
    RouterModule,

  ],
  exports: [

    NavBarComponent,
    LoaderComponent,
    GameComponent
  ],
  providers: []
})
export class SharedModule { }
