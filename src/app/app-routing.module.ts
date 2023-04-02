import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
    title: 'Home',
  },
  {
    path: 'games',
    loadChildren: () =>
      import('./pages/games/games.module').then((m) => m.GamesModule),
    title: 'Games',
    canActivate: [AuthGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./auth/login/login.module').then((m) => m.LoginModule),
    title: 'Login',
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfileModule),
    title: 'Profile',
    canActivate: [AuthGuard],
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./auth/registration/registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
    title: 'Registration',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
