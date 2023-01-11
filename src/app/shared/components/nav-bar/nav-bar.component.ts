import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{

  public isOpen: boolean = false
  public title: string = 'Strong Junior project';
   isLogin: boolean;

  constructor(private router: Router, private authService: AuthService) {
  }
  ngOnInit() {
  }

  loginPage() {
   void this.router.navigateByUrl('/login')
  }
}
