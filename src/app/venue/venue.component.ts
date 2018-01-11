import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Venue } from './venue';
import { VenueService } from './venue.service';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VenueComponent implements OnInit {

  venues : Venue[];
  nb : number;

  constructor(private venueService : VenueService) { }

  ngOnInit() : void {

      this.venueService.getVenues().subscribe(data => {
        console.log(data);
        this.venues = data;
        this.nb = data.length;
        }, err => {
          console.log(err);
        });
  }
}