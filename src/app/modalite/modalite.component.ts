import { Component, OnInit } from '@angular/core';
import { modalite } from './modalite';

@Component({
  selector: 'modaliteCmpt',
  templateUrl: './modalite.component.html',
  styleUrls: ['./modalite.component.css'],
})
export class ModaliteComponent implements OnInit {

  modalites : Array<modalite> = [
    {
      Nom:'CR',
      Pacs:'ISIS',
      Lien:'/resources/isis/'
    },
    {
      Nom:'RF',
      Pacs:'ISIS',
      Lien:'/resources/isis/'
    },
    {
      Nom:'IO',
      Pacs:'ISIS',
      Lien:'/resources/isis/'
    },
    {
      Nom:'CT',
      Pacs:'ISIS',
      Lien:'/resources/isis/'
    },
    {
      Nom:'PX',
      Pacs:'ISIS',
      Lien:'/resources/isis/'
    }
  ]

  constructor() { }

  ngOnInit() {
    
  }

}
