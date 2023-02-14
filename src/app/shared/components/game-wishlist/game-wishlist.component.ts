import {Component, Input} from '@angular/core';
import {ClearObservable} from "../../classes";
import {Game} from "../../interfaces/games.interface";

@Component({
  selector: 'app-game-wishlist',
  templateUrl: './game-wishlist.component.html',
  styleUrls: ['./game-wishlist.component.scss']
})
export class GameWishlistComponent extends ClearObservable {

  @Input() gameInfo: Game;

  constructor() {
    super();
  }

}
