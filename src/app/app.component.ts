import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "./reducers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'strong-junior-project';

  constructor() {

  }
ngOnInit(){

}
}

