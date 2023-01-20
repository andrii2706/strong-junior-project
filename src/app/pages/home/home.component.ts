import {Component, OnDestroy, OnInit} from '@angular/core';
import {GamesService} from "../../shared/services/games.service";
import {Game} from "../../shared/interfaces/games.interface";
import * as moment from "moment";
import {Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackbarComponent} from "../../shared/components/snackbar/snackbar.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{
  destroy$ = new Subject();
  games: Game[];
  page: number;
  total: number;
  dates: string = '';
  isLoading: boolean;
  constructor(private gamesService: GamesService, private router: Router, private snackBar : MatSnackBar) {
  }
  ngOnInit():void {
    this.getNewGames(1)
  }

  getNewGames(page: number){
    const firstYearDay =  moment().startOf('year').format('YYYY-MM-DD');
    const lastYearDay = moment().add(1, 'year').endOf('year').format('YYYY-MM-DD');
    this.dates = `${firstYearDay},${lastYearDay}`;
    this.gamesService.getLastReleasedGames(page, this.dates).pipe(takeUntil(this.destroy$)).subscribe(games => {
      this.total = games.count;
      this.games = games.results;
    })
  }
  navigateTo(PageNumber: number) {
    this.page = PageNumber;
    this.getNewGames(PageNumber)
  }

  lastWeekGames(){
    const firstDayOfWeek =  moment().startOf('week').format('YYYY-MM-DD');
    const lastDayOfWeek = moment().add(-7, 'week').endOf('year').format('YYYY-MM-DD');
    this.dates = `${lastDayOfWeek},${firstDayOfWeek}`
    this.gamesService.getLastReleasedGames(1, this.dates).pipe(takeUntil(this.destroy$)).subscribe(games => {
      this.total = games.count;
      this.games = games.results;
    })
  }

  lastGames(){
    const firstYearDay =  moment().startOf('year').format('YYYY-MM-DD');
    const lastYearDay = moment().add(1, 'year').endOf('year').format('YYYY-MM-DD');
    this.dates = `${firstYearDay},${lastYearDay}`;
    this.gamesService.getLastReleasedGames(1, this.dates).pipe(takeUntil(this.destroy$)).subscribe(games => {
      this.total = games.count;
      this.games = games.results;
    }, error => this.snackBar.openFromComponent(SnackbarComponent, {
      data: error.messageerror,
      verticalPosition: "top",
      horizontalPosition: "end",
      duration: 3000
    }))
  }

  goToAllGames(){
   void this.router.navigateByUrl('/games');
  }

  ngOnDestroy() {
    this.destroy$.complete();
  }
}
