import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from './componentes/login/login.component';
//  import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import {MatCardModule} from '@angular/material/card';
// import { AccordionModule } from 'ngx-bootstrap';
// agrego las clases para utilizar ruteo
import { RouterModule, Routes } from '@angular/router';

import { MiHttpService } from './servicios/mi-http/mi-http.service'; 
// import { PaisesService } from './servicios/paises.service'; 

import { JugadoresService } from './servicios/jugadores.service'; 
import { JugadaService } from './servicios/jugada.service'; 
// import{ ArchivosJugadoresService} from './servicios/archivos-jugadores.service'; 
import { ErrorComponent } from './componentes/error/error.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { AdivinaMasListadoComponent } from './componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadMasListadoComponent } from './componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { RuteandoModule } from './ruteando/ruteando.module';
// import { ListadoComponent } from './componentes/listado/listado.component';
import { JugadoresListadoComponent } from './componentes/jugadores-listado/jugadores-listado.component';
import {MatGridListModule} from '@angular/material/grid-list';
// import { JuegoServiceService } from './servicios/juego-service.service';
import { ListadosComponent } from './componentes/listados/listados.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { ListadoDePaisesComponent } from './componentes/listado-de-paises/listado-de-paises.component';
import { MapaDeGoogleComponent } from './componentes/mapa-de-google/mapa-de-google.component'
import { AgmCoreModule } from '@agm/core';
import { InputJugadoresComponent } from './componentes/input-jugadores/input-jugadores.component';
import { SexoPipe } from './pipes/sexo.pipe';
import { CardGameComponent } from './componentes/mayor-omenor/mayor-omenor.component';
import {MatDividerModule} from '@angular/material/divider';
import { PptComponent } from './componentes/ppt/ppt.component';
import { TatetiComponent } from './componentes/tateti/tateti.component';
import {MatButtonModule} from '@angular/material/button';
import { AccordionModule } from 'primeng/accordion';
import {KeyFilterModule} from 'primeng/keyfilter';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
// import { JugadorGanadoresPipe } from './pipes/jugador-ganadores.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PptMasListadoComponent } from './componentes/ppt-mas-listado/ppt-mas-listado.component';
import { TatetiMasListadoComponent } from './componentes/tateti-mas-listado/tateti-mas-listado.component';
import { MayormenorMasListadoComponent } from './componentes/mayormenor-mas-listado/mayormenor-mas-listado.component';
import { AnagramaMasListadoComponent } from './componentes/anagrama-mas-listado/anagrama-mas-listado.component';



@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    ListadoDeResultadosComponent,
    ErrorComponent,
    PrincipalComponent,
    LoginComponent,
    AgilidadAritmeticaComponent,
    MenuComponent,
    AdivinaMasListadoComponent,
    AgilidadMasListadoComponent,
    // ListadoComponent,
    ListadosComponent,
    JuegosComponent,
    RegistroComponent,
    MenuCardComponent,
    CabeceraComponent,
    QuienSoyComponent,
    AnagramaComponent,
    ListadoDePaisesComponent,
    MapaDeGoogleComponent,
    JugadoresListadoComponent,
    InputJugadoresComponent,
    SexoPipe,
    CardGameComponent,
    PptComponent,
    TatetiComponent,
    PptMasListadoComponent,
    TatetiMasListadoComponent,
    MayormenorMasListadoComponent,
    AnagramaMasListadoComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AccordionModule,
    FormsModule,
    RuteandoModule,
    KeyFilterModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    HttpModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
    })
    // NgbModule.forRoot(MiRuteo),
    // importo el ruteo
    // RouterModule.forRoot(MiRuteo)
  ],
  providers: [ 
    // JuegoServiceService,
     MiHttpService,
    //  PaisesService,
    //  ArchivosJugadoresService,
    JugadaService,
     JugadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
