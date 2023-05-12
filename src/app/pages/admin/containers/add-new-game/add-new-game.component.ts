import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ClearObservable } from '../../../../shared/classes';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-new-game',
  templateUrl: './add-new-game.component.html',
  styleUrls: ['./add-new-game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddNewGameComponent extends ClearObservable implements OnInit {
  addNewGameForm: FormGroup;
  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.buildNewGameForm();
  }
  private buildNewGameForm() {
    this.addNewGameForm = new FormGroup({
      slug: new FormControl(''),
      name: new FormControl(''),
      name_original: new FormControl(''),
      description: new FormControl(''),
      metacritic: new FormControl(''),
      released: new FormControl(''),
      tba: new FormControl(false),
      updated: new FormControl(''),
      background_image: new FormControl(''),
      background_image_additional: new FormControl(''),
      website: new FormControl(''),
      rating: new FormControl(''),
      rating_top: new FormControl(''),
      developers: this.fb.array([]),
    });
  }
  addDeveloper() {
    const developer = this.fb.group({
      name: new FormControl(''),
      slug: new FormControl(''),
      games_count: new FormControl(''),
      image_background: new FormControl(''),
    });
    this.addNewGameForm.value.developers.push(developer);
  }
  addMetacriticPlatform() {}
}
