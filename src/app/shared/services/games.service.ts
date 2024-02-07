import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDetails, Games } from '../interfaces/games.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FilterParams } from '../interfaces/filter.interface';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  url = 'https://api.rawg.io/api';
  games = '/games';
  key = '85d9905e7cd7443c8983e54b4733abf5';

  constructor(private httpClient: HttpClient, private fireStore: Firestore) {}

  getLastReleasedGames(page: number, dates: string): Observable<Games> {
    const query = (dates: string) =>
      new HttpParams({
        fromObject: {
          key: this.key,
          page,
          dates: dates,
        },
      });
    return this.httpClient.get<Games>(`${this.url}${this.games}`, {
      params: query(dates),
    });
  }

  getAllGames(page: number): Observable<Games> {
    const filterParam = () =>
      new HttpParams({
        fromObject: {
          key: this.key,
          page,
        },
      });

    return this.httpClient.get<Games>(`${this.url}${this.games}`, {
      params: filterParam(),
    });
  }

  filterGames(page: number, filterParams: FilterParams): Observable<Games> {
    const paramsForFilter = this.getFilterQueryParameter(filterParams);
    return this.httpClient.get<Games>(
      `${this.url}${this.games}?key=${this.key}&page=${page}`,
      {
        params: paramsForFilter,
      }
    );
  }
  private getFilterQueryParameter(filterParams: FilterParams): HttpParams {
    return Object.entries(filterParams).reduce<HttpParams>((acc, item) => {
      const key = item[0];
      const value = item[1];
      if (value !== '') {
        return acc.append(key, value);
      }
      return acc;
    }, new HttpParams());
  }

  getGameById(id: string): Observable<GameDetails> {
    const paramsForGameBtId = new HttpParams({
      fromObject: {
        key: this.key,
      },
    });
    return this.httpClient.get<GameDetails>(`${this.url}${this.games}/${id}`, {
      params: paramsForGameBtId,
    });
  }

  async addUserGame(
    userId: string,
    slug: string,
    name: string,
    isBought: boolean,
    name_original: string,
    description: string,
    released: string,
    background_image: string,
    tba: boolean,
    rating: number,
    rating_top: number,
    metacritic: number
  ) {
    await addDoc(collection(this.fireStore, 'game'), {
      userId: userId,
      games: [
        {
          slug,
          name,
          isBought,
          name_original,
          description,
          released,
          background_image,
          tba,
          rating,
          rating_top,
          metacritic,
        },
      ],
    });
  }
}
