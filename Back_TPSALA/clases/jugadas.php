<?php
//Incluimos la clase AccesoDatos.php que no estaba. La copiamos desde la Carpeta Clases de Clase06
require_once "AutentificadorJWT.php";

class Jugada
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	private $id_Jugada;
	private $nombre_juego;
 	private $nombre_usuario;
	private $resultado;
	private $fecha_hora;
      
	
//--------------------------------------------------------------------------------//
//--GETTERS Y SETTERS
	public function Getid_Jugada()
	{
		return $this->id_Jugada;
	}
	
	public function GetNombre()
	{
		return $this->nombre_juego;
	}
	public function GetNombre_usuario()
	{
		return $this->nombre_usuario;
	}
	public function GetResultado()
	{
		return $this->resultado;
	}
	public function GetFecha_hora()
	{
		return $this->fecha_hora;
	}
	

	public function Setid_Jugada($valor)
	{
		$this->id_Jugada = $valor;
	}
	public function SetNombre($valor)
	{
		$this->nombre_juego = $valor;
	}
	public function SetNombre_usuario($valor)
	{
		$this->nombre_usuario = $valor;
	}
	public function SetResultado($valor)
	{
		$this->resultado = $valor;
	}
	public function SetFecha_hora($valor)
	{
		$this->fecha_hora = $valor;
	}
	


//--------------------------------------------------------------------------------//
//--CONSTRUCTOR
	//DV PROBAR ID -> POSTMAN SIN LUZ -> AGREGADO EL ATRIBUTO ID PARA PODER MODIFICAR.
	public function __construct( $id_Jugada=NULL,$nombre_juego=NULL, $nombre_usuario=NULL, $resultado=NULL, $fecha_hora=NULL)
	{
		if( $id_Jugada !== NULL && $nombre_juego !== NULL && $nombre_usuario !== NULL && $resultado !== NULL && $fecha_hora !== NULL){
			
			$this->id_Jugada = $id_Jugada;
			$this->nombre_juego = $nombre_juego;
			$this->nombre_usuario = $nombre_usuario;
			$this->resultado = $resultado;
			$this->fecha_hora = $fecha_hora;
			
		}
	}

//--------------------------------------------------------------------------------//
//--TOSTRING	
  	public function ToString()
	{
	  	return $this->id_Jugada." - ".$this->nombre_juego." - ".$this->nombre_usuario." - ".$this->resultado." - ".$this->fecha_hora."\r\n";
	}
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--METODOS DE CLASE

	///////////////////////////////////ABM//////////////////////////////////////
		public static function AltaJugada($jugada)
		{
			
			// if( sizeof($jugada) == 3 )
			// {
					$objetoAcceso = AccesoDatos::DameUnObjetoAcceso();
					$consulta = $objetoAcceso->RetornarConsulta('INSERT INTO jugadas(nombre_juego,nombre_usuario,resultado) VALUES (:nombre,:jugador,:gano)');
			
				//parametros
					$consulta->bindvalue(':nombre', $jugada['nombre'], PDO::PARAM_STR);
					$consulta->bindvalue(':jugador', $jugada['jugador'] , PDO::PARAM_STR);
					$consulta->bindvalue(':gano', $jugada['gano'] , PDO::PARAM_INT);
				
					
					$resultado = $consulta->Execute();			
			// }		
			// else
			// {
			// 		$resultado = false;
			// }


			return $resultado;	
		}

      
	/////////////////////////////////TRAER BD////////////////////////////////////////////
		public static function TraerTodasLasJugadas()
		{
			$arrayRetorno = array();
			$objetoAcceso = AccesoDatos::DameUnObjetoAcceso();
			$consulta = $objetoAcceso->RetornarConsulta('SELECT id_jugada, Nombre_juego, Nombre_usuario, Resultado , Fecha_hora FROM jugadas');
			$consulta->Execute();
			return $consulta->fetchAll(PDO::FETCH_CLASS,"Jugada");
			
		}
		
		public static function TraerUnaJugada($id)
		{
			$objetoAcceso = AccesoDatos::DameUnObjetoAcceso();
			$consulta = $objetoAcceso->RetornarConsulta('SELECT id_jugada, Nombre_juego, Nombre_usuario, Resultado , Fecha_hora  
														 FROM jugadas 
														 WHERE id_jugada=:id');
			$consulta->bindParam("id", $id);
			$consulta->execute();
			$uno = $consulta->fetchObject("Jugada");
			
			if($uno == NULL)
			{ 
				$uno=0; 
				return $uno;
			}
			else 
			{ 
				return $uno; 
			}
		}

	

//--------------------------------------------------------------------------------//
}