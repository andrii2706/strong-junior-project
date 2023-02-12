import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {ClearObservable} from "../../classes";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent extends ClearObservable implements OnInit {

  isOpen: boolean

  title: string = 'Strong Junior project';

  isLogin$: boolean;

  constructor(private router: Router, private authService: AuthService) {
    super()
  }

  ngOnInit() {
    this.isLogin$ = this.authService.UserStatus;
  }


  logOut() {
    this.authService.setLoginStatus(false);
    void this.router.navigateByUrl("");
    this.isLogin$ = this.authService.UserStatus;
  }
}
