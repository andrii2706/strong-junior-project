import { Component, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { ClearObservable } from '../../classes';

@Component({
  selector: 'app-show-and-hide-password',
  templateUrl: './show-and-hide-password.component.html',
  styleUrls: ['./show-and-hide-password.component.scss'],
})
export class ShowAndHidePasswordComponent extends ClearObservable {
  constructor() {
    super();
  }

  showPassword = false;
  @ViewChild(MatInput) input: MatInput;

  toggleShow() {
    this.showPassword = !this.showPassword;
    this.input.type = this.showPassword ? 'text' : 'password';
  }
}
