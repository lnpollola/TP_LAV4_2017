import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  eleccion : string;
  botonNuevoJuego : boolean;
  divEleccionUsuario : boolean;
  decisionOrdenador : string;
  resultado: string;

  constructor() {
    this.botonNuevoJuego = true;
    this.divEleccionUsuario = false;

   }

  ngOnInit() {
  
  }

  Seleccion (eleccion){ 
    this.divEleccionUsuario = false;
    
    switch(eleccion){
        case 'piedra':
          this.eleccion = eleccion;
          break;

        case 'papel':
          this.eleccion = eleccion;
          break;

        case 'tijera':
          this.eleccion = eleccion;
          break;
    }
    
    this.Definicion();
  }


  DecisionOrdenador() {
    var numero =  Math.floor((Math.random()*3)+1); 
    
    var respuesta;
    
      if (numero == 1) {
        respuesta = "piedra";
      } else if (numero == 2) {
        respuesta = "papel";
      } else {
        respuesta = "tijera";
      }
        return respuesta;
    };


  NuevoJuego(){
    this.botonNuevoJuego = false;  
    this.divEleccionUsuario = true;
    this.resultado = undefined;
  };
      

  Definicion(){ 

        this.decisionOrdenador = this.DecisionOrdenador();

    
        if (this.eleccion == this.decisionOrdenador) {
            this.resultado= "Empate, los dos eligieron " +this.eleccion;
                  } else {
            if (this.eleccion == "piedra" && this.decisionOrdenador == "papel") {
              this.resultado= ""+this.eleccion +" vs " +this.decisionOrdenador + ", gana el ordenador.";
            } 
            if (this.eleccion == "piedra" && this.decisionOrdenador == "tijera") {
              this.resultado=""+this.eleccion +" vs " +this.decisionOrdenador + ", gana el usuario";
            } 
            if (this.eleccion == "papel" && this.decisionOrdenador == "tijera") { 
              this.resultado=""+this.eleccion +" vs " +this.decisionOrdenador + ", gana el ordenador.";
            }
            if (this.eleccion == "papel" && this.decisionOrdenador == "piedra"){
              this.resultado=""+this.eleccion +" vs " +this.decisionOrdenador + ", gana el usuario";
            }
            if (this.eleccion == "tijera" && this.decisionOrdenador == "piedra") {
              this.resultado=""+this.eleccion +" vs " +this.decisionOrdenador + ", gana el ordenador.";
                }
            if (this.eleccion == "tijera" && this.decisionOrdenador == "papel") {
              this.resultado=""+this.eleccion +" vs " +this.decisionOrdenador + ", gana el usuario";
            }
        }
        
        console.log(this.resultado);
        this.botonNuevoJuego = true;
     
      }  

    //logicaJuego(this.eleccion, this.decisionOrdenador);
};
    
  
 
 
 
 
 
 
 
 
  

  

