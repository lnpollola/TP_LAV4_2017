import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {LoginService} from '../../servicios/login.service';
import {Usuario} from '../../clases/usuario';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  mail = '';
  clave= '';
  nombre= '';
  usuario='';
  progreso: number;
  progresoMensaje="esperando..."; 
  logeando=true;
  ProgresoDeAncho:string;
  respuesta: any;


  clase="progress-bar progress-bar-info progress-bar-striped ";

  constructor(
    private builder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _servicio:LoginService
    
    ) {
      this.progreso=0;
      this.ProgresoDeAncho="0%";
     
  }

  // email = new FormControl('', [
  //   Validators.required, 
  //   Validators.email,
  //   Validators.minLength(5)
  // ]);

  
  // password = new FormControl('', [
  //   Validators.required
  // ]);


  // usuario = new FormControl('', [
  //   Validators.required
  // ]);
  


  // registroForm: FormGroup = this.builder.group({
  //   usuario: this.usuario,
  //   email: this.email,
  //   clave: this.password
  // });





  ngOnInit() {
  }


  Entrar(){
    
    
    
    var loginDatos = new Usuario(this.nombre,  this.usuario,this.mail, this.clave);
  
 

    this._servicio.ServiceLogin(loginDatos).subscribe(data =>{
      
      this.respuesta = JSON.parse(data._body);
      
    //  console.log(this.respuesta);     
      
            if ( this.respuesta.status)
              {
                //console.log(this.datosToken.token);
                localStorage.setItem('token', this.respuesta.token);
                this.router.navigateByUrl("/Principal");
              }
              else
                  {
                    alert("Error intente de nuevo");
                    this.router.navigateByUrl("/Login");
                  }
      /*        
      const helper = new JwtHelperService();
  
      const decodedToken = helper.decodeToken(this.datosToken.token);
      const expirationDate = helper.getTokenExpirationDate(this.datosToken.token);
      const isExpired = helper.isTokenExpired(this.datosToken.token);
  
      console.log(decodedToken);
      console.log(expirationDate);
      console.log(isExpired);
      */
    
    
    });
      
    
  
  }
  
  
  MoverBarraDeProgreso() {
    
    this.logeando=false;
    this.clase="progress-bar progress-bar-danger progress-bar-striped active";
    this.progresoMensaje="NSA spy..."; 
    let timer = TimerObservable.create(200, 50);
    this.subscription = timer.subscribe(t => {
      // console.log("inicio");
      this.progreso=this.progreso+1;
      this.ProgresoDeAncho=this.progreso+20+"%";
      switch (this.progreso) {
        case 15:
        this.clase="progress-bar progress-bar-warning progress-bar-striped active";
        this.progresoMensaje="Verificando ADN..."; 
          break;
        case 30:
          this.clase="progress-bar progress-bar-Info progress-bar-striped active";
          this.progresoMensaje="Adjustando encriptación.."; 
          break;
          case 60:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando Info del dispositivo..";
          break;
          case 75:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando claves facebook, gmail, chats..";
          break;
          case 85:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Instalando KeyLogger..";
          break;
          
        case 100:
          // console.log("final");
          this.subscription.unsubscribe();
          this.Entrar();
          break;
      }     
    });
    //this.logeando=true;
  }

}
