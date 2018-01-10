import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venue } from './venue';

@Injectable()
export class VenueService {

  url = "http://localhost:8084/radiologie/webresources/venues";

  constructor(private http: HttpClient) { }

  getVenues() {
    return this.http.get<Venue[]>(this.url);
  }

}
