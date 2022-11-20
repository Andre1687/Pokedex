import { Component, Input, OnInit } from '@angular/core';
import { Ability } from '../../models/ability';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss']
})
export class CharacteristicsComponent implements OnInit {

  @Input() name: string = '';
  @Input() height: number = 0;
  @Input() weight: number = 0;
  @Input() abilitiesChild: Ability[] = [];

  constructor() { }

  ngOnInit(): void {
  }


  get abilities() { //abilities es abilitiesChild pero filtrado(pues limitado)

    if (this.abilitiesChild.length > 2) {
      this.abilitiesChild.length = 2;
    }
    return this.abilitiesChild;
  }

}
