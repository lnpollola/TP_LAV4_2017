export abstract class Jugada {
  public Nombre_juego = '';
  public Nombre_usuario: string;
  public Resultado = false;

  constructor(Nombre_juego?: string, Resultado?: boolean,Nombre_usuario?:string) {
    if (Nombre_juego)
      this.Nombre_juego = Nombre_juego;
    if (Resultado)
      this.Resultado = Resultado;
    if(Nombre_usuario)
      this.Nombre_usuario=Nombre_usuario;
    else
      this.Nombre_usuario= "NN";
  }


  public abstract verificar():boolean; 
  
  public retornarAyuda() {
    
    return "NO hay Ayuda definida";
  }
}
