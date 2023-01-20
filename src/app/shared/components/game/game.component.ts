import {Component, Input} from '@angular/core';
import {Game} from "../../interfaces/games.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {addGame} from "../../../auth/login/login/login.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../../reducers";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  @Input()game : Game
  storedGames: any
  constructor(private router : Router, private activatedRoute: ActivatedRoute, private store: Store<AppState>) {
  }

  goToGameDetails() {
    if(this.router.url === '/home'){
     void this.router.navigate([`/games/${this.game.id}`], {relativeTo: this.activatedRoute})
    }else void this.router.navigate([this.game.id], {relativeTo: this.activatedRoute} )
  }

  buyAGame(){
    this.store.dispatch(addGame({ game :this.game}));
  }
}
