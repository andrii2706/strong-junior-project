import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {HttpClientModule} from "@angular/common/http";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {GamesService} from "../../shared/services/games.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {of} from "rxjs";
import {Games} from "../../shared/interfaces/games.interface";
import {GamesForMockData} from "../../../assets/mocks/test-mocks/game";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: GamesService;
  const gamesMockData: Games = GamesForMockData;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientModule, MatSnackBarModule],
      schemas: [NO_ERRORS_SCHEMA]

    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(GamesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
