import { LayoutModule } from '@angular/cdk/layout';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

import {NavBarComponent} from './nav-bar.component';
import {HttpClientModule} from "@angular/common/http";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";
import {ActivatedRoute} from "@angular/router";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {Game} from "../../interfaces/games.interface";
import {GameForMock} from "../../../../assets/mocks/test-mocks/game";
import {logout} from "../../../auth/login/login/login.actions";

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let activatedRoute: ActivatedRoute;
  let store: MockStore<{ game: Game }>
  let initialState = GameForMock;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [provideMockStore({initialState})],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    store = TestBed.inject(MockStore)
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.get(ActivatedRoute);
    fixture.detectChanges();
    component.isOpen = false;
    component.title = 'Strong Junior project'
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
  it("should logout user", () => {
    const storeSpy = spyOn(component.store, "dispatch").and.callThrough();
    const navigate = spyOn(component.router, "navigateByUrl").and.callThrough();
    component.logOut();
    component.isLogin$ = false;
    store.dispatch(logout({user: null}));
    expect(navigate).toHaveBeenCalledWith('');
    expect(storeSpy).toHaveBeenCalledWith(logout({user: null}));
  })
});
