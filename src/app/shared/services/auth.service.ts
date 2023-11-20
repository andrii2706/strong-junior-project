import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { userCreeds, UserInteface } from '../interfaces/user.inteface';
import { BehaviorSubject, Observable } from 'rxjs';
import { Game } from '../interfaces/games.interface';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog } from '@angular/material/dialog';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { Router } from '@angular/router';
import { GoogleAuthProvider, OAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:3000/users';

  private loggedInStatus = JSON.parse(
    sessionStorage.getItem('loggedIn') || 'false'
  );

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    public afAuth: AngularFireAuth,
    public matDialog: MatDialog
  ) {}

  userLoggingWithFireBase$ = new BehaviorSubject(false);
  userLoggingWithFireBase = this.userLoggingWithFireBase$.asObservable();

  // proceedUserLoggingWithFireBase(state: boolean) {
  //   this.userLoggingWithFireBase.next(state);
  // }

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
  setUserRole(): void {
    localStorage.setItem('userRole', 'user');
  }

  UserStatus() {
    return JSON.parse(
      localStorage.getItem('loggedIn') || this.loggedInStatus.toString()
    );
  }
  AuthLogin(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password).then(
      userInfo => {
        void this.router.navigateByUrl('/home');
        this.changeLoginStatus(true);
        this.setUser({ email, password });
        this.setUserRole();
      },
      err => {
        if (err) {
          this.matDialog.open(SnackbarComponent, {
            width: '500px',
            data: {
              text: 'Problem with login',
              status: 'error',
            },
          });
        }
      }
    );
  }
  LoginWithGoogle() {
    return this.afAuth.signInWithPopup(new GoogleAuthProvider()).then(
      userInfo => {
        console.log(userInfo);
      },
      error => {
        console.log(error);
      }
    );
  }
  LoginWithAppleId() {
    return this.afAuth.signInWithPopup(new OAuthProvider('apple.com')).then(
      userInfo => {
        console.log(userInfo);
      },
      error => {
        console.log(error);
      }
    );
  }
  // LoginWithGameId() {
  //   return this.afAuth.signInWithPopup().then(
  //     userInfo => {
  //       console.log(userInfo);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }

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

  getAllUsers(): Observable<UserInteface[]> {
    return this.httpClient.get<UserInteface[]>(this.url);
  }

  updateGames(games: Game[]): Observable<UserInteface> {
    return this.httpClient.patch<UserInteface>(this.url, games);
  }

  registerUser(userInfo: userCreeds): Observable<UserInteface> {
    return this.httpClient.post<UserInteface>(this.url, userInfo);
  }
}
