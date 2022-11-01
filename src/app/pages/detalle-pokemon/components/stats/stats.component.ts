import { Component, Input, OnInit } from '@angular/core';
import { Stat } from '../../models/stat';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  @Input() listStats: Stat[] = [];

  get stats() {
    return this.listStats.filter(variableNoBuenaPracticaAndrePeroPorAhorita => !variableNoBuenaPracticaAndrePeroPorAhorita.stat.name.includes('-'));
  }

  constructor() { }

  ngOnInit(): void {
  }



}
