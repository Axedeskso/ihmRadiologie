import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Patient } from './patient';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AdmissionService {

  url = "http://localhost:8084/radiologie/webresources/patients";

  constructor(private http: Http) { }

  getPatients() : Promise<Patient[]> {
    return this.http.get(this.url).toPromise().then(res => res.json()).catch(err => err);
  }

}
