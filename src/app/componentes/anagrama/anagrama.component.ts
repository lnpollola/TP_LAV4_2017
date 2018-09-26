/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import { JuegoAnagrama } from '../../clases/juego-anagrama';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
  miPalabra:any;
  Palabras:any;
  miJuego:JuegoAnagrama;

  @Output()
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  
    ocultarVerificar: boolean;
    Tiempo: number;
    repetidor:any;
    private subscription: Subscription;
    Mensajes:string;

  constructor() {
    this.miJuego = new JuegoAnagrama();
    
    this.miJuego.jugador = "nn"
    this.miJuego.desordenada = "Presiona el Boton";
    this.ocultarVerificar=true;
   }

  GenerarNuevo(){
    this.ocultarVerificar=false;
    this.miJuego = new JuegoAnagrama();
    
    this.miJuego.jugador = "nn"
    this.miPalabra = this.Palabras[Math.floor((Math.random() * 32) )];
    this.miJuego.palabra = this.miPalabra["palabra"];
    this.miJuego.desordenada = this.miPalabra["desordenada"];

 }

 Verificar(){
   if(this.miJuego.verificar())
   {
    this.enviarJuego.emit(this.miJuego);
     console.log(this.miJuego);
     this.ocultarVerificar=true;
   }
   else 
   {
   this.enviarJuego.emit(this.miJuego);
    console.log(this.miJuego);
    this.ocultarVerificar=true;
   }
 }



  ngOnInit() {

      var data = `[
        {  
          "id":"0",  
          "palabra":"PEZ",
          "desordenada":"ZEP",
          "pista":"Animal acuático vertebrado"
        },
        {
            "id":"1",
          "palabra":"ZAR",
          "desordenada":"RAZ",
          "pista":"Antiguo soberano de Rusia y Bulgaria"
        },
        {
            "id":"2",
          "palabra":"JET",
          "desordenada":"TJE",
          "pista":"Avión de reacción"
        },
        {
            "id":"3",
          "palabra":"OLAS",
          "desordenada":"SOLA",
          "pista":"Agua de mar o río, agitada"
        },
        {
            "id":"4",
          "palabra":"ASNO",
          "desordenada":"NOAS",
          "pista":"Animal solípedo, doméstico"
        },
        {
            "id":"5",
          "palabra":"TIZA",
          "desordenada":"AZTI",
          "pista":"Arcilla blanca terrosa"
        },
        {
            "id":"6",
          "palabra":"PATO",
          "desordenada":"TOPA",
          "pista":"Ave acuática, palmípeda y lamelirrostra"
        },
        {
            "id":"7",
          "palabra":"SPRAY",
          "desordenada":"RAYPS",
          "pista":"Aerosol (palabra inglesa)"
        },
        {
            "id":"8",
          "palabra":"BALIN",
          "desordenada":"LIBAN",
          "pista":"Bala de pequeño calibre - Enano"
        },
        {
            "id":"9",
          "palabra":"RULOS",
          "desordenada":"LOSUR",
          "pista":"Bolas, cilindros en el cabello, ruedas"
        },
        {
            "id":"10",
          "palabra":"REMAR",
          "desordenada":"MARER",
          "pista":"Mover los remos de una embarcación para hacerla avanzar"
        },
        {
            "id":"11",
          "palabra":"BOZAL",
          "desordenada":"LOZBA",
          "pista":"Aparato que se pone en la boca de ciertos animales"
        },
        {
            "id":"12",
          "palabra":"LLAMA",
          "desordenada":"LAMLA",
          "pista":"Camélido de los Andes"
        },
        {
            "id":"13",
          "palabra":"DIODO",
          "desordenada":"ODODI",
          "pista":"Lámpara de dos electrodos"
        },
        {
            "id":"14",
          "palabra":"ORUGA",
          "desordenada":"AGORU",
          "pista":"Larva de los insectos lepidópteros"
        },
        {
            "id":"15",
          "palabra":"MISAL",
          "desordenada":"MALIS",
          "pista":"Libro que contiene las oraciones de misa"
        },
        {
            "id":"16",
          "palabra":"FRENO",
          "desordenada":"NEREF",
          "pista":"Lo que detiene"
        },
        {
            "id":"17",
          "palabra":"ARENA",
          "desordenada":"ENARA",
          "pista":"Lugar de combate"
        },
        {
            "id":"18",
          "palabra":"LEMUR",
          "desordenada":"MERUL",
          "pista":"Mamífero de Madagascar"
        },
        {
            "id":"19",
          "palabra":"DRAGA",
          "desordenada":"ARGAD",
          "pista":"Máquina excavadora"
        },
        {
            "id":"20",
          "palabra":"CROMO",
          "desordenada":"ROMOC",
          "pista":"Metal cuyas combinaciones cambia el color de las pinturas"
        },
        {
            "id":"21",
          "palabra":"BOCETO",
          "desordenada":"TOBOCE",
          "pista":"Apunte, bosquejo"
        },
        {
            "id":"22",
          "palabra":"TOCINO",
          "desordenada":"ONOTIC",
          "pista":"Carne gorda de los cerdos"
        },
        {
            "id":"23",
          "palabra":"NAVAJA",
          "desordenada":"AVAJAN",
          "pista":"Cortaplumas"
        },
        {
            "id":"24",
          "palabra":"ADEREZO",
          "desordenada":"EREDZOA",
          "pista":"Adobo, condimento"
        },
        {
            "id":"25",
          "palabra":"RASURAR",
          "desordenada":"SURRARA",
          "pista":"Afeitarse"
        },
        {
            "id":"26",
          "palabra":"SORTIJA",
          "desordenada":"JATORSI",
          "pista":"Anillo de bodas"
        },
        {
            "id":"27",
          "palabra":"ANDAMIO",
          "desordenada":"NAMIODA",
          "pista":"Armazón de tablas, en construcción"
        },
        {
            "id":"28",
          "palabra":"BIPLANO",
          "desordenada":"ONAPLIB",
          "pista":"Avión de cuatro alas"
        },
        {
            "id":"29",
          "palabra":"FRAGATA",
          "desordenada":"AFRAGTA",
          "pista":"Buque de tres palos"
        },
        {
            "id":"30",
          "palabra":"COLADOR",
          "desordenada":"OCLADOR",
          "pista":"Sirve para colar"
        },
        {
            "id":"31",
          "palabra":"ESCRITO",
          "desordenada":"TORECIS",
          "pista":"Cualquier papel manuscrito"
        },
        {
            "id":"32",
          "palabra":"NUPCIAL",
          "desordenada":"LAIPCUN",
          "pista":"De las bodas"
        },
        {
            "id":"32",
          "palabra":"FLORIDO",
          "desordenada":"ODOFLIR",
          "pista":"Dícese del estilo elegante"
        }
      ]`;
      this.Palabras = data;
     
      


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
       }, 3000);
    
     }  
  
}
