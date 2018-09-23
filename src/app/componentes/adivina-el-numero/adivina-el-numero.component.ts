
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina'

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {

 @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();

  nuevoJuego: JuegoAdivina;
  Mensajes:string;
  contador:number;
  ocultarVerificar:boolean;
 
  constructor() { 
    this.nuevoJuego = new JuegoAdivina();
    this.contador=0;
    this.nuevoJuego.generarnumero();
    console.info("numero Secreto:",this.nuevoJuego.numeroSecreto+" - Contador; "+this.contador);  
    this.ocultarVerificar=false;
  }

  generarnumero() {
    // this.nuevoJuego.generarnumero();
    // this.contador=0;
    this.constructor();
  } 
  verificar()
  {
    this.contador++;
    console.info("El contador va: :",this.contador);  
    this.ocultarVerificar=true;

    if (this.nuevoJuego.verificar()){
      
      this.enviarJuego.emit(this.nuevoJuego);
      this.MostarMensaje("Sos un Genio!!!",true);
      this.contador = 0;

    }else{

      let mensaje:string;
      switch (this.contador) {
        case 1:
          mensaje="1er intento fallido, animo.";
          break;
          case 2:
          mensaje="¿Te estaras Acercando?";
          break;
          case 3:
          mensaje="No es. Crei que la tercera era la vencida.";
          break;
          case 4:
          mensaje="No era el  "+this.nuevoJuego.numeroIngresado;
          break;
          case 5:
          mensaje=" intentos y nada.";
          break;
          case 6:
          mensaje="Afortunado en el amor.";
          break;
      
        default:
            mensaje="Ya le erraste "+ this.contador+" veces.";
          break;
      }
      this.MostarMensaje("#"+this.contador+" "+mensaje+" ayuda :"+this.nuevoJuego.retornarAyuda());
     

    }
    // console.info("numero Secreto:",this.nuevoJuego.gano);  
    console.info("¿Gano?",this.nuevoJuego.gano);  
    return this.nuevoJuego.gano;
  }  

  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }
    var modelo=this;
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar=false;
     }, 3000);
    console.info("objeto",x);
  
   }  
  ngOnInit() {
  }

}
