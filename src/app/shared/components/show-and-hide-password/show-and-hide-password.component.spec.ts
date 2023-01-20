import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAndHidePasswordComponent } from './show-and-hide-password.component';

describe('ShowAndHidePasswordComponent', () => {
  let component: ShowAndHidePasswordComponent;
  let fixture: ComponentFixture<ShowAndHidePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAndHidePasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAndHidePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
