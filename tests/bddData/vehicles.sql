-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 12, 2024 at 03:38 PM
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
  `useImpact` float DEFAULT NULL,
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

INSERT INTO `vehicles` (`id_Vehicules`, `brand`, `motorisation`, `consumption`, `buildImpact`, `recycleImpact`, `useImpact`, `technology`, `type`, `source`, `enginePower`, `model`, `createdAt`, `updatedAt`) VALUES
(2, 'Tesla', 'grande autonomie AWD', 18.7, 11.5, 0, 0, 'electric', 'Sedan', 'mes sources sonthttps://www.tesla.com/fr_fr/models https://www.tesla.com/fr_fr/support/power-consumption, https://www.nouvelr-energie.com/br/bilan-carbone-voiture-electrique', 670, 'Model S (phase 3)', '2024-07-12 14:24:25', '2024-07-12 14:24:25'),
(3, 'Toyota', 'XW30', 4.5, 2.3, 1.1, 89, 'hybrid', 'Sedan', 'Official Report', 136, 'Prius', '2024-06-19 10:00:00', '2024-06-19 10:00:00'),
(4, 'Tesla', '60D', 16.9, 3, 0.8, 0, 'electric', 'SUV', 'Manufacturer and wikipedia https://fr.wikipedia.org/wiki/Tesla_Model_X', 332, 'Model X (phase 1)', '2024-06-19 10:00:00', '2024-06-19 10:00:00'),
(5, 'Ford', 'V8, 4,6 L', 8.5, 4.2, 2.5, 250, 'diesel', 'Truck', 'Industry Analysis', 248, 'F-150', '2024-06-19 10:00:00', '2024-06-19 10:00:00'),
(6, 'BMW', '', 7, 3.5, 1.7, 230, 'petrol', 'Coupe', 'Journal Review', 220, 'M4', '2024-06-19 10:00:00', '2024-06-19 10:00:00'),
(7, 'Nissan', '', 10.75, 2.8, 1, 0, 'electric', 'Hatchback', 'Environmental Study and wikipedia= https://fr.wikipedia.org/wiki/Nissan_Leaf', 110, 'Leaf ZE0', '2024-06-19 10:00:00', '2024-06-19 10:00:00');

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
  MODIFY `id_Vehicules` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
