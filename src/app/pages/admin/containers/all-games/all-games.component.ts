import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ClearObservable } from '../../../../shared/classes';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllGamesComponent extends ClearObservable implements OnInit {
  updateGameForm: boolean;

  constructor() {
    super();
  }
  ngOnInit(): void {}

  updateGame() {
    this.updateGameForm = !this.updateGameForm;
  }
}
