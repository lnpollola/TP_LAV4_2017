import { Injectable } from '@angular/core';
import { MiHttpService} from '../servicios/mi-http/mi-http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(public _generico: MiHttpService) { }



  public Registro(datos): Observable<any>
  {
    // console.log(datos);

    return this._generico.httpPost("altaUsuarioJuegos",datos)
        .pipe(data =>{return data;}); 
    
  }
  





}
