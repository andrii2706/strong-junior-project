import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDatailsComponent } from './game-datails.component';

describe('GameDatailsComponent', () => {
  let component: GameDatailsComponent;
  let fixture: ComponentFixture<GameDatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDatailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
