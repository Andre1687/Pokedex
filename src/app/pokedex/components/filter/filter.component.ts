import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EDEADLK } from 'constants';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  textFilter = '';

  checkoutForm = this.formBuilder.group({
    textFilter: ''
  });

  constructor(
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.formBuilder.
  }


  buscador() {
    console.log('se ejecuto');
  }





}








///

//Ejercisicio classes

////

// class Humano {

//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

// }


// class Politico extends Humano {

//   pelo: boolean;
//   mentirosos: boolean;
//   viejo: boolean;
//   altura: number = 10;

//   constructor(name: string, age: number, pelo: boolean, mentiroso: boolean, viejo: boolean) {
//     super(name, age);
//     this.pelo = pelo;
//     this.mentirosos = mentiroso;
//     this.viejo = viejo;
//   }

// }

// const humano = new Humano('alfred', 100);
// humano.age //100
// humano.name //alfred

// const humano2 = new Humano('steve', 50);
// humano2.age //50
// humano2.name //steve

// const politico = new Politico('jef', 77, false, true, true);
// politico.pelo //false
