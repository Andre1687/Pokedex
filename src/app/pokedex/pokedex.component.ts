import { Component, OnInit } from '@angular/core';
import { Pagination, Pokemon } from '../shared/models/pagination';
import { PokedexService } from './pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemons: Pokemon[] = [];

  constructor(
    private _pokedexService: PokedexService
  ) { }

  ngOnInit(): void {
    this._pokedexService.getPokemon().subscribe((datos: Pagination) => {
      console.log({ datos });
      this.pokemons = datos.results;
    });
  }


}
