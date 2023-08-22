import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { ClearObservable } from 'src/app/shared/classes';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent extends ClearObservable implements OnInit {
  updateUserInfo: boolean;

  constructor(private authService : AuthService){
    super();
  }

  ngOnInit(): void {
    this.authService.getAllUsers().pipe(takeUntil(this.destroy$)).subscribe(users => {
      console.log(users);
    });
  }

  updateUser() {
    this.updateUserInfo = !this.updateUserInfo;
  }

}
