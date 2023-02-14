import {Component, DoCheck} from '@angular/core';
import {ClearObservable} from "../../classes";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent extends ClearObservable implements DoCheck {

  isOpen: boolean

  title: string = 'Strong Junior project';

  isLogin$: boolean;

  constructor(private authService: AuthService, private router: Router) {
    super();
  }

  ngDoCheck() {
    this.isLogin$ = this.authService.LoginStatus;
  }

  logOut() {
    this.isLogin$ = false;
    this.authService.setLoginStatus(false);
    void this.router.navigateByUrl("");
  }
}
