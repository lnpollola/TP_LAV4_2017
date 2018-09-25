
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { Tateti } from '../../clases/tateti';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {

  miJuego:Tateti;
  valorUsuario:string;
  turno:string;
  

  constructor() {
    this.miJuego=new Tateti("jug");
   let r= Math.round(Math.random()); 
   if(r==0){
     this.turno="pc";
this.JugadaPc();   
   }else{
     this.turno="jugador";
   }
   console.log(r);
    
   }

  ngOnInit() {
    
   
    
  }

  MarcarCasilla(x,y, valor){

    if(this.miJuego.MarcarCasilla(x,y,valor))
    {
      if(this.turno=="jugador"){
        this.turno="pc";
      }
      else{
        this.turno="jugador";
      }
      this.JugadaPc();
      
    }
    
    console.log(this.miJuego.tablero[x][y]);
  }

  JugadaPc(){
    do{
      let x= Math.round(Math.random() * (2 - 0)) + 0;
      let y= Math.round(Math.random() * (2 - 0)) + 0;
     
      if(this.miJuego.HayLugar())
      {
        if(this.miJuego.MarcarCasilla(x,y,this.turno))
        {
          this.turno="jugador";
          console.log(x,y," entro en el if, turno: ",this.turno);
        }

      }
      if(this.miJuego.gano){
        this.turno="jugador";
      }

     //console.log(x,y, " no entro en el if, turno: ",this.turno);
    }while(this.turno=="pc");

  }




}
