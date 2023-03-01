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

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let service: AuthService;
  let initialState = GameForMock;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      providers: [provideMockStore({initialState})],
      imports: [HttpClientModule, MatSnackBarModule,
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

});
