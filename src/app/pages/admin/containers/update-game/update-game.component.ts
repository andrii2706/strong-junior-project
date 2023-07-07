import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ClearObservable } from '../../../../shared/classes';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styleUrls: ['./update-game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateGameComponent extends ClearObservable implements OnInit {
  updateGameForm: FormGroup;
  constructor() {
    super();
  }
  ngOnInit() {
    console.log('Hello you update game');
  }

  buildFormUpdateFormGame() {
    this.updateGameForm = new FormGroup({});
  }
}
