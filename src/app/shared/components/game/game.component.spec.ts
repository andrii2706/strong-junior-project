import {ComponentFixture, TestBed} from '@angular/core/testing';
import {GameComponent} from './game.component';
import {HttpClientModule} from "@angular/common/http";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";
import {Game} from "../../interfaces/games.interface";
import {GameForMock} from "../../../../assets/mocks/test-mocks/game";
import {AuthService} from "../../services/auth.service";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {ReplaceNullImgPipe} from "../../pipes/replace-null-img.pipe";
import {userWithGames} from "../../../../assets/mocks/test-mocks/user";
import {addGame} from "../../../auth/login/login/login.actions";


describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let service: AuthService;
  let router: Router
  let activatedRoute: ActivatedRoute;
  let store: MockStore<{ game: Game }>
  let initialState = userWithGames;
  const gameMockData: Game = GameForMock

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameComponent, ReplaceNullImgPipe],
      imports: [HttpClientModule,
        MatSnackBarModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [provideMockStore({initialState})],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
    store = TestBed.get(MockStore)
    fixture = TestBed.createComponent(GameComponent);
    service = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    activatedRoute = TestBed.get(ActivatedRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should set data from parent", () => {
    fixture.componentInstance.gameInfo = gameMockData;
    fixture.detectChanges();
    component.game = gameMockData
    expect(component.game).toBe(gameMockData)
  });
  it("should change location of user", () => {
    component.game = gameMockData
    const navigate = spyOn(component.router, "navigate");
    component.goToGameDetails();
    expect(navigate).toHaveBeenCalledWith([3498], {relativeTo: activatedRoute})
  });
  it("should redirect to gameDetails", () => {
    component.game = gameMockData
    spyOnProperty(router, 'url', 'get').and.returnValue('/home');
    const navigate = spyOn(component.router, "navigate");
    component.goToGameDetails();
    expect(navigate).toHaveBeenCalledWith([`/games/3498`], {relativeTo: activatedRoute})
  });
  it('should should add game to wishlist', () => {
    const storeSpy = spyOn(store, "dispatch").and.callThrough();
    component.buyAGame(gameMockData);
    store.dispatch(addGame({game: gameMockData}));
    expect(storeSpy).toHaveBeenCalledWith(addGame({game: gameMockData}))
  });
});
