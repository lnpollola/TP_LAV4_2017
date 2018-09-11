
import { Component, OnInit , Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {
 @Input()
 listado: Array<any>;
 @Input()
 saludo: string;

  constructor() {
   }

  ngOnInit() {

  }

  ver() {
    console.info(this.listado);
    console.info(this.saludo);
  }

}
