import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Patient } from './patient';
import { AdmissionService } from './admission.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdmissionComponent {

  patients : Patient[];

  constructor(private admissionService : AdmissionService) { }

  ngOnInit() : void {
    this.admissionService.getPatients().then(res => this.patients = res);
  }

}
