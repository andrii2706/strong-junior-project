import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfileComponent} from './profile.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {Game} from "../../../shared/interfaces/games.interface";
import {GameForMock} from "../../../../assets/mocks/test-mocks/game";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {ActivatedRoute} from "@angular/router";
import {logout} from "../../../auth/login/login/login.actions";

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let store: MockStore<{ game: Game }>
  let initialState = GameForMock;
  let activatedRoute: ActivatedRoute;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [provideMockStore({initialState})],
      schemas: [NO_ERRORS_SCHEMA]


    })
      .compileComponents();
    store = TestBed.inject(MockStore)
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.get(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should logout user", () => {
    const navigateByUrl = spyOn(component.router, "navigateByUrl")
    const storeSpy = spyOn(store, "dispatch").and.callThrough();
    component.logOut();
    store.dispatch(logout({user: null}))
    expect(navigateByUrl).toHaveBeenCalledWith('');
    expect(storeSpy).toHaveBeenCalledWith(logout({user: null}));
  })
});
