import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importo del module principal
import { RouterModule, Routes } from '@angular/router';
import { AdivinaElNumeroComponent } from '../componentes/adivina-el-numero/adivina-el-numero.component';
import { LoginComponent } from '../componentes/login/login.component';
import { ErrorComponent } from '../componentes/error/error.component';
import { PrincipalComponent } from '../componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from '../componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from '../componentes/menu/menu.component';
import { AdivinaMasListadoComponent } from '../componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadMasListadoComponent } from '../componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { ListadoComponent } from'../componentes/listado/listado.component'
import { ListadosComponent } from '../componentes/listados/listados.component';
import { JuegosComponent } from '../componentes/juegos/juegos.component';
import { RegistroComponent } from '../componentes/registro/registro.component';
import { MenuCardComponent } from '../componentes/menu-card/menu-card.component';
import { CabeceraComponent } from '../componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from '../componentes/quien-soy/quien-soy.component';
import { MapaDeGoogleComponent } from '../componentes/mapa-de-google/mapa-de-google.component'
import { JugadoresListadoComponent } from '../componentes/jugadores-listado/jugadores-listado.component';
import { CardGameComponent } from '../componentes/mayor-omenor/mayor-omenor.component';
import { PptComponent } from '../componentes/ppt/ppt.component';
import { TatetiComponent } from '../componentes/tateti/tateti.component';
import { AnagramaComponent } from '../componentes/anagrama/anagrama.component';

const MiRuteo = [
{path: 'Jugadores' , component: JugadoresListadoComponent},
{path: '' , component: PrincipalComponent},
{path: 'Login' , component: LoginComponent},
{path: 'Mapa' , component: MapaDeGoogleComponent},
{path: 'QuienSoy' , component: QuienSoyComponent},
{path: 'Registro' , component: RegistroComponent},
{path: 'Principal' , component: PrincipalComponent},
{path: 'Listado' , component: JugadoresListadoComponent},
// {path: 'Paises' , component: ListadoDePaisesComponent},

{ path: 'Juegos' ,
component: JuegosComponent ,
children:
     [{path: '' , component: MenuCardComponent},
     {path: 'Adivina' , component: AdivinaElNumeroComponent},
      {path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
      {path: 'AgilidadMasListado' , component: AgilidadMasListadoComponent},
      {path: 'Anagrama' , component: AnagramaComponent},
      {path: 'MayorOMenor' , component: CardGameComponent},
      {path: 'Agilidad' , component: AgilidadAritmeticaComponent},
      {path: 'PPT' , component: PptComponent},
      {path: 'Tateti' , component: TatetiComponent}

    ]
},
{path: '**' , component: ErrorComponent},
{path: 'error' , component: ErrorComponent}];

@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo)
  ],
  exports: [
    RouterModule
  ]
})
export class RuteandoModule { }
