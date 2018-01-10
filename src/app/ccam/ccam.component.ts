import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Ccam } from './ccam';
import { CcamService } from './ccam.service';

@Component({
  selector: 'app-ccam',
  templateUrl: './ccam.component.html',
  styleUrls: ['./ccam.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CcamComponent implements OnInit {

  ccams : Ccam[];

  constructor(private ccamService : CcamService) { }

  ngOnInit() : void { 
    this.ccamService.getCCams().subscribe(data => {
      console.log(data);
      this.ccams = data;
      }, err => {
        console.log(err);
      });
  }
  
}
