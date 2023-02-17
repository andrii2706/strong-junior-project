import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GameWishlistComponent} from './game-wishlist.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {MatDialogModule} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {ReplaceNullPipe} from "../../pipes/replace-null.pipe";
import {Game} from "../../interfaces/games.interface";
import {GameForMock} from "../../../../assets/mocks/test-mocks/game";
import {ConfirmationModalComponent} from "../confirmation-modal/confirmation-modal.component";
import {GameDetailsComponent} from "../../../pages/games/containers/game-datails/game-details.component";

describe('GameWishlistComponent', () => {
  let component: GameWishlistComponent;
  let fixture: ComponentFixture<GameWishlistComponent>;
  let activatedRoute: ActivatedRoute;
  const gameMockData: Game = GameForMock
  const routes = [
    {
      path: 'games/:id',
      component: GameDetailsComponent
    }
  ]
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameWishlistComponent, ReplaceNullPipe],
      imports: [MatDialogModule, RouterTestingModule.withRoutes(routes)],
      schemas: [NO_ERRORS_SCHEMA]

    })
      .compileComponents();

    fixture = TestBed.createComponent(GameWishlistComponent);
    activatedRoute = TestBed.get(ActivatedRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should open dialog", () => {
    const openDialogSpy = spyOn(component.dialog, 'open');
    const fakeDialogConfig = {
      width: '500px',
      data: gameMockData
    };
    component.removeGames(gameMockData);
    expect(openDialogSpy).toHaveBeenCalledWith(ConfirmationModalComponent,
      fakeDialogConfig);
  });
  it("should redirect to game details", () => {
    const redirectToGames = spyOn(component.router, "navigate")
    component.goToGame(gameMockData.id);
    expect(redirectToGames).toHaveBeenCalledWith(["/games/3498"], {relativeTo: activatedRoute});
  });
});
