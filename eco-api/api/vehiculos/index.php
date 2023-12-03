<?php

require_once "headers.php";
header('Content-Type: application/json');
// Obtiene el contenido JSON desde el cuerpo de la solicitud
$jsonData = file_get_contents('php://input');

// Decodifica el JSON a un array de PHP
$data = json_decode($jsonData, true);
require_once "vehiculosModel.php";

$vehiculos = new vehiculos();

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {

    case 'POST': // Ruta: /api/vehiculos 
        
        // Extraccion de parametros del body
        $placa = isset($data['placa']) ? $data['placa'] : '';
        $marca = isset($data['marca']) ? $data['marca'] : '';
        $detalle = isset($data['detalle']) ? $data['detalle'] : '';
        $color = isset($data['color']) ? $data['color'] : '';

        // Llamada al metodo del modelo
        $rspta = $vehiculos->insertar($placa, $marca, $detalle, $color);

        // Envio de respuesta
        echo json_encode($rspta ? ["success" => true, "msg" => "vehiculo insertado"] : ["success" => false, "msg" => "El vehiculo no se pudo registrar"]);
        break;
    case 'PUT': // Ruta: /api/vehiculos/{id} (Actualizar)
        
        //Exrae parametros del body
        $placa = isset($data['placa']) ? $data['placa'] : '';
        $detalle = isset($data['detalle']) ? $data['detalle'] : '';
        $color = isset($data['color']) ? $data['color'] : '';
        $disponible = isset($data['disponible']) ? $data['disponible'] : '';

        // Llama al metodo del modelo para editar
        $rspta = $vehiculos->editar($placa,$detalle,$color,$disponible);
        
        //Envia la respuesta
        echo json_encode($rspta ? ["success" => true, "msg" => "vehiculo actualizado"] : ["success" => false, "msg" => "vehiculo no se pudo actualizar"]);
        break;
    case 'DELETE': // Ruta: /api/vehiculos
        //Extrae la cedula de los parámetros de consulta (query parameters)
        $placa = isset($_GET['placa']) ? $_GET['placa'] : '';
        
        // Llama al metodo del modelo para eliminar
        $rspta = $vehiculos->eliminar($placa);
       
        // Envio de respuesta
        echo json_encode($rspta ? ["success" => true, "msg" => "Vehiculo eliminado"] : ["success" => false, "msg" => "El vehiculo no se pudo eliminar"]);
        break;
    case 'GET': // Ruta: /api/vehiculos
        
        // Llama al metodo del modelo para obtener TODOS los vehiculos 
        $rspta = $vehiculos->listar();

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