<?php

require_once "../config/headers.php";

header('Content-Type: application/json');
// Obtiene el contenido JSON desde el cuerpo de la solicitud
$jsonData = file_get_contents('php://input');

$headers = getallheaders();


// Decodifica el JSON a un array de PHP
$data = json_decode($jsonData, true);
require_once "../models/usuariosModel.php";


function decryptJS($encryptedData)
{
    $encrypted = base64_decode($encryptedData);
    $key = 'clave_secreta';
    $iv = '';
    $decrypted = openssl_decrypt($encrypted, 'aes-256-ecb', $key, OPENSSL_RAW_DATA, $iv);
    return $decrypted;
}

$usuarios = new usuarios();

// $method = $_SERVER['REQUEST_METHOD'];

switch ($method) {

    case 'POST': // Ruta: /api/usuarios 

        $opt = $_GET['opt'];

        if ($opt == 'JAVA') {
            $HeaderCedula = $headers['cedula'];
            $HeaderPassword = $headers['password'];

            $rspta = $usuarios->validar($HeaderCedula, $HeaderPassword);

            if ($rspta->num_rows != 1) {
                echo json_encode(["success" => false, "msg" => "Usuario No encontrado"]);
                break;
            }

            //Obtener unicamente JSON
            $encryptedData = file_get_contents("php://input");
            // Desencriptar los datos
            $decryptedData = decryptData($encryptedData, "WEB3UTN");
            $data = json_decode($decryptedData, true);
        }

        // Extraccion de parametros del body
        $cedula = isset($data['cedula']) ? $data['cedula'] : '';
        $nombre = isset($data['nombre']) ? $data['nombre'] : '';
        $apellidos = isset($data['apellidos']) ? $data['apellidos'] : '';
        $fechaNacimiento = isset($data['fechaNacimiento']) ? $data['fechaNacimiento'] : '';
        $password = isset($data['password']) ? $data['password'] : '';
        $email = isset($data['email']) ? $data['email'] : '';

        // Llamada al metodo del modelo
        $rspta = $usuarios->insertar($cedula, $nombre, $apellidos, $fechaNacimiento, $password, $email);

        // Envio de respuesta
        echo json_encode($rspta ? ["success" => true, "msg" => "usuario insertado"] : ["success" => false, "msg" => "Usuario no se pudo registrar"]);
        break;

    case 'PUT': // Ruta: /api/usuarios/{id} (Actualizar)

        $opt = $_GET['opt'];

        if ($opt == 'JAVA') {

            $HeaderCedula = $headers['cedula'];
            $HeaderPassword = $headers['password'];

            $rspta = $usuarios->validar($HeaderCedula, $HeaderPassword);

            if ($rspta->num_rows != 1) {
                echo json_encode(["success" => false, "msg" => "Usuario No encontrado"]);
                return;
            }


            //Obtener unicamente JSON
            $encryptedData = file_get_contents("php://input");
            // Desencriptar los datos
            $decryptedData = decryptData($encryptedData, "WEB3UTN");
            $data = json_decode($decryptedData, true);
        }

        //Exrae parametros del body
        $cedula = isset($data['cedula']) ? $data['cedula'] : '';
        $password = isset($data['password']) ? $data['password'] : '';
        $email = isset($data['email']) ? $data['email'] : '';
        $rol = isset($data['rol']) ? $data['rol'] : '';

        // Llama al metodo del modelo para editar
        $rspta = $usuarios->editar($cedula, $password, $email, $rol);

        //Envia la respuesta
        echo json_encode($rspta ? ["success" => true, "msg" => "usuario actualizado"] : ["success" => false, "msg" => "Usuario no se pudo actualizar"]);
        break;
    case 'DELETE': // Ruta: /api/usuarios
        // Extraer la cédula de los parámetros de consulta (query parameters)
        $cedula = isset($_GET['cedula']) ? $_GET['cedula'] : '';

        // Llama al método del modelo para eliminar
        $rspta = $usuarios->eliminar($cedula);

        // Envío de respuesta
        echo json_encode($rspta ? ["success" => true, "msg" => "Usuario eliminado"] : ["success" => false, "msg" => "El usuario no se pudo eliminar"]);
        break;
    case 'GET': // Ruta: /api/usuarios

        // Llama al metodo del modelo para obtener TODOS los usuarios 
        $rspta = $usuarios->listar();

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