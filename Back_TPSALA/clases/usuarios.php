<?php
//Incluimos la clase AccesoDatos.php que no estaba. La copiamos desde la Carpeta Clases de Clase06
require_once "AutentificadorJWT.php";

class Usuario
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	private $id_Usuario;
	private $nombre;
 	private $usuario;
	private $password;
	private $email;
      
	
//--------------------------------------------------------------------------------//
//--GETTERS Y SETTERS
	public function Getid_Usuario()
	{
		return $this->id_Usuario;
	}
	
	public function GetNombre()
	{
		return $this->nombre;
	}
	public function GetUsuario()
	{
		return $this->usuario;
	}
	public function GetPassword()
	{
		return $this->password;
	}
	public function GetEmail()
	{
		return $this->email;
	}
	

	public function Setid_Usuario($valor)
	{
		$this->id_Usuario = $valor;
	}
	public function SetNombre($valor)
	{
		$this->nombre = $valor;
	}
	public function SetUsuario($valor)
	{
		$this->usuario = $valor;
	}
	public function SetPassword($valor)
	{
		$this->password = $valor;
	}
	public function SetEmail($valor)
	{
		$this->email = $valor;
	}
	


//--------------------------------------------------------------------------------//
//--CONSTRUCTOR
	//DV PROBAR ID -> POSTMAN SIN LUZ -> AGREGADO EL ATRIBUTO ID PARA PODER MODIFICAR.
	public function __construct( $id_Usuario=NULL,$nombre=NULL, $usuario=NULL, $password=NULL, $email=NULL)
	{
		if( $id_Usuario !== NULL && $nombre !== NULL && $usuario !== NULL && $password !== NULL && $email !== NULL){
			
			$this->id_Usuario = $id_Usuario;
			$this->nombre = $nombre;
			$this->usuario = $usuario;
			$this->password = $password;
			$this->email = $email;
			
		}
	}

//--------------------------------------------------------------------------------//
//--TOSTRING	
  	public function ToString()
	{
	  	return $this->id_Usuario." - ".$this->nombre." - ".$this->usuario." - ".$this->password." - ".$this->email."\r\n";
	}
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--METODOS DE CLASE

	///////////////////////////////////ABM//////////////////////////////////////
		public static function AltaUsuario($usuario)
		{
			
			if( sizeof($usuario) == 4 )
			{
					$objetoAcceso = AccesoDatos::DameUnObjetoAcceso();
					$consulta = $objetoAcceso->RetornarConsulta('INSERT INTO usuarios(nombre,usuario,password,email) VALUES (:nombre,:usuario,:password,:email)');
			
				//parametros
					$consulta->bindvalue(':nombre', $usuario['nombre'], PDO::PARAM_STR);
					$consulta->bindvalue(':usuario', $usuario['usuario'] , PDO::PARAM_STR);
					$consulta->bindvalue(':password', $usuario['password'] , PDO::PARAM_STR);
					$consulta->bindvalue(':email', $usuario['email'] , PDO::PARAM_STR);
					
					$resultado = $consulta->Execute();			
			}		
			else
			{
					$resultado = false;
			}


			return $resultado;	
		}

      
	/////////////////////////////////TRAER BD////////////////////////////////////////////
		public static function TraerTodosLosUsuarios()
		{
			$arrayRetorno = array();
			$objetoAcceso = AccesoDatos::DameUnObjetoAcceso();
			$consulta = $objetoAcceso->RetornarConsulta('SELECT id_usuario, Nombre, Usuario, Password , Email FROM usuarios');
			$consulta->Execute();
			return $consulta->fetchAll(PDO::FETCH_CLASS,"Usuario");
			
		}
		
		public static function TraerUnUsuario($id)
		{
			$objetoAcceso = AccesoDatos::DameUnObjetoAcceso();
			$consulta = $objetoAcceso->RetornarConsulta('SELECT id_usuario, Nombre, Usuario, Password , Email  
														 FROM usuarios 
														 WHERE id_usuario=:id');
			$consulta->bindParam("id", $id);
			$consulta->execute();
			$uno = $consulta->fetchObject("Usuario");
			
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

		public static function SignIn($arrayParametros)
		{
				$objetoAcceso = AccesoDatos::DameUnObjetoAcceso();
				if(sizeof($arrayParametros)==3)
				{
					$consulta = $objetoAcceso->RetornarConsulta('SELECT  id_usuario, Nombre, Usuario, Password , Email FROM `usuarios` WHERE Email=:email and password=:password and Usuario=:usuario');
					$consulta->bindvalue(':usuario', $arrayParametros['usuario'], PDO::PARAM_STR);
					$consulta->bindvalue(':email', $arrayParametros['email'], PDO::PARAM_STR);
					$consulta->bindvalue(':password', $arrayParametros['password'] , PDO::PARAM_STR);					
					
					$consulta->execute();
					
					$uno = $consulta->fetchObject("Usuario");
					
					$objDelaRespuesta= new stdclass();

					if($uno == true){
						$token= AutentificadorJWT::CrearToken($uno);						

						$objDelaRespuesta->token = $token;
						$objDelaRespuesta->respuesta = "Bienvenido";						
						$objDelaRespuesta->status = true;

						$retorno = $objDelaRespuesta;
					}	
					else
						{
							$objDelaRespuesta->respuesta = "Password Incorrecto";
							$objDelaRespuesta->token = false;
							$objDelaRespuesta->status = false;
							
							$retorno = $objDelaRespuesta;														
						}
					
				}
				else{
					$retorno = false;
				}
								
				return $retorno;
		}

	

//--------------------------------------------------------------------------------//
}