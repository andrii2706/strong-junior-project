import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GameComponent} from './game.component';
import {HttpClientModule} from "@angular/common/http";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";
import {Game} from "../../interfaces/games.interface";
import {GameForMock} from "../../../../assets/mocks/test-mocks/game";
import {AuthService} from "../../services/auth.service";
import {StoreModule} from "@ngrx/store";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let service: AuthService;
  let router: Router;
  let activatedRoute: ActivatedRoute;
  let store: StoreModule;
  const gameMockData: Game = GameForMock

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameComponent],
      imports: [HttpClientModule,
        RouterTestingModule.withRoutes([]),
        StoreModule.forRoot(provideMockStore),
      ],
      providers: [MockStore],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GameComponent);
    service = TestBed.inject(AuthService)
    router = TestBed.get(Router);
    activatedRoute = TestBed.get(ActivatedRoute);
    store = TestBed.inject(MockStore);
    location = TestBed.get(Location);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should change location of user", () => {
    component.game = gameMockData;
    const navigate = spyOn(router, "navigate");
    component.goToGameDetails();
    expect(navigate).toHaveBeenCalledWith([component.game.id], {relativeTo: activatedRoute})
  })
  it("should return user status", () => {
    const loginStatus = spyOn(service, "LoginStatus")
    component.getUserStatus();
    loginStatus.and.returnValue(false)
    expect(component.userStatus).toBe(false)
  });

});
