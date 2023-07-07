import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ClearObservable } from '../../classes';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BotComponent extends ClearObservable {
  constructor(public dialogRef: MatDialogRef<BotComponent>) {
    super();
  }
}
