import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FilterParams} from "../../../../shared/interfaces/filter.interface";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent  implements OnInit{
  filterForm: FormGroup
  @Output()
  filter = new EventEmitter<FilterParams>()
  constructor() {
  }

  ngOnInit():void {
    this.filterForm = new FormGroup({
      search: new FormControl(''),
      genres: new FormControl(''),
      developers: new FormControl('')
    })
  }

  submitFilter() {
    this.filter.emit(this.filterForm.value)
  }
}
