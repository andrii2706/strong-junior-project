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
    let paramsForFilter = new HttpParams()
    if(filterParams.genres.length && filterParams.developers.length && filterParams.search.length && filterParams.dates.length) {
      debugger
      paramsForFilter = new HttpParams({
        fromObject:{
          search: filterParams.search,
          developers: filterParams.developers,
          platforms: filterParams.platforms,
          genres: filterParams.genres,
          dates: filterParams.dates
        }
      })
    }else if(filterParams.genres.length){
      debugger
      paramsForFilter = paramsForFilter.append('genres', filterParams.genres)
    }else if(filterParams.developers.length){
      debugger
      paramsForFilter = paramsForFilter.append('developers', filterParams.developers)
    }else if(filterParams.search.length){
      debugger
      paramsForFilter = paramsForFilter.append('search', filterParams.search)
    }else if(filterParams.dates.length){
      debugger
      paramsForFilter = paramsForFilter.append('dates', filterParams.dates)
    }else if(filterParams.platforms.length){
      debugger
      paramsForFilter = paramsForFilter.append('platforms', filterParams.platforms)
    }

    return this.httpClient.get<Games>(`${this.url}${this.games}?key=${this.key}&page=${page}`, {
      params: paramsForFilter
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
