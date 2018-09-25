export class CasillaTateti {
    public marcada:boolean;
    public valor:string;
    public coorX:number;
    public coorY:number;
    
constructor(coorX, coorY){
    this.coorX=coorX;
    this.coorY=coorY;

}
    public MarcarCasilla(valor:string):boolean{
        if(!this.marcada){
            this.marcada=true;
            this.valor=valor;
            return true;
        }    
        else{
            return false;
        }
      
    }
}
