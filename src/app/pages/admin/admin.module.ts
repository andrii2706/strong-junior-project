import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AddNewGameComponent } from './containers/add-new-game/add-new-game.component';
import { AppMaterialModule } from '../../app-material/app-material.module';

@NgModule({
  declarations: [AdminComponent, AddNewGameComponent],
  imports: [CommonModule, AdminRoutingModule, AppMaterialModule],
})
export class AdminModule {}
