-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 10 juil. 2024 à 09:22
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
-- Structure de la table `tiquetsources`
--

DROP TABLE IF EXISTS `tiquetsources`;
CREATE TABLE IF NOT EXISTS `tiquetsources` (
  `id_tiquetSource` int NOT NULL AUTO_INCREMENT,
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
  `id_source` int NOT NULL,
  `id_user` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_tiquetSource`),
  KEY `id_source` (`id_source`),
  KEY `id_user` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `tiquetsources`
--

INSERT INTO `tiquetsources` (`id_tiquetSource`, `wind`, `solar`, `geothermal`, `biomass`, `hydroelectric`, `nuclear`, `coal`, `oil`, `gaz_fired`, `source`, `id_source`, `id_user`, `createdAt`, `updatedAt`) VALUES
(1, 5.2, 3.5, 1, 0.7, 10.1, 12, 15.3, 8.5, 6, 'Test Source 1', 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 6.1, 4, 1.2, 0.8, 9.9, 11.8, 14.7, 7.8, 5.5, 'Test Source 2', 2, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 4.8, 2.9, 0.9, 0.5, 11.2, 13.5, 16, 9, 6.3, 'Test Source 3', 3, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 5.5, 3.8, 1.1, 0.6, 10.5, 12.2, 15, 8, 5.8, 'Test Source 4', 4, 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 6.3, 4.2, 1.3, 0.9, 9.8, 11.6, 14.8, 7.5, 5.6, 'Test Source 5', 5, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `tiquetsources`
--
ALTER TABLE `tiquetsources`
  ADD CONSTRAINT `tiquetsources_ibfk_1` FOREIGN KEY (`id_source`) REFERENCES `powersources` (`id_PowerSource`),
  ADD CONSTRAINT `tiquetsources_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `usersmodels` (`id_Users`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
