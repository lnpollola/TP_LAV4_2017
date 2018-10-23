import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';
import { JuegoAdivina  } from '../../clases/juego-adivina';
import { JugadaService } from '../../servicios/jugada.service';

@Component({
  selector: 'app-adivina-mas-listado',
  templateUrl: './adivina-mas-listado.component.html',
  styleUrls: ['./adivina-mas-listado.component.css']
})
export class AdivinaMasListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
  constructor( private _registro: JugadaService ) { this.listadoParaCompartir = new Array<any>()
                
  
  }


  ngOnInit() {
  }

  tomarJuegoTerminado(juego: any)
  {
    console.log("Estoy en adivina mas listado", juego, juego.jugador , juego.nombre );
    var intGano;
    if(juego.gano)
    {
      intGano = 1;
    }else{
      intGano = 0;
    }

      var juegoArray = new JuegoAdivina(
                              juego.nombre,
                              intGano,
                              juego.jugador
                              
                              
                                );
      // const decodedToken = helper.decodeToken(this.datosToken.token);
      // const expirationDate = helper.getTokenExpirationDate(this.datosToken.token);
      // const isExpired = helper.isTokenExpired(this.datosToken.token);
  
      // console.log(decodedToken);
      // console.log(expirationDate);
      // console.log(isExpired);

  
      this._registro.ServiceAltaJugada(juegoArray)
      .subscribe(data =>{
        
        // console.log(resultado);
        // let resultado = JSON.parse(data._body);
  
        console.log(data._body);
        // if(resultado)
        // {
        //   alert("Juego registrado");
        // }
        //   else{
        //     alert("Intentelo nuevamenete");
        //   }
      
      });
    
  


  }

}
