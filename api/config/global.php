<?php 
require '../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable('../');
$dotenv->load();


//Ip de la pc servidor de base de datos
define("DB_HOST",$_ENV['DBHOST']);

//Nombre de la base de datos
define("DB_NAME", $_ENV['DBNAME']);

//Usuario de la base de datos
define("DB_USERNAME", $_ENV['DBUSER']);

//Contraseña del usuario de la base de datos
define("DB_PASSWORD", $_ENV['DBPASS']);

//definimos la codificación de los caracteres
define("DB_ENCODE","utf8");

// Función para desencriptar datos con AES-256-ECB desde JAVA
function decryptData($encryptedData, $key)
{
    // Decodificar el texto cifrado (Base64)
    $encryptedData = base64_decode($encryptedData);

    // Crea un objeto Cipher con el algoritmo AES y el modo ECB
    $cipher = "aes-256-ecb";
    $options = OPENSSL_RAW_DATA;
    $decryption_iv = '';

    // Desencriptar con AES-256-ECB
    $decryptedData = openssl_decrypt($encryptedData, $cipher, $key, $options, $decryption_iv);

    return $decryptedData;
}

?>