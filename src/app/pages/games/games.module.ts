import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import {GamesComponent} from "./games/games.component";
import {SharedModule} from "../../shared/shared.module";
import {NgxPaginationModule} from "ngx-pagination";
import {AppMaterialModule} from "../../app-material/app-material.module";
import { FilterComponent } from './containers/filter/filter.component';
import {ReactiveFormsModule} from "@angular/forms";
import { GameDetailsComponent } from './containers/game-datails/game-details.component';


@NgModule({
    declarations: [
        GamesComponent,
        FilterComponent,
        GameDetailsComponent
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
