import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';
import { JuegoAnagrama  } from '../../clases/juego-anagrama';
import { JugadaService } from '../../servicios/jugada.service';
import { JwtHelperService  } from '@auth0/angular-jwt';


@Component({
  selector: 'app-anagrama-mas-listado',
  templateUrl: './anagrama-mas-listado.component.html',
  styleUrls: ['./anagrama-mas-listado.component.css']
})
export class AnagramaMasListadoComponent implements OnInit {

  constructor(private _registro: JugadaService) { }

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



      var juegoArray = new JuegoAnagrama(
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
