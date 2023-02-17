import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GameWishlistComponent} from './game-wishlist.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {MatDialogModule} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {ReplaceNullPipe} from "../../pipes/replace-null.pipe";

describe('GameWishlistComponent', () => {
  let component: GameWishlistComponent;
  let fixture: ComponentFixture<GameWishlistComponent>;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameWishlistComponent, ReplaceNullPipe],
      imports: [MatDialogModule, RouterTestingModule.withRoutes([])],
      schemas: [NO_ERRORS_SCHEMA]

    })
      .compileComponents();

    fixture = TestBed.createComponent(GameWishlistComponent);
    router = TestBed.get(Router);
    activatedRoute = TestBed.get(ActivatedRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
