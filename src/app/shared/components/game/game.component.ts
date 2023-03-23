import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../../interfaces/games.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {addGame} from "../../../auth/login/login/login.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../../reducers";
import {AuthService} from "../../services/auth.service";
import {map, Observable} from "rxjs";
import {ClearObservable} from "../../classes";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackbarComponent} from "../snackbar/snackbar.component";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent extends ClearObservable implements OnInit {
  @Input() set gameInfo(_game: Game) {
    if (_game) {
      this.game = _game
    }
  }

  game: Game
  storedGames: Game[] = []
  showLabel: boolean;
  userStatus: boolean;
  buttonStatus$: Observable<boolean>;

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    public snackBar: MatSnackBar,
    public store: Store<AppState>) {
    super()
  }

  ngOnInit() {
    this.getUserStatus();
    this.store.subscribe(state => {
      const index = state.auth.user.games.findIndex(game => game.id === this.game.id)
      if (index !== -1) {
        this.showLabel = true
      }
    })
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
    this.store.pipe(map(state => state.auth.user.games.map(game => {
      if (game.isBought === true) {
        this.showLabel = true;
      }
    })));
    if (this.showLabel)
      this.snackBar.openFromComponent(SnackbarComponent, {
        duration: 900,
        data: {text: "The game has been added to your list", status: 'success'},
        verticalPosition: "bottom",
        horizontalPosition: 'center'
      })

  }

}
