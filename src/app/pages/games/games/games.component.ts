import {Component, OnDestroy, OnInit} from '@angular/core';
import {GamesService} from "../../../shared/services/games.service";
import {Developer, FilterParams, Genre} from "../../../shared/interfaces/filter.interface";
import {Game} from "../../../shared/interfaces/games.interface";
import {Subject, takeUntil, tap} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../../reducers";
import {gamesActions} from "./games.actions";
import {SnackbarComponent} from "../../../shared/components/snackbar/snackbar.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit, OnDestroy{
  destroy$ = new Subject();
  page: number;
  totalGames: number;
  showFormStatus: boolean;
  public games: Game[];
  public genres: Genre[];
  public developers: Developer[]
  public filter: FilterParams;

  constructor(private gamesService: GamesService, private store: Store<AppState>, private snackbar: MatSnackBar) {
  }
  ngOnInit():void {

    this.allGames(1)
  }

  allGames(page: number){
    this.gamesService.getAllGames(page)
      .pipe(tap( games => {
        this.store.dispatch(gamesActions({games: games.results }))
        this.totalGames = games.count;
        this.games = games.results
      }), takeUntil(this.destroy$)).subscribe(
      ()=>{},error => this.snackbar.openFromComponent(SnackbarComponent, {
        duration: 4000,
        data: 'Server Error',
        verticalPosition:"top",
        horizontalPosition: 'end'
      })
    );
  }
  getFilterQuery(e:FilterParams) {
    const filterParametrs: FilterParams = e
    if(e.genres === null || e.search === null || e.developers === null){
      this.allGames(1)
    }else {
      this.gamesService.filterGames(1, filterParametrs).pipe(takeUntil(this.destroy$)).subscribe(
        games => {
          this.games = games.results
        }
      )
    }
  }

  navigateTo(PageNumber: number){
    this.page = PageNumber;
    this.allGames(PageNumber)

  }

  showForm(){
    this.showFormStatus = !this.showFormStatus;
  }

  ngOnDestroy(){
    this.destroy$.complete();
  }
}
