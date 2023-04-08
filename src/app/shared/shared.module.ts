import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { RouterModule } from '@angular/router';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { GameComponent } from './components/game/game.component';
import { ClearObservable } from './classes';
import { GameWishlistComponent } from './components/game-wishlist/game-wishlist.component';
import { ReplaceNullPipe } from './pipes/replace-null.pipe';
import { ReplaceNullImgPipe } from './pipes/replace-null-img.pipe';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { ShowAndHidePasswordDirective } from './directive/show-and-hide-password.directive';

@NgModule({
  declarations: [
    GameComponent,
    NavBarComponent,
    SnackbarComponent,
    LoaderComponent,
    ClearObservable,
    GameWishlistComponent,
    ReplaceNullPipe,
    ReplaceNullImgPipe,
    ConfirmationModalComponent,
    ShowAndHidePasswordDirective,
  ],
  imports: [CommonModule, HttpClientModule, AppMaterialModule, RouterModule],
  exports: [
    NavBarComponent,
    LoaderComponent,
    GameComponent,
    GameWishlistComponent,
    ReplaceNullImgPipe,
    ShowAndHidePasswordDirective,
  ],
  providers: [],
})
export class SharedModule {}
