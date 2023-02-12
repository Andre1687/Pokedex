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
    return this.listStats
      .filter(i =>
        !i.stat.name.includes('-'));
        // ' ! ' niega para no incluir los elementos que concidan con lo que estamos buscando con el includes
  }

  constructor() { }

  ngOnInit(): void {
  }


  formatStat(statTitle: string) {
    const defaultList = [
      { value: 'hp', abreviation: 'HP&nbsp;' },
      { value: 'attack', abreviation: 'ATK' },
      { value: 'defense', abreviation: 'DEF' },
      { value: 'speed', abreviation: 'SPD' }
    ];

    //arr.filter(x => x.title.toLowerCase().includes(searchStr.toLowerCase()))
    const statSearchResult = defaultList.find(i => i.value.toLocaleLowerCase().includes(statTitle.toLocaleLowerCase()));

    if (statSearchResult) {
      return statSearchResult.abreviation;
    } else {
      return statTitle.slice(0, 3).toUpperCase();
    }
    //if statTitle = defaultList.value then return abreviation
    //else  (return) statTitle.slice(0,3) o also asi que deviuelve solo los primeros 3
  }



  formatStatColor(statTitle: string) {
    const defaultList = [
      { value: 'hp', color: 'bg-danger' },
      { value: 'attack', color: 'bg-warning' },
      { value: 'defense', color: 'bg-primary' },
      { value: 'speed', color: 'bg-success' }
    ];

    const statSearchResult = defaultList.find(i => i.value.toLocaleLowerCase().includes(statTitle.toLocaleLowerCase()));

    if (statSearchResult) {
      return ['progress-bar', statSearchResult.color, 'percentageTextColor'];
    } else {
      return ['progress-bar', 'bg-secondary'];
    }
  }


}
