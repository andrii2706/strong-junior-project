import {TestBed} from '@angular/core/testing';

import {AuthGuard} from './auth.guard';
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let routeMock: any = {snapshot: {}};
  let routeStateMock: any = {snapshot: {}, url: ''};
  let routerMock = {navigate: jasmine.createSpy('navigate')}
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
    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(true);
    spyOn(guard.router, 'navigateByUrl')
    guard.router.navigateByUrl('')
    expect(guard.router.navigateByUrl).toHaveBeenCalledWith('')
  })
});
