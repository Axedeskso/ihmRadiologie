import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Modalite } from './modalite';

@Injectable()
export class ModaliteService {

  url = "http://localhost:8084/radiologie/webresources/modalites";

  constructor(private http: HttpClient) { }

  getModalites() {
    return this.http.get<Modalite[]>(this.url);
  }

  addModalite(value : string) {
    return this.http.post(this.url, value).subscribe();
  }

}
