import { Component, OnInit } from '@angular/core';
import { modalite } from './modalite';

@Component({
  selector: 'modaliteCmpt',
  templateUrl: './modalite.component.html',
  styleUrls: ['./modalite.component.css'],
})
export class ModaliteComponent implements OnInit {

  medicaments : Array<modalite> = [
    {
      Nom:'Nicardipine',
      Quantite:11,
      Cout:0.15,
      Frigo:false,
      Securise:false
    },
    {
      Nom:'Paracétamol',
      Quantite:100,
      Cout:0.10,
      Frigo:false,
      Securise:false
    },
    {
      Nom:'Valsartan',
      Quantite:50,
      Cout:0.15,
      Frigo:false,
      Securise:false
    },
    {
      Nom:'Diazépam',
      Quantite:0,
      Cout:0.82,
      Frigo:false,
      Securise:true
    },

  ]

  constructor() { }

  ngOnInit() {
    
  }

}
