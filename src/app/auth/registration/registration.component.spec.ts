import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RegistrationComponent} from './registration.component';
import {HttpClientModule} from "@angular/common/http";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {AuthService} from "../../shared/services/auth.service";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {Game} from "../../shared/interfaces/games.interface";
import {GameForMock} from "../../../assets/mocks/test-mocks/game";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RouterTestingModule} from "@angular/router/testing";
import {HomeComponent} from "../../pages/home/home.component";
import {of} from "rxjs";
import {SnackbarComponent} from "../../shared/components/snackbar/snackbar.component";
import {login} from "../login/login/login.actions";
import {loginUser, userMockData} from "../../../assets/mocks/test-mocks/user";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let service: AuthService;
  let initialState = GameForMock;
  const user = loginUser;
  const dispatchUser = userMockData

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationComponent, SnackbarComponent],
      providers: [provideMockStore({initialState})],
      imports: [HttpClientModule, MatSnackBarModule, NoopAnimationsModule,
        RouterTestingModule.withRoutes([{path: 'home', component: HomeComponent}])],
      teardown: {destroyAfterEach: false},
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    service = TestBed.inject(AuthService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should changeDefaultAvatar", () => {
    component.changeDefaultAvatar()
    component.customAvatar = true;
    expect(component.customAvatar).toBe(true);
  });
  it("should register user ", () => {
    spyOn(service, "setUser").and.returnValue(of(user));
    spyOn(component.store, "dispatch").and.callThrough();
    spyOn(component.snackBar, "openFromComponent").and.callThrough()
    component.registerUser();
    component.snackBar.openFromComponent(SnackbarComponent, {
      data: {text: 'Welcome to Games Store', status: 'success'},
      verticalPosition: 'top',
      horizontalPosition: 'center',
      duration: 3000
    })
    component.store.dispatch(login({user: dispatchUser}));
    expect(component.snackBar.openFromComponent).toHaveBeenCalledWith(SnackbarComponent, {
      data: {text: 'Welcome to Games Store', status: 'success'},
      verticalPosition: 'top',
      horizontalPosition: 'center',
      duration: 3000
    });
  });

});
