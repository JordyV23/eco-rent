<?php

header('Content-Type: application/json');
// Obtiene el contenido JSON desde el cuerpo de la solicitud
$jsonData = file_get_contents('php://input');

// Decodifica el JSON a un array de PHP
$data = json_decode($jsonData, true);
require_once "rentasModel.php";

$rentas = new rentas();

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {

    case 'POST': // Ruta: /api/rentas 
        
        // Extraccion de parametros del body
        $fechaRenta = isset($data['fechaRenta']) ? $data['fechaRenta'] : '';
        $fechaDevolucion = isset($data['fechaDevolucion']) ? $data['fechaDevolucion'] : '';
        $fechaVencimiento = isset($data['fechaVencimiento']) ? $data['fechaVencimiento'] : '';
        $cedula = isset($data['cedula']) ? $data['cedula'] : '';
        $placa = isset($data['placa']) ? $data['placa'] : '';

        // Llamada al metodo del modelo
        $rspta = $rentas->insertar($fechaRenta, $fechaDevolucion, $fechaVencimiento, $cedula,$placa);

        // Envio de respuesta
        echo json_encode($rspta ? ["success" => true, "msg" => "renta insertada"] : ["success" => false, "msg" => "La renta no se pudo registrar"]);
        break;
    case 'PUT': // Ruta: /api/rentas/{id} (Actualizar)
        
        //Exrae parametros del body
        $idRenta = isset($data['idRenta']) ? $data['idRenta'] : '';
        $fechaRenta = isset($data['fechaRenta']) ? $data['fechaRenta'] : '';
        $fechaDevolucion = isset($data['fechaDevolucion']) ? $data['fechaDevolucion'] : '';
        $fechaVencimiento = isset($data['fechaVencimiento']) ? $data['fechaVencimiento'] : '';
        $cedula = isset($data['cedula']) ? $data['cedula'] : '';
        $placa = isset($data['placa']) ? $data['placa'] : '';

        // Llama al metodo del modelo para editar
        $rspta = $rentas->editar($idRenta,$fechaRenta,$fechaDevolucion,$fechaVencimiento,$cedula,$placa);
        
        //Envia la respuesta
        echo json_encode($rspta ? ["success" => true, "msg" => "renta actualizada"] : ["success" => false, "msg" => "La renta no se pudo actualizar"]);
        break;
    case 'DELETE': // Ruta: /api/rentas
        //Extrae la cedula del body
        $idRenta = isset($_GET['idRenta']) ? $_GET['idRenta'] : '';
        
        // Llama al metodo del modelo para eliminar
        $rspta = $rentas->eliminar($idRenta);
       
        // Envio de respuesta
        echo json_encode($rspta ? ["success" => true, "msg" => "renta eliminado"] : ["success" => false, "msg" => "La renta no se pudo eliminar"]);
        break;
    case 'GET': // Ruta: /api/rentas
        
        // Llama al metodo del modelo para obtener TODOS los rentas 
        $rspta = $rentas->listar();

        // Valida que hayan datos en los registros obtenidos 
        if ($rspta->num_rows > 0) {
            // Si hay declara un arreglo para guardar los datos
            $data = array();
            // Recorre los valores obtenidos del modelo y los almacena en el arreglo
            while ($row = $rspta->fetch_assoc()) {
                $data[] = $row;
            }
            $rspta->free();
           
            // Envia respuesta al cliente
            echo json_encode($data);
        } else {
           
            // Si no hay valores responde con mensaje de exito pero no hay datos
            echo json_encode(["success" => true, "msg" => "No hay registros"]);
        }
        break;
    default:
        // Si no es ninguno de los metodos POST, PUT, DELETE O GET , retorna mensaje de metodo no soportado/permitido
        echo json_encode(["success" => false, "msg" => "Método no permitido"]);
        break;
}

?>