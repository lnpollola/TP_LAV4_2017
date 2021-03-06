
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { Tateti } from '../../clases/tateti';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {

  @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();
  miJuego:Tateti;
  valorUsuario:string;
  turno:string;
  ganador:string;
  mensaje: string=" ";
  

  constructor() {
    this.miJuego=new Tateti("jug");
   let r= Math.round(Math.random()); 

   if(r==0)
   {
     this.turno="pc";

    this.JugadaPc();   

   }
   else{
     this.turno="jugador";
   }

    
   }

  ngOnInit() {
    
   
    
  }

  MarcarCasilla(x,y, valor){

   if(this.miJuego.MarcarCasilla(x,y,valor))
   {
    this.turno="pc";
   }
    
      if(this.miJuego.gano && this.ganador != "pc")
      {
        this.ganador="jugador";
        this.mensaje="¡¡Ganaste!!";
        this.enviarJuego.emit(this.miJuego);
      }

      if(!this.miJuego.gano)
      {
        this.JugadaPc();
      }
      
    
  
  }

  JugadaPc(){
    do{
      let x= Math.round(Math.random() * (2 - 0)) + 0;
      let y= Math.round(Math.random() * (2 - 0)) + 0;
     
      if(this.miJuego.HayLugar() && !this.miJuego.gano)
      {
        if(this.miJuego.MarcarCasilla(x,y,this.turno))
        {
          this.turno="jugador";
          
        }

      }

      if(this.miJuego.gano){
        this.ganador="pc";
        this.turno="jugador";
        this.mensaje="¡¡Perdiste!!";
        this.enviarJuego.emit(this.miJuego);

      }

     //console.log(x,y, " no entro en el if, turno: ",this.turno);
    }while(this.turno=="pc");

    

  }

  ReiniciarJuego()
  {
    this.miJuego=new Tateti("jug");
    this.mensaje = "";
    let r= Math.round(Math.random()); 
 
    if(r==0)
    {
      this.turno="pc";
 
     this.JugadaPc();   
 
    }
    else{
      this.turno="jugador";
    }

  }




}