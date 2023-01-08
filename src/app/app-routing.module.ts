import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./shared/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    title: 'Home'
  },
  {
    path:'games',
    loadChildren: () => import('./pages/games/games.module').then(m => m.GamesModule),
    title: 'Games'
  },
  {
    path:'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path:'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
    title: 'Profile',
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
