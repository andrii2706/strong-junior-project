import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {ClearObservable} from "../../classes";
import {takeUntil} from "rxjs";

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
    if (this.isLogin$) {
      this.authService.userService$.pipe(takeUntil(this.destroy$)).subscribe(userStatus => {
        this.isLogin$ = userStatus;
      });
    } else {
      this.isLogin$ = true;
    }
  }


  logOut() {
    this.authService.setLoginStatus(false);
    void this.router.navigateByUrl("");
    this.isLogin$ = this.authService.LoginStatus;
  }
}
