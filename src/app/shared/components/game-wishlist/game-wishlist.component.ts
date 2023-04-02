import { Component, Input } from '@angular/core';
import { ClearObservable } from '../../classes';
import { Game } from '../../interfaces/games.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-game-wishlist',
  templateUrl: './game-wishlist.component.html',
  styleUrls: ['./game-wishlist.component.scss'],
})
export class GameWishlistComponent extends ClearObservable {
  @Input() gameInfo: Game;

  constructor(
    public router: Router,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute
  ) {
    super();
  }

  goToGame(gameId: number) {
    void this.router.navigate([`/games/${gameId}`], {
      relativeTo: this.activatedRoute,
    });
  }

  removeGames(game: Game) {
    this.dialog.open(ConfirmationModalComponent, {
      width: '500px',
      data: game,
    });
  }
}
