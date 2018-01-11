import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Modalite } from './modalite';
import { ModaliteService } from './modalite.service';


@Component({
  selector: 'modaliteCmpt',
  templateUrl: './modalite.component.html',
  styleUrls: ['./modalite.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModaliteComponent implements OnInit {

  modalites : Modalite[];
  nb : number;
  
  constructor(private modaliteService : ModaliteService) { }

  ngOnInit() : void { 

    this.modaliteService.getModalites().subscribe(data => {
      console.log(data);
      this.modalites = data;
      this.nb = data.length;
      }, err => {
        console.log(err);
      });
  }

}
