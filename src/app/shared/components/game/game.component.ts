import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../../interfaces/games.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {addGame} from "../../../auth/login/login/login.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../../reducers";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() game: Game
  storedGames: Game[] = []
  userStatus: boolean;
  disabled: boolean;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService, private store: Store<AppState>) {
  }

  ngOnInit() {
    this.getUserStatus();
  }

  getUserStatus() {
    this.userStatus = this.authService.LoginStatus
  }

  goToGameDetails() {
    if (this.router.url === '/home') {
      void this.router.navigate([`/games/${this.game.id}`], {relativeTo: this.activatedRoute})
    } else void this.router.navigate([this.game.id], {relativeTo: this.activatedRoute})
  }

  buyAGame(game: Game) {
    this.store.dispatch(addGame({game: game}));
  }

//Нехай смакує Emily
//   Emily(замовлення){
//     const нове_замовлення = замовлення;
//     if(нове_замовлення  === замовлення.впроцесі){
//       return Нехай смакує Emily
//     }else {
//       return Замов ще
//     }
//   }
}
