export class Ccam {
  Id : number;
  Code: string;
  Libelle: string;
  Cout: number;

  constructor(code:string,lib:string,cout:number){
    this.Code = code;
    this.Libelle = lib;
    this.Cout = cout;
  }

}
