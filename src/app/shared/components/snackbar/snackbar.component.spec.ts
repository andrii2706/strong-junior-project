import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarComponent } from './snackbar.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarModule, MatSnackBarRef} from "@angular/material/snack-bar";

describe('SnackbarComponent', () => {
  let component: SnackbarComponent;
  let fixture: ComponentFixture<SnackbarComponent>;
  let snackBar: MatSnackBar
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SnackbarComponent],
      imports: [
        MatSnackBarModule
      ],
      providers: [
        {
          provide: MatSnackBarRef, useValue: {
            _open: () => {
            }
          }
        },
        {provide: MAT_SNACK_BAR_DATA, useValue: {}},
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
        .compileComponents();

    fixture = TestBed.createComponent(SnackbarComponent);
    component = fixture.componentInstance;
    snackBar = TestBed.inject(MatSnackBar);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
