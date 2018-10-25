import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {


  constructor(private router: Router) { }
  navbarOpen = false;
  ngOnInit() {
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }


  Desloguear()
  {
    localStorage.setItem('token', null);
    this.router.navigate(['/Login']);
  }

}
