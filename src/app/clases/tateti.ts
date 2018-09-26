import { Juego } from '../clases/juego';

import { CasillaTateti } from '../clases/casilla-tateti';

export class Tateti extends Juego {

public tablero=[];  

constructor(jugador:string){
    super("tateti",false,jugador);

    for(let i:number=0; i< 3 ;i++)
    {
         this.tablero[i]=[];

        for(let j:number=0; j< 3; j++ )
        {
            

           this.tablero[i][j]=new CasillaTateti(i,j);
           this.tablero[i][j].valor="";
           
            
        } 
    }
   
  
}

public MarcarCasilla(x,y,valor)
{
    if(this.HayLugar() && !this.gano)
    {
    
        if( this.tablero[x][y].MarcarCasilla(valor))
        { 
  
          if(this.verificar())
          {
              this.TerminarJuego();
              return false;
              
          }
          return true;
      }

    }

}

    public verificar():boolean{
       
                if( this.tablero[0][0].valor != "" && this.tablero[1][1].valor != "" && this.tablero[2][2].valor != "" &&
                    this.tablero[0][0].valor == this.tablero[1][1].valor && this.tablero[1][1].valor == this.tablero[2][2].valor)
                {
                    console.log("tatei");
                   
                    this.gano=true;
                    return true;
                }
                if(this.tablero[0][2].valor == this.tablero[1][1].valor && this.tablero[1][1].valor == this.tablero[2][0].valor &&
                    this.tablero[0][2].valor != "" && this.tablero[1][1].valor != "" && this.tablero[2][0].valor != "")
                {
                    console.log("tatei");
                    this.gano=true;
                    return true;
                }
//////////////////////////////////////HORIZONTALES/////////////////////////////////////////////////////////
                if(this.tablero[0][0].valor != "" && this.tablero[0][1].valor != "" && this.tablero[0][2].valor != "" &&
                    this.tablero[0][0].valor == this.tablero[0][1].valor && this.tablero[0][1].valor == this.tablero[0][2].valor)
                {
                    console.log("tatei");
                    this.gano=true;
                    return true;
                }

                if(this.tablero[1][0].valor != "" && this.tablero[1][1].valor != "" && this.tablero[1][2].valor != "" &&
                    this.tablero[1][0].valor == this.tablero[1][1].valor && this.tablero[1][1].valor == this.tablero[1][2].valor)
                {
                    console.log("tatei");
                    this.gano=true;
                    return true;
                }
                if(this.tablero[2][0].valor != "" && this.tablero[2][1].valor != "" && this.tablero[2][2].valor != "" &&
                    this.tablero[2][0].valor == this.tablero[2][1].valor && this.tablero[2][1].valor == this.tablero[2][2].valor)
                {
                    console.log("tatei");
                    this.gano=true;
                    return true;
                }
 ////////////////////////////////////////////VERTICALES///////////////////////////////////////////////////
                if(this.tablero[0][0].valor != "" && this.tablero[1][0].valor != "" && this.tablero[2][0].valor != "" &&
                    this.tablero[0][0].valor == this.tablero[1][0].valor && this.tablero[1][0].valor == this.tablero[2][0].valor)
                {
                    console.log("tatei");
                    this.gano=true;
                    return true;
                }
                if(this.tablero[0][1].valor != "" && this.tablero[1][1].valor != "" && this.tablero[2][1].valor != "" &&
                    this.tablero[0][1].valor == this.tablero[1][1].valor && this.tablero[1][1].valor == this.tablero[2][1].valor)
                {
                    console.log("tatei");
                    this.gano=true;
                    return true;
                }
                if(this.tablero[0][2].valor != "" && this.tablero[1][2].valor != "" && this.tablero[2][2].valor != "" &&
                    this.tablero[0][2].valor == this.tablero[1][2].valor && this.tablero[1][2].valor == this.tablero[2][2].valor)
                {
                    console.log("tatei");
                    this.gano=true;
                    return true;
                }

        
     return  false;

    }

    TerminarJuego(){
        this.gano=true;
        
    }

    HayLugar()
    {
        for(let i=0; i<3; i++)
        {
            for(let j=0; j<3; j++)
            {
                if(!this.tablero[i][j].marcada){
                    return true;
                }
            }
        }
        return false;
    }

}