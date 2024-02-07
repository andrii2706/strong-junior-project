import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FireBaseUser,
  userCreeds,
  UserInteface,
} from '../interfaces/user.inteface';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, UserInfo } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { Firestore } from '@angular/fire/firestore';
import firebase from 'firebase/compat';
import User = firebase.User;

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
    private store: Store<AppState>,
    public afAuth: AngularFireAuth,
    private fireStore: Firestore
  ) {}

  userLoggingWithFireBase = new BehaviorSubject<FireBaseUser | null>(null);
  private userLoggingWithFireBase$: Observable<FireBaseUser | null> =
    this.userLoggingWithFireBase.asObservable();

  proceedUserLoggingWithFireBase(state: FireBaseUser | null) {
    console.log(state);
    this.userLoggingWithFireBase.next(state);
  }

  setLoginStatus(value: boolean) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', 'false');
  }

  changeLoginStatus(status: boolean, userInfo: UserInfo | null) {
    this.loggedInStatus = status;
    localStorage.setItem('loggedIn', `${this.loggedInStatus}`);
    localStorage.setItem('user', JSON.stringify({ ...userInfo, games: [] }));
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

  AuthLogin(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password).then(
      userInfo => {
        const userFromFireBase = userInfo.user;
        this.changeLoginStatus(true, userFromFireBase);
        this.store.dispatch({
          type: '[Login user with cread]',
          payload: { user: { ...userFromFireBase, games: [] } },
        });
      },
      err => {
        if (err) {
          console.error('Error');
        }
      }
    );
  }

  LoginWithGoogle() {
    return this.afAuth.signInWithPopup(new GoogleAuthProvider()).then(
      userInfo => {
        this.proceedUserLoggingWithFireBase(userInfo.user);
      },
      error => {
        if (error) {
          this.proceedUserLoggingWithFireBase(null);
        }
      }
    );
  }

  registerUserWithFireBase(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password).then(
      userInfo => {
        console.log(userInfo.user);
        this.proceedUserLoggingWithFireBase(userInfo.user);
      },
      error => {
        if (error) {
          this.proceedUserLoggingWithFireBase(null);
        }
      }
    );
  }

  getAllUsers() {}
}
