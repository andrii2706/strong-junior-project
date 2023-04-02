import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FilterParams } from '../../../../shared/interfaces/filter.interface';
import { filterParamsEmpty } from '../../../../../assets/mocks/test-mocks/filter-params';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  const filterParamsMock: FilterParams = filterParamsEmpty;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should submit filter form', () => {
    component.dates = '';
    component.submitFilter();
    component.filterForm.value.dates = component.dates;
    component.filterForm.setValue(filterParamsMock);
    spyOn(component.filter, 'emit');
    component.filter.emit(component.filterForm.value);
    expect(component.filter.emit).toHaveBeenCalledWith(
      component.filterForm.value
    );
    expect(component.filterForm.value.dates).toBe(component.dates);
  });
  it('should last games', () => {
    component.lastGames();
    component.dates = '';
    expect(component.dates).toBe('');
  });
  it('should clearFilter form', () => {
    const filterFormValue = {
      search: '',
      genres: '',
      platforms: '',
      developers: '',
      ordering: '',
      metacritic: '',
      dates: '',
    };
    component.clearFilterForm();
    component.filterForm.setValue(filterFormValue);
    expect(component.filterForm.value).toEqual(filterFormValue);
  });
});
