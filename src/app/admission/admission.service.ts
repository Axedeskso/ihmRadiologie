import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Patient } from './patient';

@Injectable()
export class AdmissionService {

  url = "http://localhost:8084/radiologie/webresources/patients";

  constructor(private http: HttpClient) { }

  getPatients() {
    return this.http.get<Patient[]>(this.url);
  }

  getPatient(ipp: number) {
    return this.http.get<Patient>(this.url+"/"+ipp);
  }

}
