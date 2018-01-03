import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Patient } from './patient';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AdmissionService {

  url = "http://localhost:8084/radiologie/webresources/patients";

  constructor() { }

  getPatients() : Promise<Patient[]> {
    //return this.http.get(this.url).toPromise().then(res => res.json()));
    
    return Promise.resolve([
      {Ipp:31031993, Nom:'Fromentin', Prenom: 'Axel'},
      {Ipp:23111992, Nom:'Guillemant', Prenom: 'Chloe'}
    ]
    );
  }

}
