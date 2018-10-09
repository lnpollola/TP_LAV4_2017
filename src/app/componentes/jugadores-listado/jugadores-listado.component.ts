import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../../servicios/jugadores.service';
import { stringify } from 'querystring';


export interface PeriodicElement {
  id: string;
  nombre: number;
  usuario: number;
  password: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];


@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {
  public data;
  listado:any;
  
  displayedColumns: string[] = ['id', 'nombre', 'usuario', 'password'];

  miJugadoresServicio:JugadoresService
  
    constructor(serviceJugadores:JugadoresService) {
      this.miJugadoresServicio = serviceJugadores;
      
    }

  ngOnInit() {
    this.TraerTodos();
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

