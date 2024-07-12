-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 12, 2024 at 03:40 PM
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
-- Table structure for table `mixenergetiques`
--

CREATE TABLE `mixenergetiques` (
  `country` varchar(255) NOT NULL,
  `wind` float NOT NULL,
  `solar` float NOT NULL,
  `geothermal` float NOT NULL,
  `biomass` float NOT NULL,
  `hydroelectric` float NOT NULL,
  `nuclear` float NOT NULL,
  `coal` float NOT NULL,
  `oil` float NOT NULL,
  `gaz_fired` float NOT NULL,
  `source` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `mixenergetiques`
--

INSERT INTO `mixenergetiques` (`country`, `wind`, `solar`, `geothermal`, `biomass`, `hydroelectric`, `nuclear`, `coal`, `oil`, `gaz_fired`, `source`, `createdAt`, `updatedAt`) VALUES
('Espagne', 12, 11, 11, 11, 11, 11, 11, 11, 11, 'https://unsitesurinternet2.fr', '2024-06-19 07:24:56', '2024-06-19 07:24:56'),
('France', 7, 13, 0, 1, 13, 65, 0, 0, 1, 'https://www.rte-france.com/eco2mix/la-production-delectricite-par-filiere', '2024-06-19 07:24:56', '2024-06-19 07:24:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mixenergetiques`
--
ALTER TABLE `mixenergetiques`
  ADD PRIMARY KEY (`country`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
