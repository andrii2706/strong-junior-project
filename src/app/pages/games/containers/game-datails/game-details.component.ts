import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../../../shared/services/games.service';
import { take } from 'rxjs';
import { GameDetails } from '../../../../shared/interfaces/games.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../../../shared/components/snackbar/snackbar.component';

@Component({
  selector: 'app-game-datails',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})
export class GameDetailsComponent {
  isLoading = false;
  gameDetails: GameDetails;
  games: GameDetails[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private gamesService: GamesService,
    private snackbar: MatSnackBar
  ) {
    this.activatedRoute.params.pipe(take(1)).subscribe(
      ({ id }) => {
        this.gameDetailsById(id);
      },
      () => {
        this.isLoading = true;
        this.snackbar.openFromComponent(SnackbarComponent, {
          data: 'Server is out',
          verticalPosition: 'top',
          horizontalPosition: 'end',
        });
      }
    );
  }
  gameDetailsById(id: string) {
    this.gamesService
      .getGameById(id)
      .pipe(take(1))
      .subscribe((gameDetails) => {
        this.gameDetails = gameDetails;
      });
  }

  backButton() {
    history.back();
  }
}
