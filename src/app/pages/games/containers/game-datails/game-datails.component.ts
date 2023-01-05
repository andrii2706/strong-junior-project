import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GamesService} from "../../../../shared/services/games.service";
import {take, takeUntil} from "rxjs";
import {GameDetails, GameTrailers, IAchivments, ScreenShots} from "../../../../shared/interfaces/games.interface";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackbarComponent} from "../../../../shared/components/snackbar/snackbar.component";

@Component({
  selector: 'app-game-datails',
  templateUrl: './game-datails.component.html',
  styleUrls: ['./game-datails.component.scss']
})
export class GameDatailsComponent implements OnInit{
    isLoading: boolean = false
  gameDetails: GameDetails;

  constructor( private activatedRoute: ActivatedRoute,
               private gamesService : GamesService,
               private snackbar: MatSnackBar
  ) {
    this.activatedRoute.params.pipe(take(1)).subscribe(({id}) => {
      this.gameDetailsById(id)
    }, () =>{
      this.isLoading = true ;
      this.snackbar.openFromComponent(SnackbarComponent, {
        data: 'Server is out',
        verticalPosition: "top",
        horizontalPosition: 'end'
      })
    })
  }
  ngOnInit() {
  }
  gameDetailsById(id: string){
    this.gamesService.getGameById(id).pipe(take(1)).subscribe(gameDetails => {
      this.gameDetails = gameDetails;
      console.log(gameDetails)
    })
  }
  backButton(){
    history.back()
  }
}
