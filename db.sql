-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.28 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para ecorent
CREATE DATABASE IF NOT EXISTS `ecorent` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ecorent`;

-- Volcando estructura para tabla ecorent.rentas
CREATE TABLE IF NOT EXISTS `rentas` (
  `idRenta` int NOT NULL AUTO_INCREMENT,
  `fechaRenta` date NOT NULL,
  `fechaDevolucion` date DEFAULT NULL,
  `fechaVencimiento` date NOT NULL,
  `cedula` varchar(9) NOT NULL DEFAULT '',
  `placa` varchar(7) NOT NULL DEFAULT '',
  PRIMARY KEY (`idRenta`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla ecorent.rentas: ~2 rows (aproximadamente)

-- Volcando estructura para tabla ecorent.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `cedula` varchar(9) NOT NULL DEFAULT '',
  `nombre` varchar(50) NOT NULL DEFAULT '',
  `apellidos` varchar(50) NOT NULL DEFAULT '',
  `fechaNacimiento` date NOT NULL,
  `password` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'Password1234',
  `email` varchar(50) NOT NULL DEFAULT '',
  `rol` varchar(50) NOT NULL,
  PRIMARY KEY (`cedula`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla ecorent.usuarios: ~3 rows (aproximadamente)
INSERT INTO `usuarios` (`cedula`, `nombre`, `apellidos`, `fechaNacimiento`, `password`, `email`, `rol`) VALUES
	('117000929', 'Cynthia', 'Martinez Alvarez', '1998-01-31', '1234', 'cynthia3@gmail.com', 'admin');

-- Volcando estructura para tabla ecorent.vehiculos
CREATE TABLE IF NOT EXISTS `vehiculos` (
  `placa` varchar(7) NOT NULL,
  `marca` varchar(50) NOT NULL,
  `detalle` text NOT NULL,
  `color` varchar(20) NOT NULL,
  `disponible` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`placa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla ecorent.vehiculos: ~2 rows (aproximadamente)
INSERT INTO `vehiculos` (`placa`, `marca`, `detalle`, `color`, `disponible`) VALUES
	('ddd-777', 'Toyota', 'Modelo 15', 'rojo', b'1');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
