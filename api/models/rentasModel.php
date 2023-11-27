<?php
//Incluímos inicialmente la conexión a la base de datos
require "../config/Conexion.php";


class rentas
{
    //Constructor de rentas
    public function __construct()
    {
    }

    // Funcion para insertar rentas
    public function insertar($fechaRenta, $fechaDevolucion, $fechaVencimiento, $cedula, $placa)
    {
        $sql = "INSERT INTO rentas (fechaRenta,fechaVencimiento,cedula,placa) VALUES ('$fechaRenta','$fechaVencimiento','$cedula','$placa')";
        return EjecutarConsulta($sql);
    }

    // Funcion para listar todos los registros sobre rentas
    public function listar()
    {
        $sql = "SELECT idRenta,fechaRenta,fechaDevolucion,fechaVencimiento,cedula,placa FROM rentas";
        return EjecutarConsulta($sql);
    }

    // Funcion para editar informacion sobre rentas
    public function editar($idRenta, $fechaRenta, $fechaDevolucion, $fechaVencimiento, $cedula, $placa)
    {
        $sql = "UPDATE rentas SET fechaRenta='$fechaRenta',fechaDevolucion='$fechaDevolucion',fechaVencimiento='$fechaVencimiento',cedula='$cedula',placa='$placa' WHERE idRenta = $idRenta";
        return EjecutarConsulta($sql);
    }

    // Funcion para buscar rentas
    public function buscar($idRenta)
    {
        $sql = "SELECT idRenta,fechaRenta,fechaDevolucion,fechaVencimiento,cedula,placa FROM rentas WHERE idRenta = $idRenta";
        return EjecutarConsulta($sql);
    }

    // Funcion para eliminar rentas
    public function eliminar($idRenta)
    {
        $sql = "DELETE FROM rentas WHERE idRenta = $idRenta";
        return EjecutarConsulta($sql);
    }
}
