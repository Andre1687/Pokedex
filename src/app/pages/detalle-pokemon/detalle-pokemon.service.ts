import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pokemon } from './models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class DetallePokemonService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getDetalle(id: string): Observable<any> {
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon/' + id)
    //return this.httpClient.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + [300])

      .pipe(map((data: any) => {
        const pokemon: Pokemon = data;
        console.log(data);
        return pokemon;

      }))
  }
}
