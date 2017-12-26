import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { venue } from './venue';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VenueComponent implements OnInit {

  venues : Array<venue> = [
    {
      Iep: 123456789,
      Dd:'01/01/2000',
      Df:'02/01/2000'
    },
    {
      Iep: 784951623,
      Dd:'31/01/2000',
      Df:'02/02/2000'
    },
    {
      Iep: 362951847,
      Dd:'01/01/2014',
      Df:'04/06/2015'
    },
    {
      Iep: 124357689,
      Dd:'12/09/2017',
      Df:'02/09/2018'
    }

  ]

  constructor() { }

  ngOnInit() {
  }

}
