import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {AppMaterialModule} from "../app-material/app-material.module";
import {RouterModule} from "@angular/router";
import {SnackbarComponent} from './components/snackbar/snackbar.component';
import {LoaderComponent} from './components/loader/loader.component';
import {GameComponent} from "./components/game/game.component";
import {ClearObservable} from './classes';
import {GameWishlistComponent} from './components/game-wishlist/game-wishlist.component';
import {ReplaceNullPipe} from './pipes/replace-null.pipe';
import {ReplaceNullImgPipe} from './pipes/replace-null-img.pipe';


@NgModule({
  declarations: [
    GameComponent,
    NavBarComponent,
    SnackbarComponent,
    LoaderComponent,
    ClearObservable,
    GameWishlistComponent,
    ReplaceNullPipe,
    ReplaceNullImgPipe
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
    GameComponent,
    GameWishlistComponent,
    ReplaceNullImgPipe
  ],
  providers: []
})
export class SharedModule { }
