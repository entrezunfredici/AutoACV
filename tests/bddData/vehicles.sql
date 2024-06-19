-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 19, 2024 at 09:26 AM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `autoacvdatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `vehicles`
--

CREATE TABLE `vehicles` (
  `id_Vehicules` int(11) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `motorisation` varchar(255) NOT NULL,
  `consumption` float NOT NULL,
  `buildImpact` float DEFAULT NULL,
  `recycleImpact` float DEFAULT NULL,
  `technology` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `source` varchar(255) NOT NULL,
  `enginePower` int(11) DEFAULT NULL,
  `model` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `vehicles`
--

INSERT INTO `vehicles` (`id_Vehicules`, `brand`, `motorisation`, `consumption`, `buildImpact`, `recycleImpact`, `technology`, `type`, `source`, `enginePower`, `model`, `createdAt`, `updatedAt`) VALUES
(1, 'Tesla', 'grande autonomie AWD', 13.3, 11.5, 0, 'électrique', 'berline', 'mes sources sont: https://www.tesla.com/fr_fr/support/power-consumption, https://www.nouvelr-energie.com/br/bilan-carbone-voiture-electrique et https://fr.wikipedia.org/wiki/Tesla_Model_S', 670, 'ModelS (phase 3)', '2024-05-10 08:00:16', '2024-06-19 07:05:55'),
(4, 'Tesla', 'grande autonomie AWD', 13.3, 11.5, 0, 'électrique', 'berline', 'mes sources sont: https://www.tesla.com/fr_fr/model3 https://www.tesla.com/fr_fr/support/power-consumption, https://www.nouvelr-energie.com/br/bilan-carbone-voiture-electrique', 670, 'Model S (phase 3)', '2024-06-19 08:51:59', '2024-06-19 08:51:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `vehicles`
--
ALTER TABLE `vehicles`
  ADD PRIMARY KEY (`id_Vehicules`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `vehicles`
--
ALTER TABLE `vehicles`
  MODIFY `id_Vehicules` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
