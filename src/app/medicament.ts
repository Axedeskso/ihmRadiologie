export class medicament {
  Nom: string;
  Quantite: number;
  Cout: number;
  Frigo: boolean;
  Securise: boolean;

  constructor(nom:string,quantite:number,cout:number,frigo:boolean,securise:boolean){
    this.Nom = nom;
    this.Quantite = quantite;
    this.Cout = cout;
    this.Frigo = frigo;
    this.Securise = securise;
  }

}
