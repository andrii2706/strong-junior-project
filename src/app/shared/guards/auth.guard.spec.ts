import {TestBed} from '@angular/core/testing';

import {AuthGuard} from './auth.guard';
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {SnackbarComponent} from "../components/snackbar/snackbar.component";

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let routeMock: any = {snapshot: {}};
  let routeStateMock: any = {snapshot: {}, url: ''};
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([]), MatSnackBarModule, NoopAnimationsModule],
      schemas: [NO_ERRORS_SCHEMA]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it("should make audit", () => {
    spyOn(guard.snackbar, "openFromComponent")
    spyOn(guard.router, 'navigateByUrl')
    guard.snackbar.openFromComponent(SnackbarComponent, {
      duration: 5000,
      data: {text: 'You are not login yet.', status: 'error'},
      verticalPosition: 'top',
      horizontalPosition: "end"
    })
    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(false);
    expect(guard.router.navigateByUrl).toHaveBeenCalledWith('')
    expect(guard.snackbar.openFromComponent).toHaveBeenCalledWith(SnackbarComponent, {
      duration: 5000,
      data: {text: 'You are not login yet.', status: 'error'},
      verticalPosition: 'top',
      horizontalPosition: "end"
    });
  });
});
