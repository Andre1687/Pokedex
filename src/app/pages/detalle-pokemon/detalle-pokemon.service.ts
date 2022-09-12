import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetallePokemonService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getDetalle(id: string): Observable<any> {
    return this.httpClient.get('https://pokeapi.co/api/v2/ability/' + id)
      .pipe(map((data: any) => {
        console.log(data);

      }))
  }
}
