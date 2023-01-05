import {Component, Input} from '@angular/core';
import {Game} from "../../../../shared/interfaces/games.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  @Input()game : Game
  constructor(private router : Router, private activatedRoute: ActivatedRoute) {
  }

  goToGameDetails() {
    this.router.navigate([this.game.id], {relativeTo: this.activatedRoute} )
  }
}
