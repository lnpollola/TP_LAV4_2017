import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../../servicios/jugadores.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {
  public data;
  listado:any;
  
  miJugadoresServicio:JugadoresService
  
    constructor(serviceJugadores:JugadoresService) {
      this.miJugadoresServicio = serviceJugadores;
      
    }
    
  ngOnInit() {
    // this.TraerTodos();
  }

  TraerTodos()
  {
      this.miJugadoresServicio.ServiceTraerTodosLosJugadores().subscribe(data => {   
        this.listado = JSON.parse(data._body);
      //  console.log(this.listado);
      }
      )
  }

  TraerGanadores()
  {
    this.miJugadoresServicio.ServiceTraerTodosLosJugadores()
    .subscribe(
        data => 
        {   
          this.listado = JSON.parse(data._body);
          this.listado =this.listado
                              .filter(data => data.id_usuario === 1 ); 
          // console.log(this.listado);
        }
    )

   }
    

  // TraerPerdedores()
  // {
  //   this.miJugadoresServicio.ServiceTraerGanadores().subscribe(data => {   
  //     this.listado = JSON.parse(data._body);
  //     console.log(this.listado);})
  //   }
}

