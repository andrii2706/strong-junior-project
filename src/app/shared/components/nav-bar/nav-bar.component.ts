import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent{

  public isOpen: boolean = false
  public title: string = 'Strong Junior project';
  userLoged: boolean = true;

  constructor(private router: Router) {
  }

  loginPage() {
   void this.router.navigateByUrl('/login')
  }
}
