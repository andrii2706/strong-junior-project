import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GamesComponent} from "./games/games.component";
import {GameDatailsComponent} from "./containers/game-datails/game-datails.component";

const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
  },
  {
    path: ':id',
    component:  GameDatailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
