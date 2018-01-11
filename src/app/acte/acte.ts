export class Acte {
  Code: string;
  Date: string;
  Heure: string;
  Ccam: string;


  constructor(code:string,date:string,heure:string, ccam:string){
    this.Code = code;
    this.Date = date;
    this.Heure = heure;
    this.Ccam = ccam;
  }

}
