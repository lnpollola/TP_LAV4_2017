import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service';
import { Observable } from 'rxjs';
import  {map, catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})


@Injectable()
export class JugadoresService {

  metodo: string;
  handleError:any;
  filtrado:any;

  constructor( public miHttp: MiHttpService ) {
  }

  // traertodos(ruta : string,filtro: string) 
  // {
  //   return this.miHttp.traerJugadores(ruta).then(data=>{
  //     console.info("jugadores service",data);

  //     this.filtrado=data;

  //    let  ganador: boolean;
  //     if(filtro=="ganadores")
  //     {
  //       ganador= true;
  //     }
  //     else
  //     {
  //       ganador= false;
  //     }

  //     this.filtrado =this.filtrado.filter(
  //       data => data.gano === ganador  || filtro=="todos" ); return this.filtrado}
  //     )
  //     .catch(errror=>{console.log("error")
      


  //   return this.filtrado;
      

  //   });
  // }

  public ServiceTraerTodosLosUsuarios():Observable<any> {
    return this.miHttp.httpGet("TraerTodosLosUsuarios", {})
      .pipe(data => { return data; });


  }

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
