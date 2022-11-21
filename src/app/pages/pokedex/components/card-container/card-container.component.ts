import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pagination';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {

  @Input() pokemons: Pokemon[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getId(pokemon: Pokemon): string {
    return pokemon.url.split('/').slice(-2, -1).toString();
  }

}
