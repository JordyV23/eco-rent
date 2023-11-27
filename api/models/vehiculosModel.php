<?php
//Incluímos inicialmente la conexión a la base de datos
require "../config/Conexion.php";


class vehiculos
{
    //Constructor de vehiculos
    public function __construct()
    {
    }

    // Funcion para insertar vehiculos
    public function insertar($placa, $marca, $detalle, $color)
    {
        $sql = "INSERT INTO vehiculos (placa,marca,detalle,color,disponible) VALUES ('$placa', '$marca','$detalle','$color',1)";
        return EjecutarConsulta($sql);
    }

    // Funcion para listar todos los registros sobre vehiculos
    public function listar()
    {
        $sql = "SELECT placa,marca,detalle,color,disponible FROM vehiculos";
        return EjecutarConsulta($sql);
    }

    // Funcion para editar informacion sobre vehiculos
    public function editar($placa, $detalle, $color, $disponible)
    {
        $sql = "UPDATE vehiculos SET detalle='$detalle',color='$color',disponible=$disponible WHERE placa = '$placa'";
        return EjecutarConsulta($sql);
    }

    // Funcion para buscar vehiculos
    public function buscar($placa)
    {
        $sql = "SELECT placa,marca,detalle,color,disponible FROM vehiculos WHERE cedula = '$placa'";
        return EjecutarConsulta($sql);
    }

    // Funcion para eliminar vehiculos
    public function eliminar($placa)
    {
        $sql = "DELETE FROM vehiculos WHERE placa = '$placa'";
        return EjecutarConsulta($sql);
    }
}
