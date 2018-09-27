//export class JuegoAnagrama {
//}
//==========================
import { Juego } from '../clases/juego'


export class JuegoAnagrama extends Juego{
    palabra:string;
    respuesta:string;
    desordenada: string;
    gano:boolean;
    pista:string;
    
    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Anagrama",gano,jugador);
    }

    verificar(){
        
        if (this.respuesta == undefined) {this.respuesta="";}
        if(this.palabra == this.respuesta.toUpperCase())
        {
            this.gano = true;
        }
        if(this.gano)
           return true;
        else
            return false;
    };

    

}

