import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {JuegoPiedraPapelTijera} from "../../clases/juego-piedra-papel-tijera";

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {

  @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();
  nuevoPpt:JuegoPiedraPapelTijera;
  seleccionUsuario:string;
  seleccionPc:string;
  puntosUsuario=0;
  puntosPc=0;
  mensaje:string=" ";

  constructor() {
    this.nuevoPpt=new JuegoPiedraPapelTijera()
   }

   public Jugar(seleccion)
   {
     if(!this.nuevoPpt.verificar())
     {
      this.seleccionUsuario=seleccion;
      this.nuevoPpt.Jugar(seleccion);
      this.puntosPc=this.nuevoPpt.puntosPc;
      this.puntosUsuario=this.nuevoPpt.puntosJugador;
      this.seleccionPc=this.nuevoPpt.seleccionPc;
      if(this.nuevoPpt.verificar())
      {
        this.TerminarJuego();
      }
     }else{
       this.mensaje="Juego Terminado. Volve a empezar para seguir jugando."
     }
      
   }
 
   public NuevoJuego()
   {
     this.nuevoPpt= new JuegoPiedraPapelTijera();
     this.puntosPc=this.nuevoPpt.puntosPc;
     this.puntosUsuario=this.nuevoPpt.puntosJugador;
     this.mensaje=" ";
     this.seleccionUsuario="";
     this.seleccionPc="";
   }
   private TerminarJuego(){
    this.enviarJuego.emit(this.nuevoPpt);
    if(this.nuevoPpt.gano)
    {
      this.mensaje="¡¡¡Ganaste!!!";
    }
    else{
      this.mensaje="¡¡Perdiste!! Seguí participando...";
    }
   }


  ngOnInit() {
  }



}
