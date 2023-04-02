import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../shared/services/games.service';
import { Game } from '../../shared/interfaces/games.interface';
import * as moment from 'moment';
import { finalize, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../shared/components/snackbar/snackbar.component';
import { ClearObservable } from '../../shared/classes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends ClearObservable implements OnInit {
  games: Game[];
  page: number;
  total: number;
  dates = '';
  isLoading: boolean;

  constructor(
    private gamesService: GamesService,
    public router: Router,
    private snackBar: MatSnackBar
  ) {
    super();
  }

  ngOnInit(): void {
    this.getNewGames(1);
  }

  getNewGames(page: number) {
    this.isLoading = true;
    const firstYearDay = moment().startOf('year').format('YYYY-MM-DD');
    const lastYearDay = moment()
      .add(1, 'year')
      .endOf('year')
      .format('YYYY-MM-DD');
    this.dates = `${firstYearDay},${lastYearDay}`;
    this.gamesService
      .getLastReleasedGames(page, this.dates)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((games) => {
        this.total = games.count;
        this.games = games.results;
        this.isLoading = false;
      });
  }
  navigateTo(PageNumber: number) {
    this.page = PageNumber;
    this.getNewGames(PageNumber);
  }

  lastWeekGames() {
    this.isLoading = true;
    const firstDayOfWeek = moment().startOf('week').format('YYYY-MM-DD');
    const lastDayOfWeek = moment()
      .add(-7, 'week')
      .endOf('year')
      .format('YYYY-MM-DD');
    this.dates = `${lastDayOfWeek},${firstDayOfWeek}`;
    this.gamesService
      .getLastReleasedGames(1, this.dates)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((games) => {
        this.total = games.count;
        this.games = games.results;
        this.isLoading = false;
      });
  }

  lastGames() {
    this.isLoading = true;
    const firstYearDay = moment().startOf('year').format('YYYY-MM-DD');
    const lastYearDay = moment()
      .add(1, 'year')
      .endOf('year')
      .format('YYYY-MM-DD');
    this.dates = `${firstYearDay},${lastYearDay}`;
    this.gamesService
      .getLastReleasedGames(1, this.dates)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (games) => {
          this.total = games.count;
          this.games = games.results;
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
          this.snackBar.openFromComponent(SnackbarComponent, {
            data: error.messageerror,
            verticalPosition: 'top',
            horizontalPosition: 'end',
            duration: 3000,
          });
        }
      );
  }

  goToAllGames() {
    void this.router.navigateByUrl('/games');
  }
}
