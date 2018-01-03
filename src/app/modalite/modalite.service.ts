import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { modalite } from './modalite';

@Injectable()
export class ModaliteService {

  url = "http://localhost:8084/radiologie/webresources/modalites";

  constructor() { }

  getModalites() : Promise<modalite[]> {
    //return this.http.get(this.url).toPromise().then(res => res.json()));
    
    return Promise.resolve([
      {Nom:'CR',Pacs:'ISIS',Lien:'/resources/isis/'},
      {Nom:'RF',Pacs:'ISIS',Lien:'/resources/isis/'},
      {Nom:'IO',Pacs:'ISIS',Lien:'/resources/isis/'},
      {Nom:'CT',Pacs:'ISIS',Lien:'/resources/isis/'},
      {Nom:'PX',Pacs:'ISIS',Lien:'/resources/isis/'}
    ]);
  }

}
