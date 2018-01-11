import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CcamService } from '../../ccam/ccam.service';
import { Ccam } from '../../ccam/ccam';

@Component({
  selector: 'app-add-acte',
  templateUrl: './add-acte.component.html',
  styleUrls: ['./add-acte.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddActeComponent implements OnInit {

  ccams : Ccam[];

  constructor(private ccamService : CcamService) { }

  ngOnInit() {
    this.ccamService.getCCams().subscribe(data => {
      console.log(data);
      this.ccams = data;
      }, err => {
        console.log(err);
      });
  }

}
