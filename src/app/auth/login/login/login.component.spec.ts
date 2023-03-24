import {ComponentFixture, TestBed} from "@angular/core/testing";
import {AuthService} from "../../../shared/services/auth.service";
import {GameForMock} from "../../../../assets/mocks/test-mocks/game";
import {provideMockStore} from "@ngrx/store/testing";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RouterTestingModule} from "@angular/router/testing";
import {HomeComponent} from "../../../pages/home/home.component";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {LoginComponent} from "./login.component";
import {loginUser, userMockData} from "../../../../assets/mocks/test-mocks/user";
import {of} from "rxjs";
import {login} from "./login.actions";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {SnackbarComponent} from "../../../shared/components/snackbar/snackbar.component";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: AuthService;
  let initialState = GameForMock;
  const user = loginUser;
  const dispatchUser = userMockData
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent, SnackbarComponent],
      providers: [provideMockStore({initialState})],
      imports: [HttpClientModule, MatSnackBarModule, NoopAnimationsModule,
        RouterTestingModule.withRoutes([{path: 'home', component: HomeComponent}])],
      teardown: {destroyAfterEach: false},
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    service = TestBed.inject(AuthService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
