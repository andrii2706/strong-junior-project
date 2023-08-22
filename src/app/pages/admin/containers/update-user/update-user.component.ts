import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ClearObservable } from '../../../../shared/classes';
import { UserInteface } from '../../../../shared/interfaces/user.inteface';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateUserComponent extends ClearObservable implements OnInit {
  updateUserForm: FormGroup;

  user: UserInteface | null;

  @Input() set userInfo(userInfo: UserInteface) {
    this.user = userInfo ? userInfo : null;
    if (!this.user) {
      alert('You Dont Have User');
    }
  }

  constructor() {
    super();
  }
  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.updateUserForm = new FormGroup({
      firstName: new FormControl(this.user?.firstName),
      lastName: new FormControl(this.user?.lastName),
      phoneNumber: new FormControl(this.user?.phoneNumber),
      email: new FormControl(this.user?.email),
      password: new FormControl(this.user?.password),
      avatar: new FormControl(this.user?.avatar),
      userRole: new FormControl(this.user?.userRole),
    });
  }

  saveUser() {
    console.log(this.updateUserForm.value);
  }
}
