import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Acte } from './acte';
import { ActivatedRoute } from '@angular/router';
import { ActeService } from './acte.service';

@Component({
  selector: 'app-acte',
  templateUrl: './acte.component.html',
  styleUrls: ['./acte.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ActeComponent implements OnInit {

  actes : Acte[];
  nb : number;
  
  constructor(private acteService : ActeService) { }

  ngOnInit() {
    this.acteService.getActes().subscribe(data => {
      console.log(data);
      this.actes = data;
      this.nb = data.length;
      }, err => {
        console.log(err);
      });
  }

}
