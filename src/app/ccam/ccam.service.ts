import { Injectable } from '@angular/core';
import { Ccam } from './ccam';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class CcamService {

  url = "http://localhost:8084/radiologie/webresources/ccam";
  
  constructor(private http: HttpClient) { }

  getCCams() {
    return this.http.get<Ccam[]>(this.url);
  }
  
  addCcam(value : string) {
    console.log('Ajout effectué')
    return this.http.post(this.url, value).subscribe();
  }

}
