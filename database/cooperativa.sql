-- MariaDB dump 10.17  Distrib 10.4.11-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: cooperativa
-- ------------------------------------------------------
-- Server version	10.4.11-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientes` (
  `Identificacion` bigint(20) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Telefono` varchar(13) NOT NULL,
  `Correo` varchar(30) NOT NULL,
  PRIMARY KEY (`Identificacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1024132354,'Tomas arenas velez','3113378220','tomas@gmail.com'),(1026143179,'randal velez','3113378221','randal@gmail.com'),(1037633965,'juan pablo arenas velez','3113378220','juan@gmail.com'),(1038465294,'Juan arenas ','3113338330','juan@gmail.com');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cuenta_ahorros`
--

DROP TABLE IF EXISTS `cuenta_ahorros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cuenta_ahorros` (
  `Numero_cuenta` bigint(20) DEFAULT NULL,
  `Identificacion` bigint(20) NOT NULL,
  `Saldo_cuenta` int(11) NOT NULL,
  PRIMARY KEY (`Identificacion`),
  UNIQUE KEY `Identificacion` (`Identificacion`),
  UNIQUE KEY `Numero_cuenta` (`Numero_cuenta`),
  CONSTRAINT `cuenta_ahorros_ibfk_1` FOREIGN KEY (`Identificacion`) REFERENCES `clientes` (`Identificacion`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuenta_ahorros`
--

LOCK TABLES `cuenta_ahorros` WRITE;
/*!40000 ALTER TABLE `cuenta_ahorros` DISABLE KEYS */;
INSERT INTO `cuenta_ahorros` VALUES (3113372476,1024132354,200000),(1234554321,1026143179,1000000),(123456789012,1037633965,200000),(1038294436,1038465294,900000);
/*!40000 ALTER TABLE `cuenta_ahorros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta`
--

DROP TABLE IF EXISTS `tarjeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta` (
  `Numero_tarjeta` bigint(20) NOT NULL,
  `Identificacion` bigint(20) NOT NULL,
  `Saldo_tarjeta` int(11) NOT NULL,
  PRIMARY KEY (`Identificacion`),
  UNIQUE KEY `Numero_tarjeta` (`Numero_tarjeta`),
  CONSTRAINT `tarjeta_ibfk_1` FOREIGN KEY (`Identificacion`) REFERENCES `clientes` (`Identificacion`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta`
--

LOCK TABLES `tarjeta` WRITE;
/*!40000 ALTER TABLE `tarjeta` DISABLE KEYS */;
INSERT INTO `tarjeta` VALUES (3113372324,1024132354,100000),(2234554321,1026143179,2000000),(123434658790,1037633965,200000),(1038294765,1038465294,1450000);
/*!40000 ALTER TABLE `tarjeta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-03 17:13:33
