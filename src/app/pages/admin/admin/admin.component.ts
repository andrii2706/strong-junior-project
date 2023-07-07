import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ClearObservable } from '../../../shared/classes';
import { title } from '../constants/admin.constants';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent extends ClearObservable {
  addNewGameForm: boolean;
  updateGameForm: boolean;
  updateUserInfo: boolean;

  adminTitle = title;

  constructor() {
    super();
  }

  removeDisable() {
    this.addNewGameForm = false;
    this.updateGameForm = false;
    this.updateUserInfo = false;
  }

  addGame() {
    this.addNewGameForm = !this.addNewGameForm;
    this.updateGameForm = false;
    this.updateUserInfo = false;
  }
  updateGame() {
    this.updateGameForm = !this.updateGameForm;
    this.addNewGameForm = false;
    this.updateUserInfo = false;
  }
  updateUser() {
    this.updateUserInfo = !this.updateUserInfo;
    this.updateGameForm = false;
    this.addNewGameForm = false;
  }
}
