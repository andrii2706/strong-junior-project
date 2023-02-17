import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfileComponent} from './profile.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {Game} from "../../../shared/interfaces/games.interface";
import {GameForMock} from "../../../../assets/mocks/test-mocks/game";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {ActivatedRoute, Router} from "@angular/router";

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let store: MockStore<{ game: Game }>
  let initialState = GameForMock;
  let router: Router;
  let activatedRoute: ActivatedRoute;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [provideMockStore({initialState})],
      schemas: [NO_ERRORS_SCHEMA]


    })
      .compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    activatedRoute = TestBed.get(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
