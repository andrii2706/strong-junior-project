import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isLogin: boolean;

  constructor(
    private authService: AuthService,
    public router: Router,
    public snackbar: MatSnackBar
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.LoginStatus) {
      if (this.authService.userRole.userRole === 'admin') {
        void this.router.navigateByUrl('admin');
      } else {
        void state.url;
      }
      return true;
    } else {
      this.snackbar.openFromComponent(SnackbarComponent, {
        duration: 5000,
        data: { text: 'You are not login yet.', status: 'error' },
        verticalPosition: 'top',
        horizontalPosition: 'end',
      });
      void this.router.navigateByUrl('');
      return false;
    }
  }
}
