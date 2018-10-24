import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';
import { JwtHelperService  } from '@auth0/angular-jwt';
import { JugadaService } from '../../servicios/jugada.service';
import { JuegoAgilidad } from '../../clases/juego-agilidad';

@Component({
  selector: 'app-agilidad-mas-listado',
  templateUrl: './agilidad-mas-listado.component.html',
  styleUrls: ['./agilidad-mas-listado.component.css']
})
export class AgilidadMasListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
  public holaVar = "hola";
  constructor(private _registro: JugadaService) { this.listadoParaCompartir = new Array<any>()}

  ngOnInit() {
  }

  tomarJuegoTerminado(juego: any)
  {
    // console.log("Estoy en agilidad mas listado", juego, juego.jugador , juego.nombre );
    var intGano;
    if(juego.gano)
    {
      intGano = 1;
    }else{
      intGano = 0;
    }

    const helper = new JwtHelperService();
      var token = window.localStorage.getItem("token");
      const decodedToken = helper.decodeToken(token);
      var jugador = decodedToken.data.Usuario;

      var juegoArray = new JuegoAgilidad(
                              juego.nombre,
                              intGano,
                              jugador
                                );


      console.log(decodedToken);
      console.log(decodedToken.data.Usuario);
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
