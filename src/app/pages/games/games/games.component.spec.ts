import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesComponent } from './games.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GamesService } from '../../../shared/services/games.service';
import { of } from 'rxjs';
import { Games } from '../../../shared/interfaces/games.interface';
import { GamesForMockData } from '../../../../assets/mocks/test-mocks/game';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FilterParams } from '../../../shared/interfaces/filter.interface';
import {
  filterParamsEmpty,
  filterParamsWithData,
} from '../../../../assets/mocks/test-mocks/filter-params';

describe('GamesComponent', () => {
  let component: GamesComponent;
  let fixture: ComponentFixture<GamesComponent>;
  let service: GamesService;
  const games: Games = GamesForMockData;
  const filterParamsMock: FilterParams = filterParamsEmpty;
  const filterParamsMockWithData: FilterParams = filterParamsWithData;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamesComponent],
      imports: [HttpClientTestingModule, MatSnackBarModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(GamesComponent);
    service = TestBed.inject(GamesService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get all Games', () => {
    spyOn(service, 'getAllGames').and.returnValue(of(games));
    component.allGames(1);
    component.isLoading = false;
    component.totalGames = games.count;
    component.games = games.results;
    expect(component.isLoading).toBe(false);
    expect(component.totalGames).toBe(games.count);
    expect(component.games).toBe(games.results);
  });
  it('should get Filter Query', () => {
    component.getFilterQuery(filterParamsMock);
    component.filterParams = filterParamsMock;
    expect(component.filterParams).toBe(filterParamsMock);
  });
  it('should get Filter Query with data', () => {
    component.getFilterQuery(filterParamsWithData);
    component.filterParams = filterParamsWithData;
    expect(component.filterParams).toBe(filterParamsWithData);
  });
  it('should filter games', () => {
    spyOn(service, 'filterGames').and.returnValue(of(games));
    component.filteredGames(1, filterParamsEmpty);
    component.isLoading = false;
    component.totalGames = games.count;
    component.games = games.results;
    expect(component.isLoading).toBe(false);
    expect(component.totalGames).toBe(games.count);
    expect(component.games).toBe(games.results);
  });
  it(' should navigateTo page', () => {
    component.filterParams = filterParamsEmpty;
    component.navigateTo(1);
    component.page = 1;
    component.filteredGames(1, filterParamsEmpty);
    expect(component.page).toBe(1);
  });
  it('should retunr all games', () => {
    component.filterParams = null;
    component.navigateTo(1);
    component.page = 1;
    component.allGames(1);
    expect(component.page).toBe(1);
  });
  it('should show form', () => {
    component.showForm();
    component.showFormStatus = true;
    expect(component.showFormStatus).toBe(true);
  });
});
