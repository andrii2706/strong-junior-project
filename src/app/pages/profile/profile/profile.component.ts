import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserInteface } from '../../../shared/interfaces/user.inteface';
import { AppState } from '../../../reducers';
import { Observable, takeUntil } from 'rxjs';
import { ClearObservable } from '../../../shared/classes';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { logout } from '../../../shared/store/login.actions';
import { ConfirmationModalComponent } from '../../../shared/components/confirmation-modal/confirmation-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { getUserInfo } from '../../../shared/store/selectors';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent extends ClearObservable implements OnInit {
  userInfo: UserInteface;
  isStorageEmpty$: Observable<boolean>;
  isLoading: boolean;

  constructor(
    public store: Store<AppState>,
    private authService: AuthService,
    private dialog: MatDialog,
    public router: Router
  ) {
    super();
  }
  user$ = this.store.select(getUserInfo);

  ngOnInit() {
    this.user$.pipe(takeUntil(this.destroy$)).subscribe(state => {
      this.userInfo = state;
      this.isLoading = false;
    });
    if (this.userInfo?.avatar instanceof Blob) {
      const reader = new FileReader();
      reader.readAsDataURL(this.userInfo.avatar);
      reader.onload = (event: any) => {
        this.userInfo.avatar = event.target.result;
      };
    }
  }

  redirectToGames() {
    void this.router.navigateByUrl('games');
  }

  logOut() {
    this.authService.setLoginStatus(false);
    this.store.dispatch(logout({ user: null }));
    void this.router.navigateByUrl('');
  }

  deleteAllGames() {
    this.dialog.open(ConfirmationModalComponent, {
      width: '500px',
      data: { game: [], isDeletedAllGames: true },
    });
  }
}
