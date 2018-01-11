import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Venue } from '../../venue/venue';
import { Params, ActivatedRoute } from '@angular/router';
import { VenueService } from '../../venue/venue.service';
import { Patient } from '../patient';
import { AdmissionService } from '../admission.service';

@Component({
  selector: 'app-patient-venues',
  templateUrl: './patient-venues.component.html',
  styleUrls: ['./patient-venues.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PatientVenuesComponent implements OnInit {

  //patient : Patient;
  ipp : number;
  nom : string;
  prenom : string;
  venues : Venue[];
  nb: number;

  constructor(private admissionService :AdmissionService, private venueService : VenueService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.venueService.getPatientVenues(params).subscribe(data => {
        console.log(data);
        this.venues = data;
        this.nb = data.length;
        }, err => {
          console.log(err);
        });
        this.admissionService.getPatient(params.id).subscribe(dataP => {
          this.ipp = dataP.ipp;
          this.nom = dataP.nom;
          this.prenom = dataP.prenom;
          }, err => {
            console.log(err);
          });
    })

  }

}
