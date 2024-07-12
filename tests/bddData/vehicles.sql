-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 19 juin 2024 à 09:53
-- Version du serveur : 8.2.0
-- Version de PHP : 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `autoacvdatabase`
--

-- --------------------------------------------------------

--
-- Structure de la table `vehicles`
--

DROP TABLE IF EXISTS `vehicles`;
CREATE TABLE IF NOT EXISTS `vehicles` (
  `id_Vehicules` int NOT NULL AUTO_INCREMENT,
  `brand` varchar(255) NOT NULL,
  `motorisation` varchar(255) NOT NULL,
  `consumption` float NOT NULL,
  `buildImpact` float DEFAULT NULL,
  `recycleImpact` float DEFAULT NULL,
  `technology` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `source` varchar(255) NOT NULL,
  `enginePower` int DEFAULT NULL,
  `model` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_Vehicules`)
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `vehicles`
--

INSERT INTO `vehicles` (`id_Vehicules`, `brand`, `motorisation`, `consumption`, `buildImpact`, `recycleImpact`, `technology`, `type`, `source`, `enginePower`, `model`, `createdAt`, `updatedAt`) VALUES
(101, 'Toyota', 'Hybrid', 4.5, 2.3, 1.1, 'Electric', 'Sedan', 'Official Report', 150, 'Prius', '2024-06-19 10:00:00', '2024-06-19 10:00:00'),
(102, 'Tesla', 'Electric', 0, 3, 0.8, 'Battery', 'SUV', 'Manufacturer', 300, 'Model X', '2024-06-19 10:00:00', '2024-06-19 10:00:00'),
(103, 'Ford', 'Diesel', 8.5, 4.2, 2.5, 'Combustion', 'Truck', 'Industry Analysis', 250, 'F-150', '2024-06-19 10:00:00', '2024-06-19 10:00:00'),
(104, 'BMW', 'Petrol', 7, 3.5, 1.7, 'Internal Combustion', 'Coupe', 'Journal Review', 220, 'M4', '2024-06-19 10:00:00', '2024-06-19 10:00:00'),
(105, 'Nissan', 'Electric', 0, 2.8, 1, 'Battery', 'Hatchback', 'Environmental Study', 110, 'Leaf', '2024-06-19 10:00:00', '2024-06-19 10:00:00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;