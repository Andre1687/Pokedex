import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-image',
  templateUrl: './pokemon-image.component.html',
  styleUrls: ['./pokemon-image.component.scss']
})
export class PokemonImageComponent implements OnInit {

  @Input() idChildExample: string = '';
  @Input() width: string = '1000px';
  @Input() height: string = '100px';

  constructor() { }

  ngOnInit(): void {
  }

}
