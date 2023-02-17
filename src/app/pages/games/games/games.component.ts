import {Component, OnInit} from '@angular/core';
import {GamesService} from "../../../shared/services/games.service";
import {Developer, FilterParams, Genre} from "../../../shared/interfaces/filter.interface";
import {Game} from "../../../shared/interfaces/games.interface";
import {finalize, takeUntil} from "rxjs";
import {SnackbarComponent} from "../../../shared/components/snackbar/snackbar.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ClearObservable} from "../../../shared/classes";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent extends ClearObservable implements OnInit {
  page: number;
  totalGames: number;
  showFormStatus: boolean;
  filterParams: FilterParams
  public games: Game[];
  public genres: Genre[];
  public developers: Developer[]
  public filter: FilterParams;
  isLoading: boolean;

  constructor(private gamesService: GamesService, private snackbar: MatSnackBar) {
    super()
  }

  ngOnInit(): void {
    this.allGames(1)
  }

  allGames(page: number) {
    this.isLoading = true;
    this.gamesService.getAllGames(page)
      .pipe(takeUntil(this.destroy$), finalize(() => this.isLoading = false)).subscribe(
      (games) => {
        this.totalGames = games.count;
        this.games = games.results
        this.isLoading = false
      }, error => {
        this.isLoading = false
        this.snackbar.openFromComponent(SnackbarComponent, {
          duration: 4000,
          data: {text: error.messageerror, status: 'error'},
          verticalPosition: "top",
          horizontalPosition: 'end'
        })
      }
    );
  }
  getFilterQuery(e:FilterParams) {
    this.filterParams = e
    if(this.filterParams.search === '' &&
      this.filterParams.genres === '' &&
      this.filterParams.platforms === '' &&
      this.filterParams.developers === '' &&
      this.filterParams.ordering === '' &&
      this.filterParams.dates === '' &&
      this.filterParams.metacritic === ''
    ){
     return this.allGames(1);
    } else{
      return this.filteredGames(1, this.filterParams);
    }
  }
  filteredGames(page:number, filter: FilterParams) {
    this.isLoading = true;
    this.gamesService.filterGames(page, filter).pipe(takeUntil(this.destroy$), finalize(() => {
      this.isLoading = false;
    })).subscribe(
      games => {
        this.totalGames = games.count
        this.games = games.results
        this.isLoading = false;
      }
    )
  }
  navigateTo(PageNumber: number){
    this.page = PageNumber;
    if(this.filterParams){
      this.filteredGames(PageNumber, this.filterParams)
    }else{
      this.allGames(PageNumber)
    }
  }

  showForm(){
    this.showFormStatus = !this.showFormStatus;
  }

}
