import { Component, Inject } from '@angular/core';
import { ClearObservable } from '../../classes';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Game } from '../../interfaces/games.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../../reducers';
import {
  removeAllGames,
  removeGame,
} from '../../../auth/login/login/login.actions';

interface DeleteDialog {
  game: Game;
  isDeletedAllGames: boolean;
}

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
})
export class ConfirmationModalComponent extends ClearObservable {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteDialog,
    public store: Store<AppState>
  ) {
    super();
  }

  confirmDeleting() {
    this.store.dispatch(removeGame({ game: this.data.game }));
  }
  deleteAllGames() {
    this.store.dispatch(removeAllGames({ games: [] }));
  }
}
