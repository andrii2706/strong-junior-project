import { Component, Inject } from '@angular/core';
import { ClearObservable } from '../../classes';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Game } from '../../interfaces/games.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../../reducers';
import { removeGame } from '../../../auth/login/login/login.actions';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
})
export class ConfirmationModalComponent extends ClearObservable {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Game,
    public store: Store<AppState>
  ) {
    super();
  }

  confirmDeleting() {
    this.store.dispatch(removeGame({ game: this.data }));
  }
}
