import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {UserInteface} from "../interfaces/user.inteface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 private url = 'http://localhost:3000/user'

  private loggedInStatus = JSON.parse(sessionStorage.getItem('loggedIn') || ('false'));

  constructor(private httpClient: HttpClient) { }

  setLoginStatus(value: boolean) {
    this.loggedInStatus = value;
    sessionStorage.setItem('loggedIn', 'false');
  }

  changeLoginStatus(status: boolean){
    this.loggedInStatus = status;
    sessionStorage.setItem('loggedIn', `${this.loggedInStatus}`)
  }

  get LoginStatus() {
    return JSON.parse(sessionStorage.getItem('loggedIn') ||
      this.loggedInStatus.toString());
  }

  setUser(userInfo: UserInteface): Observable<UserInteface[]>{
    this.changeLoginStatus(userInfo.isLogged)
    const params = (userCreds: UserInteface) => new HttpParams({
      fromObject: {
        email: userCreds.email,
        password:  userCreds.password
      }
    }
    )
    return this.httpClient.get<UserInteface[]>(this.url, {
     params: params(userInfo),
   })
  }
}
