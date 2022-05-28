import { Component, OnInit } from '@angular/core';
import { PokedexService } from './pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  constructor(
    private _pokedexService: PokedexService
  ) { }

  ngOnInit(): void {
    this._pokedexService.getPokemon().subscribe((datos) => {
      console.log({ datos });
    });
  }


}
