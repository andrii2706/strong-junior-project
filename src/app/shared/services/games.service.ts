import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {GameDetails, Games } from "../interfaces/games.interface";
import {HttpClient, HttpParams} from "@angular/common/http";
import {FilterParams} from "../interfaces/filter.interface";

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  url = 'https://api.rawg.io/api'
  games ='/games'
  key = '75680a18d0894f90a57b6e2070349042'
  constructor(private httpClient: HttpClient) { }

  getLastReleasedGames(page: number, dates:string): Observable<Games>{
    const query = (dates: string) => new HttpParams({
      fromObject: {
        key: this.key,
        page,
        dates: dates
      }
    })
    return this.httpClient.get<Games>(`${this.url}${this.games}`, {
      params: query(dates)
    })
  }

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

  filterGames(page:number, filterParams: FilterParams ): Observable<Games>{
    const paramsForFilter = this.getFilterQueryParameter(filterParams)
    return this.httpClient.get<Games>(`${this.url}${this.games}?key=${this.key}&page=${page}`, {
      params: paramsForFilter
    })
  }
  private getFilterQueryParameter(filterParams: FilterParams): HttpParams{
  return  Object.entries(filterParams).reduce<HttpParams>((acc, item) => {
      const key = item[0];
      const value = item[1];
    if(value !== '' ){
      return acc.append(key, value)
    }
    return acc
    }, new HttpParams())
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
