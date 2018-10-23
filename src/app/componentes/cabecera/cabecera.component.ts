import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {


  constructor() { }
  navbarOpen = false;
  ngOnInit() {
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }


}
