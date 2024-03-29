import { Component, OnInit } from '@angular/core';
import { Pagination, Pokemon } from '../../shared/models/pagination';
import { PokedexService } from './pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemons: Pokemon[] = [];

  nextPage: string | null = null;

  constructor(
    private _pokedexService: PokedexService
  ) { }

  ngOnInit(): void {
    this.getPokemons('https://pokeapi.co/api/v2/pokemon');
    //lo de abajo es para que se muestre el eskeleto por 9 segundos
    // setTimeout(() => {
    //   this.getPokemons('https://pokeapi.co/api/v2/pokemon');
    // }, 9000);
  }


  onScroll() {
    this.changePage('next');
  }


  changePage(typeButton: string) {
    if (typeButton == 'next' && this.nextPage != null) {
      this.getPokemons(this.nextPage);
    }
  }

  getPokemons(url: string) {
    this._pokedexService.getPokemon(url)
      .subscribe((datos: Pagination) => {
        console.log({ datos });
        this.pokemons = this.pokemons.concat(datos.results);
        this.nextPage = datos.next;
      });
  }



}
