import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {Game} from "./shared/interfaces/games.interface";
import {GameForMock} from "../assets/mocks/test-mocks/game";

describe('AppComponent', () => {
  let store: MockStore<{ game: Game }>
  let initialState = GameForMock;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [provideMockStore({initialState})],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'strong-junior-project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('strong-junior-project');
  });
});
