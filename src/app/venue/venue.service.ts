import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venue } from './venue';
import { Params } from '@angular/router/src/shared';
import { Patient } from '../admission/patient';

@Injectable()
export class VenueService {

  url = "http://localhost:8084/radiologie/webresources/venues";
  url1 = "http://localhost:8084/radiologie/webresources/patients/";
  url12 = "/venues";

  constructor(private http: HttpClient) { }

  getVenues() {
    return this.http.get<Venue[]>(this.url);
  }

  getPatientVenues(param: Params) {
    return this.http.get<Venue[]>(this.url1+param.id+this.url12);
  }

  getVenue(iep: number) {
    return this.http.get<Venue>(this.url+"/"+iep);
  }
}
