import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../../interfaces/games.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {addGame} from "../../../auth/login/login/login.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../../reducers";
import {AuthService} from "../../services/auth.service";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game: Game

  @Input() set gameInfo(_game: Game) {
    if (_game) {
      this.game = _game
    }
  }

  storedGames: Game[] = []
  userStatus: boolean;
  buttonStatus$: Observable<boolean>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService, private store: Store<AppState>) {
  }

  ngOnInit() {
    this.getUserStatus();
  }

  getUserStatus() {
    this.userStatus = this.authService.LoginStatus;
  }

  goToGameDetails() {
    if (this.router.url === '/home') {
      void this.router.navigate([`/games/${this.game.id}`], {relativeTo: this.activatedRoute})
    } else void this.router.navigate([this.game.id], {relativeTo: this.activatedRoute})
  }

  buyAGame(game: Game) {
    const selectedGame = Object.assign({isBought: true}, game)
    this.store.dispatch(addGame({game: selectedGame}));
    this.buttonStatus$ = this.store.pipe(map(state => state.auth.user.games.some(game => game.isBought === true)));
  }

}
