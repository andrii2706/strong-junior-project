import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { userMockData } from '../assets/mocks/test-mocks/user';
import { UserInteface } from './shared/interfaces/user.inteface';
import { login } from './auth/login/login/login.actions';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const user: UserInteface = userMockData;
  let store: MockStore<{ user: UserInteface }>;
  const initialState = user;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [provideMockStore({ initialState })],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    store = TestBed.inject(MockStore);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'strong-junior-project'`, () => {
    expect(app.title).toEqual('strong-junior-project');
  });
  it('should get into if ', () => {
    app.preventBrowserReload();
    fixture.detectChanges();
    app.userProfile = user;
    expect(app.userProfile).toBe(user);
  });
  it('should dispatch user', () => {
    app.userProfile = user;
    app.preventBrowserReload();
    spyOn(app.store, 'dispatch');
    app.store.dispatch(login({ user }));
    expect(app.store.dispatch).toHaveBeenCalledWith(login({ user }));
  });
});
