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
-- Structure de la table `tiquetvehicles`
--

DROP TABLE IF EXISTS `tiquetvehicles`;
CREATE TABLE IF NOT EXISTS `tiquetvehicles` (
  `id_tiquetVehicules` int NOT NULL AUTO_INCREMENT,
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
  `id_vehicule` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_tiquetVehicules`),
  KEY `id_vehicule` (`id_vehicule`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `tiquetvehicles`
--

INSERT INTO `tiquetvehicles` (`id_tiquetVehicules`, `brand`, `motorisation`, `consumption`, `buildImpact`, `recycleImpact`, `dutyCycle`, `useImpact`, `technology`, `type`, `source`, `enginePower`, `model`, `id_vehicule`, `id_user`, `createdAt`, `updatedAt`) VALUES
(1, 'Tesla', 'grande autonomie AWD', 18.7, 11.5, 0, 500000, 0, 'électrique', 'berline', 'mes sources sonthttps://www.tesla.com/fr_fr/models https://www.tesla.com/fr_fr/support/power-consumption, https://www.nouvelr-energie.com/br/bilan-carbone-voiture-electrique', 670, 'Model S (phase 3)', 1, 1, '2024-07-14 10:28:15', '2024-07-14 10:28:15'),
(2, 'Toyota', 'XW30', 40.05, 2.3, 1.1, 500000, 89, 'hybrid', 'Sedan', 'Official Report', 150, 'Prius', 2, 1, '2024-06-19 10:00:00', '2024-06-19 10:00:00'),
(3, 'Tesla', '60D', 16.9, 3, 0.8, 500000, 0, 'electric', 'SUV', 'Manufacturer and wikipedia https://fr.wikipedia.org/wiki/Tesla_Model_X', 332, 'Model X (phase 1)', 3, 2, '2024-06-19 10:00:00', '2024-06-19 10:00:00'),
(4, 'Ford', 'V8, 4,6 L', 91.29, 4.2, 2.5, 500000, 250, 'diesel', 'Truck', 'Industry Analysis', 248, 'F-150', 4, 2, '2024-06-19 10:00:00', '2024-06-19 10:00:00'),
(5, 'BMW', '', 62.3, 3.5, 1.7, 500000, 230, 'petrol', 'Coupe', 'Journal Review', 220, 'M4', 5, 3,'2024-06-19 10:00:00', '2024-06-19 10:00:00'),
(6, 'Nissan', '', 10.75, 2.8, 1, 500000, 0, 'electric', 'Hatchback', 'Environmental Study and wikipedia= https://fr.wikipedia.org/wiki/Nissan_Leaf', 110, 'Leaf ZE0', 6, 3,'2024-06-19 10:00:00', '2024-06-19 10:00:00');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `tiquetvehicles`
--
ALTER TABLE `tiquetvehicles`
  ADD CONSTRAINT `tiquetvehicles_ibfk_1` FOREIGN KEY (`id_vehicule`) REFERENCES `vehicles` (`id_Vehicules`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
