import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { VenueService } from '../venue/venue.service';
import { AdmissionService } from '../admission/admission.service';
import { ActeService } from '../acte/acte.service';
import { ModaliteService } from '../modalite/modalite.service';
import { CcamService } from '../ccam/ccam.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  constructor(private admissionService: AdmissionService,
    private venueService: VenueService, 
    private acteService: ActeService, 
    private modaliteService : ModaliteService,
    private ccamService : CcamService
  ) { }

  patients: number; venues: number;
  actes: number; modalites: number;
  ccams: number; images : number;

  ngOnInit() {

    this.admissionService.getPatients().subscribe(data => {
      console.log(data);
      this.patients = data.length;
    }, err => {
      console.log(err);
    });

    this.venueService.getVenues().subscribe(data => {
      console.log(data);
      this.venues = data.length;
    }, err => {
      console.log(err);
    });

    this.acteService.getActes().subscribe(data => {
      console.log(data);
      this.actes = data.length;
    }, err => {
      console.log(err);
    });

    this.modaliteService.getModalites().subscribe(data => {
      console.log(data);
      this.modalites = data.length;
    }, err => {
      console.log(err);
    });

    this.ccamService.getCCams().subscribe(data => {
      console.log(data);
      this.ccams = data.length;
    }, err => {
      console.log(err);
    });
  }

}
