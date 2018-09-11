import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';



@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
  public holaVar = "hola";
   miServicioJuego:JuegoServiceService

  constructor(servicioJuego:JuegoServiceService) {
    this.miServicioJuego = servicioJuego;
    this.holaVar = "sarasa";
  }
  
  ngOnInit() {
    console.log(this.holaVar);
  }

  llamaService(){
    console.log("llamaService");
    this.listadoParaCompartir= this.miServicioJuego.listar();
  }

  llamaServicePromesa(){
    console.log("llamaServicePromesa");
    this.miServicioJuego.listarPromesa().then((listado) => {
        this.listadoParaCompartir = listado;
    });
  }
}
