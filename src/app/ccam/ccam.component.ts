import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ccam } from './ccam';
import { CcamService } from './ccam.service';

@Component({
  selector: 'app-ccam',
  templateUrl: './ccam.component.html',
  styleUrls: ['./ccam.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CcamComponent implements OnInit {

  ccams : ccam[];

  constructor(private ccamService : CcamService) { }

  ngOnInit() : void { 
    this.ccamService.getCCams().then(res => this.ccams = res);
  }

}
