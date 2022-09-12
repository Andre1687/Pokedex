import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetallePokemonService } from './detalle-pokemon.service';

@Component({
  selector: 'app-detalle-pokemon',
  templateUrl: './detalle-pokemon.component.html',
  styleUrls: ['./detalle-pokemon.component.scss']
})
export class DetallePokemonComponent implements OnInit {

  id: string = '';

  constructor(
    private route: ActivatedRoute,
    private detallePokemonService: DetallePokemonService ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: any) =>  {
        this.id = params.id;
        console.log(this.id);
        this.getDetallePokemon();
      })
  }

  getDetallePokemon() {
    this.detallePokemonService.getDetalle(this.id).subscribe();
  }

}
