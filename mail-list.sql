-- MariaDB dump 10.19  Distrib 10.8.3-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: nolan_newsletter
-- ------------------------------------------------------
-- Server version	10.8.3-MariaDB-1:10.8.3+maria~focal

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
-- Table structure for table `subscribes`
--

DROP TABLE IF EXISTS `subscribes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subscribes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) DEFAULT NULL,
  `date_inscription` date DEFAULT curdate(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `mail` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscribes`
--

LOCK TABLES `subscribes` WRITE;
/*!40000 ALTER TABLE `subscribes` DISABLE KEYS */;
INSERT INTO `subscribes` VALUES
(16,'ohlalaquecestbon@dtc.com','2022-07-05'),
(18,'allolola@dedsd.com','2022-07-05'),
(19,'coming@gmail.sup','2022-07-05'),
(20,'formationecho@lol.fr','2022-07-05'),
(21,'sdqdqsdqs@ddsq.com','2022-07-05'),
(22,'xwxaas@duc.fr','2022-07-05'),
(23,'dsdsqdsd@dqdsdq.fr','2022-07-05'),
(24,'ntjytgeffs@vscxw.fr','2022-07-05'),
(25,'azerty@devsv.com','2022-07-05'),
(26,'poutine@russie.uk','2022-07-05'),
(27,'lefromagecestbon@camembert.com','2022-07-05'),
(28,'onalatriquetouslesmatins@dtc.com','2022-07-05'),
(29,'cestdurlepdo@dsqdqsd.com','2022-07-05'),
(30,'aaaaaaa@aaaaa.com','2022-07-05'),
(31,'bbbbb@bb9.net','2022-07-05'),
(32,'cccccc@deded.net','2022-07-05');
/*!40000 ALTER TABLE `subscribes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-07 16:10:45
