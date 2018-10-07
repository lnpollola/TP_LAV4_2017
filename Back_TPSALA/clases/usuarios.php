<?php
//Incluimos la clase AccesoDatos.php que no estaba. La copiamos desde la Carpeta Clases de Clase06

class Usuario
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	private $id_Usuario;
	private $nombre;
 	private $usuario;
    private $password;
      
	
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
	


//--------------------------------------------------------------------------------//
//--CONSTRUCTOR
	//DV PROBAR ID -> POSTMAN SIN LUZ -> AGREGADO EL ATRIBUTO ID PARA PODER MODIFICAR.
	public function __construct( $id_Usuario=NULL,$nombre=NULL, $usuario=NULL, $password=NULL)
	{
		if( $id_Usuario !== NULL && $nombre !== NULL && $usuario !== NULL && $password !== NULL){
			
			$this->id_Usuario = $id_Usuario;
			$this->nombre = $nombre;
			$this->usuario = $usuario;
			$this->password = $password;
			
		}
	}

//--------------------------------------------------------------------------------//
//--TOSTRING	
  	public function ToString()
	{
	  	return $this->id_Usuario." - ".$this->nombre." - ".$this->usuario." - ".$this->password."\r\n";
	}
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--METODOS DE CLASE

	///////////////////////////////////ABM//////////////////////////////////////
		public static function AltaUsuario($usuario)
		{
			
			if( sizeof($usuario) == 3 )
			{
					$objetoAcceso = AccesoDatos::DameUnObjetoAcceso();
					$consulta = $objetoAcceso->RetornarConsulta('INSERT INTO usuarios(nombre,usuario,password) VALUES (:nombre,:usuario,:password)');
			
				//parametros
					$consulta->bindvalue(':nombre', $usuario['nombre'], PDO::PARAM_STR);
					$consulta->bindvalue(':usuario', $usuario['usuario'] , PDO::PARAM_STR);
					$consulta->bindvalue(':password', $usuario['password'] , PDO::PARAM_STR);
					
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
			$consulta = $objetoAcceso->RetornarConsulta('SELECT id_usuario, Nombre, Usuario, Password FROM usuarios');
			$consulta->Execute();
			return $consulta->fetchAll(PDO::FETCH_CLASS,"Usuario");
			
		}
		
		public static function TraerUnUsuario($id)
		{
			$objetoAcceso = AccesoDatos::DameUnObjetoAcceso();
			$consulta = $objetoAcceso->RetornarConsulta('SELECT id_usuario, Nombre, Usuario, Password  
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

		public static function TraerUnHeladoSabor($sabor)
		{
			$objetoAcceso = AccesoDatos::DameUnObjetoAcceso();
			$consulta = $objetoAcceso->RetornarConsulta('SELECT id_helado, Sabor, Tipo, Kilos  
														 FROM helados 
														 WHERE Sabor=:sabor');
			$consulta->bindParam("sabor", $sabor);
			$consulta->execute();
			$uno = $consulta->fetchObject("Helado");
			
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

		public static function BajaHel($id)
		{
			
			// if(is_numeric($id))
			// {
				$objetoAcceso = AccesoDatos::DameUnObjetoAcceso();
				$consulta = $objetoAcceso->RetornarConsulta('UPDATE `helados` 
															SET	kilos =0  
															WHERE 	id_helado=:id ');
				
				//parametros
				// $consulta->bindvalue(':id', $id , PDO::PARAM_INT); 
				$consulta->bindParam("id", $id);
				$consulta->Execute();
				
				$resultado = $consulta->rowCount();
			
					if ($resultado==0)
					{
						$resultado = "El helado no existe";
					}
					else
					{
						$resultado = "El helado fue Stock = 0";
					}

				return $resultado;
			// }
			// else
			// {
			// 	return "El dato es invalido, debe ser un entero";
			// }
		
		
		}

	

//--------------------------------------------------------------------------------//
}