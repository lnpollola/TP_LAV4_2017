import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Usuario } from '../../clases/usuario';
import { RegistroService} from '../../servicios/registro.service';


function copiaClave(input: FormControl) {

      if (input.root.get('clave') == null) {
        return null;
      }

      const verificar = input.root.get('clave').value === input.value;
      return verificar ? null : { mismaClave : true };
  }


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  hide = true;

  constructor(private builder: FormBuilder,
    private _registro: RegistroService,
    private router: Router
    ) { }


  email = new FormControl('', [
    Validators.required, 
    Validators.email,
    Validators.minLength(5)
  ]);

  
  password = new FormControl('', [
    Validators.required
  ]);

  nombre = new FormControl('', [
    Validators.required
  ]);

  usuario = new FormControl('', [
    Validators.required
  ]);
  
  copiaClave = new FormControl('', [
    Validators.required,
    copiaClave
  ]);

  registroForm: FormGroup = this.builder.group({
    nombre: this.nombre,
    usuario: this.usuario,
    email: this.email,
    clave: this.password,
    copiaClave: this.copiaClave,
  });

  ngOnInit() {
  }

  // Registrar(){
  //   alert("Usuario Registrado");
  //   console.log(this.registroForm.get('email').value); 
  // }


  Registrar(){
    
    console.log(this.registroForm);
    console.log(this.registroForm.value);
    console.log(this.registroForm.value.nombre);
    
    var usuario = new Usuario(
                                this.registroForm.value.nombre
                                ,this.registroForm.value.usuario
                                ,this.registroForm.value.email
                                , this.registroForm.value.clave
                              );
   // console.log(usuario);
    
    this._registro.Registro(usuario)
    .subscribe(data =>{
      
      let resultado = JSON.parse(data._body);

      console.log(resultado);
      if(resultado)
      {
        alert("Usuario Registrado");
        this.router.navigate(['/Login']);
      }
        else{
          alert("Intentelo nuevamenete");
        }
    
    });

   
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Debes ingresar un mail con 5 caracteres como mínimo' :
        this.email.hasError('email') ? 'No es un e-mail valido' :
            '';
  }

  getErrorMessagePsw() {
    return this.email.hasError('required') ? 'Debes ingresar una clave con mínimo 5 caracteres' :
        this.email.hasError('email') ? 'La clave no es válida' :
            '';
  }

  getErrorMessagePswDup() {
    return this.email.hasError('required') ? 'Debes ingresar la  misma clave' :
        this.email.hasError('email') ? 'La clave no es igual a la anterior' :
            '';
  }

  getErrorMessageNomb() {
    return this.email.hasError('required') ? 'Debes ingresar un nombre' :
        this.email.hasError('email') ? 'El nombre no es válido' :
            '';
  }

  getErrorMessageUser() {
    return this.email.hasError('required') ? 'Debes ingresar un usuario' :
        this.email.hasError('email') ? 'El usuario no es válido' :
            '';
  }

}
