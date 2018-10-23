import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service';
import { Observable } from 'rxjs';
import  {map, catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})


@Injectable()
export class JugadaService {

  metodo: string;
  handleError:any;
  filtrado:any;

  constructor( public miHttp: MiHttpService ) {
  }


  public ServiceTraerTodasLasJugadas():Observable<any> {
    return this.miHttp.httpGet("TraerTodasLasJugadas", {})
      .pipe(data => { return data; });
    }

    public ServiceAltaJugada(datos):Observable<any> {
      
      return this.miHttp.httpPost("altaJugada",datos)
      .pipe(data =>{return data;}); 

      }

  // public ServiceTraerGanadores():Observable<any> {
  //   return this.miHttp.httpGet("TraerTodosLosUsuarios", {} )
  //     .pipe( map( data => { 
  //       console.log(JSON.parse(data._body));
  //       return JSON.parse(data._body).filter(
  //                           jugador => jugador.id_usuario == 1 
  //                         ); 
  //                         }));

  //   }

  // public ServiceTraerTodosLosJugadores():Observable<any> {
  //   return this.miHttp.httpGet("TraerTodosLosUsuarios", {})
  //     .pipe(data => { return data; });
  //   }
  // public ServiceAltavehiculo(vehiculo):Observable<any> {
  //   return this.miHttp.httpPost("altavehiculo",vehiculo)
  //       .pipe(data =>{ return data;}); 

  // }

  // public ServiceTraerUnvehiculo(idvehiculo):Observable<any> {
  //   return this.miHttp.httpGet("TraerUnvehiculo/"+idvehiculo, {})
  //     .pipe(data => { return data; });
  // }

  // public ServiceTraerUnvehiculoSabor(sabor):Observable<any> {
  //   return this.miHttp.httpGet("TraerUnvehiculoSabor/"+sabor, {})
  //     .pipe(data => { return data; });
  // }


  // public Borrar(id)
  // { 
  //   console.info("Estoy en borrar service",id);
  //   return this.miHttp.httpPost("borrarHel/"+id,{})
  //   .pipe((data)=>{return data}, catchError(this.handleError));
  // }





}
