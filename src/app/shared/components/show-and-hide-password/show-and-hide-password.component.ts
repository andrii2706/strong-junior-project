import {Component, ContentChild} from '@angular/core';
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-show-and-hide-password',
  templateUrl: './show-and-hide-password.component.html',
  styleUrls: ['./show-and-hide-password.component.scss']
})
export class ShowAndHidePasswordComponent {
  constructor() {
  }
  showPassword = false;
  @ContentChild(MatInput) input: MatInput;
  toggleShow() {
    this.showPassword = !this.showPassword;
    this.input.type = this.showPassword ? 'text' : 'password';
  }
}
