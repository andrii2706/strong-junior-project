import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AddNewGameComponent } from './containers/add-new-game/add-new-game.component';
import { AppMaterialModule } from '../../app-material/app-material.module';
import { UpdateGameComponent } from './containers/update-game/update-game.component';
import { UpdateUserComponent } from './containers/update-user/update-user.component';

@NgModule({
  declarations: [AdminComponent, AddNewGameComponent, UpdateGameComponent, UpdateUserComponent],
  imports: [CommonModule, AdminRoutingModule, AppMaterialModule],
})
export class AdminModule {}
