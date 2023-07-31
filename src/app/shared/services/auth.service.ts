import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { userCreeds, UserInteface } from '../interfaces/user.inteface';
import { BehaviorSubject, Observable } from 'rxjs';
import { Game } from '../interfaces/games.interface';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:3000/users';

  private loggedInStatus = JSON.parse(
    sessionStorage.getItem('loggedIn') || 'false'
  );

  constructor(private httpClient: HttpClient, public afAuth: AngularFireAuth) {}

  AuthLogin(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password).then(
      userInfo => {
        console.log(userInfo);
        console.log('login works good');
      },
      err => {
        console.error(err);
      }
    );
  }

  userService$ = new BehaviorSubject(this.UserStatus);

  setLoginStatus(value: boolean) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', 'false');
  }

  changeLoginStatus(status: boolean) {
    this.loggedInStatus = status;
    localStorage.setItem('loggedIn', `${this.loggedInStatus}`);
  }

  get LoginStatus(): boolean {
    return JSON.parse(
      localStorage.getItem('loggedIn') || this.loggedInStatus.toString()
    );
  }
  get userRole(): UserInteface {
    return JSON.parse(
      localStorage.getItem('user') || this.loggedInStatus.toString()
    );
  }

  UserStatus() {
    return JSON.parse(
      localStorage.getItem('loggedIn') || this.loggedInStatus.toString()
    );
  }

  setUser(userInfo: userCreeds): Observable<UserInteface[]> {
    this.changeLoginStatus(true);
    const params = (userCreds: userCreeds) =>
      new HttpParams({
        fromObject: {
          email: userCreds.email,
          password: userCreds.password,
        },
      });
    return this.httpClient.get<UserInteface[]>(this.url, {
      params: params(userInfo),
    });
  }

  updateGames(games: Game[]): Observable<UserInteface> {
    return this.httpClient.patch<UserInteface>(this.url, games);
  }

  registerUser(userInfo: userCreeds): Observable<UserInteface> {
    return this.httpClient.post<UserInteface>(this.url, userInfo);
  }
}
