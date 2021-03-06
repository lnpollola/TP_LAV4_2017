import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';
import { Tateti  } from '../../clases/tateti';
import { JugadaService } from '../../servicios/jugada.service';
import { JwtHelperService  } from '@auth0/angular-jwt';



@Component({
  selector: 'app-tateti-mas-listado',
  templateUrl: './tateti-mas-listado.component.html',
  styleUrls: ['./tateti-mas-listado.component.css']
})
export class TatetiMasListadoComponent implements OnInit {

  public listadoParaCompartir: Array<any>;
  constructor( private _registro: JugadaService ) { this.listadoParaCompartir = new Array<any>()
  }

  ngOnInit() {
  }

  tomarJuegoTerminado(juego: any)
  {
    // console.log("Estoy en adivina mas listado", juego, juego.jugador , juego.nombre );
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



      var juegoArray = new Tateti(
                              juego.nombre,
                              intGano,
                              jugador
                                );

  
      this._registro.ServiceAltaJugada(juegoArray)
      .subscribe(data =>{
       data
      });
    
  


  }


}
