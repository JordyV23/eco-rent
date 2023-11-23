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

?>