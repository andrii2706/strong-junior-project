import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GamesService } from '../../shared/services/games.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { Games } from '../../shared/interfaces/games.interface';
import { GamesForMockData } from '../../../assets/mocks/test-mocks/game';
import { RouterTestingModule } from '@angular/router/testing';
import { GamesComponent } from '../games/games/games.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: GamesService;
  const gamesMockData: Games = GamesForMockData;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        HttpClientModule,
        MatSnackBarModule,
        RouterTestingModule.withRoutes([
          { path: 'games', component: GamesComponent },
        ]),
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(GamesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get new Games', () => {
    spyOn(service, 'getLastReleasedGames').and.returnValue(
      of(GamesForMockData)
    );
    component.getNewGames(1);
    component.total = gamesMockData.count;
    component.games = gamesMockData.results;
    component.isLoading = false;
    expect(component.total).toBe(gamesMockData.count);
    expect(component.games).toBe(gamesMockData.results);
    expect(component.isLoading).toBe(false);
  });
  it('should navigateTo', () => {
    component.navigateTo(1);
    component.page = 1;
    component.getNewGames(1);
    expect(component.page).toBe(1);
  });
  it('should lastWeekGames', () => {
    spyOn(service, 'getLastReleasedGames').and.returnValue(
      of(GamesForMockData)
    );
    component.lastWeekGames();
    component.total = gamesMockData.count;
    component.games = gamesMockData.results;
    component.isLoading = false;
    expect(component.total).toBe(gamesMockData.count);
    expect(component.games).toBe(gamesMockData.results);
    expect(component.isLoading).toBe(false);
  });
  it('should lastGames', () => {
    spyOn(service, 'getLastReleasedGames').and.returnValue(
      of(GamesForMockData)
    );
    component.lastGames();
    component.total = gamesMockData.count;
    component.games = gamesMockData.results;
    component.isLoading = false;
    expect(component.total).toBe(gamesMockData.count);
    expect(component.games).toBe(gamesMockData.results);
    expect(component.isLoading).toBe(false);
  });
  it('should go to all games', () => {
    component.goToAllGames();
    spyOn(component.router, 'navigateByUrl');
    component.router.navigateByUrl('/games');
    expect(component.router.navigateByUrl).toHaveBeenCalledWith('/games');
  });
});
