import {Component} from '@angular/core';
import {ClearObservable} from "./shared/classes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends ClearObservable {
  title = 'strong-junior-project';

  constructor() {
    super()
  }
}

