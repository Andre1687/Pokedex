import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pagination } from '../../shared/models/pagination';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(
    private httpClient: HttpClient
  ) { }


  public getPokemon(url: string): Observable<Pagination> {
    return this.httpClient.get(url)
      .pipe(map((data: any) => {
        const pagination: Pagination = data;
        return pagination;
      }))
  }




}
