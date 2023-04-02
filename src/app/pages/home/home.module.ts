import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { GamesModule } from '../games/games.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppMaterialModule } from '../../app-material/app-material.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppMaterialModule,
    SharedModule,
    NgxPaginationModule,
  ],
})
export class HomeModule {}
