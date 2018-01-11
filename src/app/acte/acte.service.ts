import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Acte } from './acte';
import { Params } from '@angular/router';

@Injectable()
export class ActeService {

  url = "http://localhost:8084/radiologie/webresources/actes";
  url1 = "http://localhost:8084/radiologie/webresources/patients/";
  url12 = "/venues/";
  url13 = "/actes/";

  constructor(private http: HttpClient) { }

  getActes() {
    return this.http.get<Acte[]>(this.url);
  }

  getVenuesActes(param: Params,param2: Params) {
    return this.http.get<Acte[]>(this.url1+param.id+this.url12+param.iep+this.url13);
  }

}
