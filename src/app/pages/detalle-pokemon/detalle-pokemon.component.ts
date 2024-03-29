import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetallePokemonService } from './detalle-pokemon.service';
import { Ability } from './models/ability';
import { Pokemon } from './models/pokemon';
import { Stat } from './models/stat';

@Component({
  selector: 'app-detalle-pokemon',
  templateUrl: './detalle-pokemon.component.html',
  styleUrls: ['./detalle-pokemon.component.scss']
})
export class DetallePokemonComponent implements OnInit {

  id: string = '';
  name: string = '';
  height: number = 0;
  weight: number = 0;
  stats: Stat[] = [];
  abilities: Ability[] = [];

  constructor(
    private route: ActivatedRoute,
    private detallePokemonService: DetallePokemonService  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: any) =>  {
        this.id = params.id;
        this.getDetallePokemon();
      })
  }


  getDetallePokemon() {
    this.detallePokemonService.getDetalle(this.id).subscribe((data: Pokemon) => {
      this.name = data.name;
      this.height = data.height;
      this.weight = data.weight;
      this.stats = data.stats;
      this.abilities = data.abilities;
    });
  }


}
