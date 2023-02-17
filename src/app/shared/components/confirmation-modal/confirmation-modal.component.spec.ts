import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ConfirmationModalComponent} from './confirmation-modal.component';
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {Game} from "../../interfaces/games.interface";
import {GameForMock} from "../../../../assets/mocks/test-mocks/game";
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {of} from "rxjs";

describe('ConfirmationModalComponent', () => {
  let component: ConfirmationModalComponent;
  let dialogSpy: jasmine.Spy;
  let dialogRefSpyObj = jasmine.createSpyObj({afterClosed: of({}), close: null});
  dialogRefSpyObj.componentInstance = {body: ''};
  let fixture: ComponentFixture<ConfirmationModalComponent>;
  let store: MockStore<{ game: Game }>
  let initialState = GameForMock;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmationModalComponent],
      imports: [MatDialogModule],
      providers: [provideMockStore({initialState}), {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []}],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ConfirmationModalComponent);
    dialogSpy = spyOn(TestBed.get(MatDialog), 'open').and.returnValue(dialogRefSpyObj);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should remove game from wishList", () => {
    const storeSpy = spyOn(component.store, "dispatch").and.callThrough();
    component.confirmDeleting();
    fixture.detectChanges();
    expect(storeSpy).toHaveBeenCalledTimes(1)
  })
});
