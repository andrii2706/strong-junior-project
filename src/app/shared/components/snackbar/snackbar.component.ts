import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from "@angular/material/snack-bar";

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  public dataSnackbar: string

  constructor(private matSnackBarRef: MatSnackBarRef<SnackbarComponent>, @Inject(MAT_SNACK_BAR_DATA) public data: { text: string, status: string }) {
  }

  ngOnInit(): void {
    this.dataSnackbar = this.data.text
  }
}
