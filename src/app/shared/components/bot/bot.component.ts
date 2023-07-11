import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ClearObservable } from '../../classes';
import { MatDialogRef } from '@angular/material/dialog';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BotComponent extends ClearObservable implements OnInit {
  botForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<BotComponent>) {
    super();
  }

  get conversationFormField(): AbstractControl<string> | null {
    return this.botForm.get('conversation');
  }

  ngOnInit() {
    this.buildConversationWithBot();
  }
  buildConversationWithBot() {
    this.botForm = new FormGroup({
      conversation: new FormControl(''),
    });
  }

  sendMessageToBot() {
    console.log(this.conversationFormField?.value);
    this.conversationFormField?.setValue('');
  }

  closeBot() {
    this.dialogRef.close();
  }
}
