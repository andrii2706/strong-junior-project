import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {UserInteface} from "../interfaces/user.inteface";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:3000/users'

  private loggedInStatus = JSON.parse(sessionStorage.getItem('loggedIn') || ('false'));

  constructor(private httpClient: HttpClient) {
  }

  userService$ = new BehaviorSubject(this.UserStatus)

  setLoginStatus(value: boolean) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', 'false');
  }

  changeLoginStatus(status: boolean) {
    this.loggedInStatus = status;
    localStorage.setItem('loggedIn', `${this.loggedInStatus}`)
  }


  get LoginStatus() {
    return JSON.parse(localStorage.getItem('loggedIn') ||
      this.loggedInStatus.toString());
  }

  get UserStatus() {
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }

  setUser(userInfo: UserInteface): Observable<UserInteface[]> {
    this.changeLoginStatus(true);
    const params = (userCreds: UserInteface) => new HttpParams({
        fromObject: {
          email: userCreds.email,
          password: userCreds.password
        }
      }
    )
    return this.httpClient.get<UserInteface[]>(this.url, {
     params: params(userInfo),
   })
  }
}
