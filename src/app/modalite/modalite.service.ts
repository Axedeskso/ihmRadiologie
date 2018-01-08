import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { modalite } from './modalite';

@Injectable()
export class ModaliteService {

  url = "http://localhost:8084/radiologie/webresources/modalites";

  constructor(private http: Http) { }

  getModalites() : Promise<modalite[]> {
    return this.http.get(this.url).toPromise().then(res => res.json());

  }

}
