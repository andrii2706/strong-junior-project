import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ClearObservable } from 'src/app/shared/classes';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserInteface } from '../../../../shared/interfaces/user.inteface';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent extends ClearObservable {
  activeUserId: number | null = null;
  updateUserInfo: boolean = false;

  @Input() users: UserInteface[];

  constructor(private authService: AuthService) {
    super();
  }

  updateUser(userId: number) {
    if (this.activeUserId !== userId) {
      this.activeUserId = userId;
      this.updateUserInfo = true;
    } else {
      this.updateUserInfo = !this.updateUserInfo;
    }
  }
}
