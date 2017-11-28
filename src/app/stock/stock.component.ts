import { Component, OnInit } from '@angular/core';
import { medicament } from '../medicament';

@Component({
  selector: 'stockCmpt',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit {

  medicaments : Array<medicament> = [
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
    {
      Nom:'Lormétazépam',
      Quantite:0,
      Cout:1.45,
      Frigo:false,
      Securise:true
    }
  ]



  constructor() { }

  ngOnInit() {
    // $(document).ready(function(){
    //   $('.collapsible').collapsible();
    // });
  }

}
