import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { $ } from 'protractor';
import { patient } from './patient';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdmissionComponent implements OnInit {

  patients : Array<patient> = [
    {
      Ipp: 31031993,
      Nom: 'FROMENTIN',
      Prenom: 'Axel'
    },
    {
      Nom:'GARCIA GOZALVEZ',
      Prenom: 'Pau',
      Ipp: 4567894
    },
    {
      Nom:'SINGER',
      Prenom: 'Nicolas',
      Ipp: 87756345
    },
    {
      Nom:'PINGAUD',
      Prenom: 'Hervé',
      Ipp: 456789123
    },

  ]

  constructor() { }

  ngOnInit() { 
        
   }

}
