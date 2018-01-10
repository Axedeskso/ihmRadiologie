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

  constructor(private venueService : VenueService) { }

  ngOnInit() : void {
    this.venueService.getVenues().subscribe(data => {
      console.log(data);
      this.venues = data;
      }, err => {
        console.log(err);
      });
  }

}
