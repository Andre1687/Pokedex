import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-pokedex',
  templateUrl: './skeleton-pokedex.component.html',
  styleUrls: ['./skeleton-pokedex.component.scss']
})
export class SkeletonPokedexComponent implements OnInit {

  pokemons = [0,1,2,3,4,5,6,7]

  constructor() { }

  ngOnInit(): void {
  }

}
