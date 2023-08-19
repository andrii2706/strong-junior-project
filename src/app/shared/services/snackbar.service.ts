import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  successSnackbar = new BehaviorSubject<boolean>(false);
  successSnackbar$ = this.successSnackbar.asObservable();
  errorSnackbar = new BehaviorSubject<boolean>(false);
  errorSnackbar$ = this.errorSnackbar.asObservable();

  constructor() {}

  success(status: boolean) {
    this.successSnackbar.next(status);
  }

  error(status: boolean) {
    this.errorSnackbar.next(status);
  }
}
