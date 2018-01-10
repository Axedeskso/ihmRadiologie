export class modalite {
  Id: number;
  Nom: string;
  Pacs: string;
  Lien: string;

  constructor(nom:string,pacs:string,link:string){
    this.Nom = nom;
    this.Pacs = pacs;
    this.Lien = link;
  }

}
