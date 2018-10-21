export class Usuario {
  
  public nombre: string;
  public usuario: string;
	public email: string;
 	public password: string;
  

  constructor(nombre:string, usuario:string, email:string, password:string) {
    this.email = email;
    this.password = password;
    this.usuario = usuario;
    this.nombre = nombre;
    
  }


}
