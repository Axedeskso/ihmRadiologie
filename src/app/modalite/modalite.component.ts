import { Component, OnInit } from '@angular/core';
import { modalite } from './modalite';
import { ModaliteService } from './modalite.service';

@Component({
  selector: 'modaliteCmpt',
  templateUrl: './modalite.component.html',
  styleUrls: ['./modalite.component.css'],
})
export class ModaliteComponent implements OnInit {

  modalites : modalite[];

  constructor(private modaliteService : ModaliteService) { }

  ngOnInit() : void { 
    this.modaliteService.getModalites().then(res => this.modalites = res);
  }

}
