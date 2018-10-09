import { Injectable } from '@angular/core';

import {Http ,Response, Headers} from '@angular/http';

import { catchError, map, tap } from 'rxjs/operators';

import { Observable, Subject } from 'rxjs';


@Injectable()

export class MiHttpService {

  //api="https://restcountries.eu/rest/v2/";
    api="http://localhost/Back_TPSALA/"
  

  constructor(public http:Http) { }
  public httpGet(metodo:string, objeto:any):Observable<any>{

    return this.http
    .get(this.api + metodo)
    .pipe(tap(data => {return this.extraerDatos(data)}));
    
  }

 
  public httpPost(metodo:string, objeto:any)
  {
    return this.http.post(this.api + metodo, objeto)
    .pipe(catchError(this.handleError));
  }

  
  private extraerDatos(resp:Response) {

      return resp.json() || {};

  }
  private handleError(error:Response | any) {

      return error;
  }


}
