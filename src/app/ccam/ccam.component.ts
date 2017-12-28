import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ccam } from './ccam';

@Component({
  selector: 'app-ccam',
  templateUrl: './ccam.component.html',
  styleUrls: ['./ccam.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CcamComponent implements OnInit {

  ccams : Array<ccam> = [
    {
      Code: 'ZBQK002',
  Libelle: 'Radiologie du thorax',
  Cout: 10.0
    },
    {
      Code: 'ZCQK002',
  Libelle: 'Radiologie de l\'abdomen sans préparation',
  Cout: 12.5
    },
    {
      Code: 'EAQH002',
  Libelle: 'Scannographie des vaisseaux encéphaliques',
  Cout: 12.5
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
