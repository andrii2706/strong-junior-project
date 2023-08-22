import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ClearObservable } from '../../../shared/classes';
import { title } from '../constants/admin.constants';
import { finalize, takeUntil } from 'rxjs';
import { AuthService } from '../../../shared/services/auth.service';
import { UserInteface } from '../../../shared/interfaces/user.inteface';
import { GamesService } from '../../../shared/services/games.service';
import { Game } from '../../../shared/interfaces/games.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent extends ClearObservable implements OnInit {
  addNewGameForm: boolean;
  users: UserInteface[];
  adminTitle = title;
  totalGames: number;
  games: Game[];
  usersInfo: boolean;

  constructor(
    private authService: AuthService,
    private gamesService: GamesService
  ) {
    super();
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  removeDisable() {
    this.addNewGameForm = false;
  }

  addGame() {
    this.addNewGameForm = !this.addNewGameForm;
  }

  userInfo() {
    this.usersInfo = !this.usersInfo;
  }

  getAllUsers() {
    this.authService
      .getAllUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe(users => {
        this.users = users;
      });
  }
  getAllGames() {
    this.gamesService
      .getAllGames(0)
      .pipe(takeUntil(this.destroy$))
      .subscribe(games => {
        this.totalGames = games.count;
        this.games = games.results;
      });
  }
}
