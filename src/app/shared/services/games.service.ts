import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {GameDetails, Games, GameTrailers, IAchivments, ScreenShots} from "../interfaces/games.interface";
import {HttpClient, HttpParams} from "@angular/common/http";
import {FilterParams, Genres} from "../interfaces/filter.interface";

class Achivments {
}

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  url = 'https://api.rawg.io/api'
  games ='/games'
  screenShot = '/screenshots'
  movies = '/movies'
  achievements = '/achievements'
  key = '75680a18d0894f90a57b6e2070349042'
  private genres = 'https://api.rawg.io/api/genres';
  constructor(private httpClient: HttpClient) { }


  getAllGames(page: number): Observable<Games> {
    const filterParam = () => new HttpParams({
      fromObject: {
        key: this.key,
        page
      }
    })

    return this.httpClient.get<Games>( `${this.url}${this.games}`, {
      params: filterParam()
    })
  }

  filterGames(page:number, filterInfo:  FilterParams ): Observable<Games>{
    const filterParam = (filter: FilterParams) => new HttpParams({
      fromObject: {
        key: this.key,
        page,
        search: filter.search,
        developers: filter.developers,
        genre: filter.genres
      }
    })
    return this.httpClient.get<Games>(`${this.url}${this.games}`, {
      params: filterParam(filterInfo)
    })
  }

  getGameById(id: string): Observable<GameDetails>{
    const paramsForGameBtId = new HttpParams({
      fromObject: {
       key: this.key,
      }
    })
    return this.httpClient.get<GameDetails>(`${this.url}${this.games}/${id}`, {
      params: paramsForGameBtId
    })
  }
}
