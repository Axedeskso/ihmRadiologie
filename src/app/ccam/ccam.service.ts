import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ccam } from './ccam';

@Injectable()
export class CcamService {

  url = "http://localhost:8084/radiologie/webresources/ccam";

  constructor() { }

  getCCams() : Promise<ccam[]> {
    //return this.http.get(this.url).toPromise().then(res => res.json()));
    
    return Promise.resolve([
      {Code: 'ZBQK002',Libelle: 'Radiologie du thorax',Cout: 10.0},
      {Code: 'ZCQK002',Libelle: 'Radiologie de l\'abdomen sans préparation',Cout: 12.5},
      {Code: 'EAQH002',Libelle: 'Scannographie des vaisseaux encéphaliques',Cout: 12.5}
    ]);
  }
}
