import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss']
})
export class CharacteristicsComponent implements OnInit {

  @Input() name: string = '';
  @Input() height: number = 0;
  @Input() weight: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
