import { Injectable } from '@angular/core';
import { Headers, Response } from '@angular/http';
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

  getCCams() : Observable<any> {
    return this.http.get<Ccam[]>(this.url)
    .do(data =>console.log('All : ' + JSON.stringify(data)));
  }

  //create(ccam : Ccam): Observable<Ccam> {
    //return this.http.post(this.url, ccam).map(this.extractObject);
  //}

  //update(ccam : Ccam): Observable<Ccam> {
    //return this.http.put(`${this.url}/${ccam.id}`, ccam).map(this.extractObject);
  //}

  delete(ccam : Ccam): Observable<Ccam> {
    console.log('DELETE'+ this.url + "-" + ccam.id )
    return this.http.delete(this.url+"/"+ccam.id).map(result => ccam);
  }

  private extractObject(res: Response): Object {
    const data: any = res.json();
    return data || {};
  }
  
}
