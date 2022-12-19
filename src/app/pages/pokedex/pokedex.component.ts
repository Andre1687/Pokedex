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

  backupPokemons: Pokemon[] = [];

  previous: string | null = null;

  next: string | null = null;

  constructor(
    private _pokedexService: PokedexService
  ) { }

  ngOnInit(): void {
    this.getPokemons('https://pokeapi.co/api/v2/pokemon');
  }


  changePage(typeButton: string) {
    if (typeButton == 'next' && this.next != null) {
      this.getPokemons(this.next);
    } else if (typeButton == 'previous' && this.previous != null) {
      this.getPokemons(this.previous);
    }
  }

  getPokemons(url: string) {
    this._pokedexService.getPokemon(url)
      .subscribe((datos: Pagination) => {
        console.log({ datos });
        this.pokemons = datos.results;
        this.previous = datos.previous;
        this.next = datos.next;
        this.backupPokemons = datos.results;
      });
  }


  busqueda(consulta: string): void {
    this.pokemons = this.backupPokemons.filter(pokemon => pokemon.name.toLowerCase().includes(consulta.toLowerCase()));
  }

  onScroll() {
    console.log("scrolled!!");
  }

}
