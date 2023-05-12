import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ClearObservable } from '../../../shared/classes';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent extends ClearObservable {
  addNewGameForm: boolean;
  updateGameForm: boolean;
  constructor() {
    super();
  }

  removeDisable() {
    this.addNewGameForm = false;
    this.updateGameForm = false;
  }

  addGame() {
    this.addNewGameForm = !this.addNewGameForm;
  }
  updateGame() {
    this.updateGameForm = !this.updateGameForm;
  }
}
