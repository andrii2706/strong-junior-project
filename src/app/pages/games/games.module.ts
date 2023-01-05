import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import {GamesComponent} from "./games/games.component";
import {SharedModule} from "../../shared/shared.module";
import { GameComponent } from './containers/game/game.component';
import {NgxPaginationModule} from "ngx-pagination";
import {AppMaterialModule} from "../../app-material/app-material.module";
import { FilterComponent } from './containers/filter/filter.component';
import {ReactiveFormsModule} from "@angular/forms";
import { GameDatailsComponent } from './containers/game-datails/game-datails.component';


@NgModule({
  declarations: [
    GamesComponent,
    GameComponent,
    FilterComponent,
    GameDatailsComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    SharedModule,
    NgxPaginationModule,
    AppMaterialModule,
    ReactiveFormsModule
  ]
})
export class GamesModule { }
