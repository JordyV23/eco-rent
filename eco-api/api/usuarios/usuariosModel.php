<?php
//Incluímos inicialmente la conexión a la base de datos
require "conexion.php";


class usuarios
{
    //Constructor de usuarios
    public function __construct()
    {
    }

    // Funcion para insertar usuarios
    public function insertar($cedula, $nombre, $apellidos, $fechaNacimiento, $password, $email)
    {
        $sql = "INSERT INTO usuarios (cedula,nombre,apellidos,fechaNacimiento,password,email,rol)
		VALUES ('$cedula', '$nombre','$apellidos','$fechaNacimiento','$password','$email','cliente')";
        return EjecutarConsulta($sql);
    }

    // Funcion para listar todos los registros sobre usuarios
    public function listar()
    {
        $sql = "SELECT cedula,nombre,apellidos,fechaNacimiento,password,email,rol FROM usuarios";
        return EjecutarConsulta($sql);
    }

    // Funcion para editar informacion sobre usuarios
    public function editar($cedula, $password, $email, $rol)
    {
        $sql = "UPDATE usuarios SET password='$password',email='$email', rol='$rol' WHERE cedula = $cedula";
        return EjecutarConsulta($sql);
    }

    // Funcion para buscar usuarios
    public function buscar($cedula)
    {
        $sql = "SELECT cedula,nombre,apellidos,fechaNacimiento,password,email,rol FROM usuarios WHERE cedula = $cedula";
        return EjecutarConsulta($sql);
    }

    // Funcion para eliminar usuarios
    public function eliminar($cedula)
    {
        $sql = "DELETE FROM usuarios WHERE cedula = '$cedula'";
        return EjecutarConsulta($sql);
    }
}
