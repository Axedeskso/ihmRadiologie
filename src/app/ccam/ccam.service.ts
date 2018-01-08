import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ccam } from './ccam';

@Injectable()
export class CcamService {

  url = "http://localhost:8084/radiologie/webresources/ccam";

  constructor(private http: Http) { }

  getCCams() : Promise<ccam[]> {
    return this.http.get(this.url).toPromise().then(res => res.json()));

  }
}
