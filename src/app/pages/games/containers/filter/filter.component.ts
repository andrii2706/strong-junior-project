import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FilterParams} from "../../../../shared/interfaces/filter.interface";
import {
  developersFilter,
  genresFilter,
  metacriticNumbers,
  orderByInfos,
  platformsFilter
} from "../../constants/filter.constant";
import * as moment from "moment";
import {ClearObservable} from "../../../../shared/classes";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent extends ClearObservable implements OnInit {
  filterForm: FormGroup;
  dates: string = ''
  genres: { genreName: string, slug: string }[] = genresFilter;
  developers: { developersName: string, slug: string }[] = developersFilter;
  platforms: { platformsName: string, slug: string }[] = platformsFilter;
  orderByInfos: { name: string, slug: string }[] = orderByInfos;
  metacritics: { name: string, slug: string }[] = metacriticNumbers;
  @Output()
  filter = new EventEmitter<FilterParams>()

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      search: new FormControl(''),
      genres: new FormControl(''),
      platforms: new FormControl(''),
      developers: new FormControl(''),
      ordering: new FormControl(''),
      metacritic: new FormControl(''),
      dates: new FormControl('')
    })
  }

  submitFilter() {
    this.filterForm.value.dates = this.dates
    this.filter.emit(
      this.filterForm.value
    )
  }

  lastGames() {
    const firstDate = moment().startOf('year').format('YYYY-MM-DD');
    const lastDate = moment().add(1, 'year').endOf('year').format('YYYY-MM-DD');
    this.dates = `${firstDate},${lastDate}`;
  }

  clearFilterForm() {
    this.dates = ''
    this.filterForm.patchValue({
      search: '',
      genres: '',
      platforms: '',
      developers: '',
      ordering: '',
      metacritic: '',
      dates: ''
    })
  }
}
