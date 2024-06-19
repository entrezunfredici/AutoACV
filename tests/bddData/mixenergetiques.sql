-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 19 juin 2024 à 07:28
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
-- Structure de la table `mixenergetiques`
--

DROP TABLE IF EXISTS `mixenergetiques`;
CREATE TABLE IF NOT EXISTS `mixenergetiques` (
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
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`country`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `mixenergetiques`
--

INSERT INTO `mixenergetiques` (`country`, `wind`, `solar`, `geothermal`, `biomass`, `hydroelectric`, `nuclear`, `coal`, `oil`, `gaz_fired`, `source`, `createdAt`, `updatedAt`) VALUES
('Espagne', 12, 11, 11, 11, 11, 11, 11, 11, 11, 'https://unsitesurinternet2.fr', '2024-06-19 07:24:56', '2024-06-19 07:24:56'),
('France', 11, 11, 11, 11, 11, 11, 11, 12, 11, 'https://unsitesurinternet.com', '2024-06-19 07:24:56', '2024-06-19 07:24:56');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;