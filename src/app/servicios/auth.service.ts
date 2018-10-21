import { Injectable } from '@angular/core';
import { JwtHelperService  } from '@auth0/angular-jwt';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})


@Injectable()
export class AuthService {

  public name: string;
  private _token: string;
  jwtHelper: JwtHelperService = new JwtHelperService();
  
  constructor( private router: Router ) {
   // this._token = localStorage.getItem('token');
   // console.log("entro al AuthService");
    //console.log("el token es: "+ this._token);
  }

  public isLogued()
  {
    try {
      //console.log( 'is logued', this.jwtHelper.isTokenExpired(this._token));
      this._token = localStorage.getItem('token');

      if(this.jwtHelper.isTokenExpired(this._token))
      {
        //Si entro aca el token expiro
        console.log("Token Expiro o No hay token");
        //localStorage.removeItem('token');
        let rta = false;
        
        return rta;
      }
      else{
        return true;
      }
    
    
    } catch (error) {
      
      console.log("entro en el catch de isLogued");
      return false;
    }
  }

  public getToken ()
  {
    try {
      console.log('getToekn', this.jwtHelper.decodeToken(this._token));
      return this.jwtHelper.decodeToken(this._token);
    } catch (error) {
      return undefined;
    }
  }

  public getExpirationDate()
  {
    
    try {
      console.log('getExpirationDate', this.jwtHelper.getTokenExpirationDate(this._token))
      return this.jwtHelper.getTokenExpirationDate(this._token);
    } catch (error) {
      return null;
    }
  }

  public logOut()
  {
    try {
      localStorage.setItem('token', null);
      this.router.navigate(['/login']);
    } catch (error) {
      return false;
    }
  }

  public getNivel ()
  {
    // console.log(this.jwtHelper.decodeToken(this._token));
    if (this.jwtHelper.decodeToken(this._token).nivel || this.jwtHelper.decodeToken(this._token).nivel === 0)
      return this.jwtHelper.decodeToken(this._token).nivel;
    else
      return 1000;
    
  }
}

