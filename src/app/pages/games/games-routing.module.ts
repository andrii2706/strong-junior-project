import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GamesComponent} from "./games/games.component";
import {GameDetailsComponent} from "./containers/game-datails/game-details.component";

const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
  },
  {
    path: ':id',
    component:  GameDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
