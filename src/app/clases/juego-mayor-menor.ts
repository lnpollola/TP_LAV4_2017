import { Juego } from '../clases/juego'

export class JuegoMayorMenor extends  Juego {

    numeroSecreto: number;
    numeroIngresado:number;

    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Mayor/Menor",gano,jugador);
      
      }
    public verificar() {
        if (this.numeroIngresado == this.numeroSecreto) {
          this.gano = true;
        }
        if (this.gano) {
          return true;
        } else {
          return false;
        }
     }
  
     
}
