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

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: AuthService;
  let initialState = GameForMock;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [provideMockStore({initialState})],
      imports: [HttpClientModule, MatSnackBarModule,
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
