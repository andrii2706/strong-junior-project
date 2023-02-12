import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GamesComponent} from './games.component';
import {HttpClientModule} from "@angular/common/http";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {GamesService} from "../../../shared/services/games.service";
import {of} from "rxjs";
import {Games} from "../../../shared/interfaces/games.interface";
import {GamesForMockData} from "../../../../assets/mocks/test-mocks/game";

describe('GamesComponent', () => {
  let component: GamesComponent;
  let fixture: ComponentFixture<GamesComponent>;
  let service: GamesService;
  const games: Games = GamesForMockData
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamesComponent],
      providers: [HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GamesComponent);
    service = TestBed.inject(GamesService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should return data", () => {
    spyOn(service, "getAllGames").and.returnValue(of())
  })
});
