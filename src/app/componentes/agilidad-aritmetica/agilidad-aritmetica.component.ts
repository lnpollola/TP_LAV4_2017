import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {

   @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;
  private subscription: Subscription;

  ngOnInit() {

  }

  constructor() {
    //  this.ocultarVerificar=true;
     this.Tiempo=15; 
    this.NuevoJuego();
    console.info(this.nuevoJuego );  
    console.info("Inicio agilidad");  
  }

  NuevoJuego() {
   this.ocultarVerificar=false;
   this.repetidor = setInterval(()=>{ 
      
      this.Tiempo--;
      console.log("Contador", this.Tiempo);
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar=true;
        this.Tiempo=15;
      }
      }, 900);
      this.nuevoJuego = new JuegoAgilidad();
      console.info(this.nuevoJuego );  
      console.info("Nuevos Valores"); 

  }

  verificar()
  {
    // 
    // clearInterval(this.repetidor);
    this.nuevoJuego.verificar();
    if (this.nuevoJuego.verificar()) 
    {
      this.ocultarVerificar=true;
    }

  }  

}
