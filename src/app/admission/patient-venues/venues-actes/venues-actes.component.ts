import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ActeService } from '../../../acte/acte.service';
import { VenueService } from '../../../venue/venue.service';
import { AdmissionService } from '../../admission.service';
import { Acte } from '../../../acte/acte';
import { Patient } from '../../patient';
import { Venue } from '../../../venue/venue';

@Component({
  selector: 'app-venues-actes',
  templateUrl: './venues-actes.component.html',
  styleUrls: ['./venues-actes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VenuesActesComponent implements OnInit {

  actes : Acte[];
  patient : Patient;
  venue : Venue;
  nb : number;

  constructor(private admissionService :AdmissionService, private venueService : VenueService, private acteService: ActeService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      
      this.acteService.getVenuesActes(params, params).subscribe(data => {
        console.log(data);
        this.actes = data;
        this.nb = data.length;
        }, err => {
          console.log(err);
        });
        this.venueService.getVenue(params.iep).subscribe(dataV => {
          console.log(dataV);
          this.venue = dataV;
          }, err => {
            console.log(err);
          });
        this.admissionService.getPatient(params.id).subscribe(dataP => {
          console.log(dataP);
          this.patient = dataP;
          }, err => {
            console.log(err);
          });
    })

  }

}
