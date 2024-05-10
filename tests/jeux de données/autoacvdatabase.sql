-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 10, 2024 at 12:58 PM
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
-- Table structure for table `mixsenergetique`
--

CREATE TABLE `mixsenergetique` (
  `Id_MixEnergetiques` int(6) NOT NULL,
  `country` decimal(2,2) DEFAULT NULL,
  `wind` decimal(2,2) DEFAULT NULL,
  `solar` decimal(2,2) DEFAULT NULL,
  `geothermal` decimal(2,2) DEFAULT NULL,
  `biomass` decimal(2,2) DEFAULT NULL,
  `hydroelectric` decimal(2,2) DEFAULT NULL,
  `nuclear` decimal(2,2) DEFAULT NULL,
  `coal` decimal(2,2) DEFAULT NULL,
  `oil` decimal(2,2) DEFAULT NULL,
  `gaz_fired` decimal(2,2) DEFAULT NULL,
  `source` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `powersources`
--

CREATE TABLE `powersources` (
  `id_PowerSource` int(11) NOT NULL,
  `powerSource_name` varchar(255) NOT NULL,
  `powerSource_impact` float NOT NULL,
  `powerSource_info_sources` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `powersources`
--

INSERT INTO `powersources` (`id_PowerSource`, `powerSource_name`, `powerSource_impact`, `powerSource_info_sources`, `createdAt`, `updatedAt`) VALUES
(1, 'Coal', 820, 'source: https://www.ipcc.ch/site/assets/uploads/2018/02/ipcc_wg3_ar5_annex-iii.pdf', '2024-05-10 12:41:33', '2024-05-10 12:51:59'),
(2, 'Gaz', 490, 'source: https://www.ipcc.ch/site/assets/uploads/2018/02/ipcc_wg3_ar5_annex-iii.pdf', '2024-05-10 12:41:33', '2024-05-10 12:41:33'),
(3, 'Biomass(cofiring)', 740, 'source: https://www.ipcc.ch/site/assets/uploads/2018/02/ipcc_wg3_ar5_annex-iii.pdf', '2024-05-10 12:51:59', '2024-05-10 12:51:59'),
(4, 'Biomass(dedicated)', 230, 'source: https://www.ipcc.ch/site/assets/uploads/2018/02/ipcc_wg3_ar5_annex-iii.pdf', '2024-05-10 12:51:59', '2024-05-10 12:51:59'),
(5, 'Geothermal', 38, 'source: https://www.ipcc.ch/site/assets/uploads/2018/02/ipcc_wg3_ar5_annex-iii.pdf', '2024-05-10 12:51:59', '2024-05-10 12:51:59'),
(6, 'Hydropower', 24, 'source: https://www.ipcc.ch/site/assets/uploads/2018/02/ipcc_wg3_ar5_annex-iii.pdf', '2024-05-10 12:51:59', '2024-05-10 12:51:59'),
(7, 'Nuclear', 12, 'source: https://www.ipcc.ch/site/assets/uploads/2018/02/ipcc_wg3_ar5_annex-iii.pdf', '2024-05-10 12:51:59', '2024-05-10 12:51:59'),
(8, 'SolarPower', 27, 'source: https://www.ipcc.ch/site/assets/uploads/2018/02/ipcc_wg3_ar5_annex-iii.pdf', '2024-05-10 12:51:59', '2024-05-10 12:51:59'),
(9, 'Wind', 11, 'source: https://www.ipcc.ch/site/assets/uploads/2018/02/ipcc_wg3_ar5_annex-iii.pdf', '2024-05-10 12:51:59', '2024-05-10 12:51:59');

-- --------------------------------------------------------

--
-- Table structure for table `sourcesdenergie`
--

CREATE TABLE `sourcesdenergie` (
  `Id_SourcesDEnergie` int(6) NOT NULL,
  `wind` decimal(2,2) DEFAULT NULL,
  `biomass` decimal(2,2) DEFAULT NULL,
  `solar` decimal(2,2) DEFAULT NULL,
  `geotermal` decimal(2,2) DEFAULT NULL,
  `hydroelectric` decimal(2,2) DEFAULT NULL,
  `nuclear` decimal(2,2) DEFAULT NULL,
  `coal` decimal(2,2) DEFAULT NULL,
  `oil` decimal(2,2) DEFAULT NULL,
  `gaz_fired` decimal(2,2) DEFAULT NULL,
  `source` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tiquetsmixsenergetique`
--

CREATE TABLE `tiquetsmixsenergetique` (
  `Id_tiquetMixEnergetiques` int(6) NOT NULL,
  `country` decimal(2,2) DEFAULT NULL,
  `wind` decimal(2,2) DEFAULT NULL,
  `solar` decimal(2,2) DEFAULT NULL,
  `geothermal` decimal(2,2) DEFAULT NULL,
  `biomass` decimal(2,2) DEFAULT NULL,
  `hydroelectric` decimal(2,2) DEFAULT NULL,
  `nuclear` decimal(2,2) DEFAULT NULL,
  `coal` decimal(2,2) DEFAULT NULL,
  `oil` decimal(2,2) DEFAULT NULL,
  `gaz_fired` decimal(2,2) DEFAULT NULL,
  `source` varchar(200) DEFAULT NULL,
  `Id_Users` int(11) NOT NULL,
  `Id_MixEnergetiques` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tiquetssourcesdenergie`
--

CREATE TABLE `tiquetssourcesdenergie` (
  `Id_tiquetSourcesDEnergie` int(6) NOT NULL,
  `wind` decimal(2,2) DEFAULT NULL,
  `biomass` decimal(2,2) DEFAULT NULL,
  `solar` decimal(2,2) DEFAULT NULL,
  `geotermal` decimal(2,2) DEFAULT NULL,
  `hydroelectric` decimal(2,2) DEFAULT NULL,
  `nuclear` decimal(2,2) DEFAULT NULL,
  `coal` decimal(2,2) DEFAULT NULL,
  `oil` decimal(2,2) DEFAULT NULL,
  `gaz_fired` decimal(2,2) DEFAULT NULL,
  `source` varchar(200) DEFAULT NULL,
  `Id_Users` int(11) NOT NULL,
  `Id_SourcesDEnergie` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tiquetsvehicules`
--

CREATE TABLE `tiquetsvehicules` (
  `Id_tiquetVehicule` int(6) NOT NULL,
  `brand` varchar(50) DEFAULT NULL,
  `motorisation` varchar(50) DEFAULT NULL,
  `consumption` varchar(50) DEFAULT NULL,
  `buildImpact` varchar(50) DEFAULT NULL,
  `recycleImpact` varchar(50) DEFAULT NULL,
  `technology` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `source` varchar(200) DEFAULT NULL,
  `enginePower` varchar(50) DEFAULT NULL,
  `model` varchar(50) DEFAULT NULL,
  `Id_Users` int(11) NOT NULL,
  `Id_Vehicules` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `Id_Users` int(6) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `mail` varchar(50) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  `admin` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
(1, 'Tesla', 'grande autonomie AWD', 14, 11.5, 0, 'électrique', 'berline', 'mes sources sont: https://www.tesla.com/fr_fr/model3 https://www.tesla.com/fr_fr/support/power-consumption, https://www.nouvelr-energie.com/br/bilan-carbone-voiture-electrique et https://fr.wikipedia.org/wiki/Tesla_Model_3', 366, 'Model 3 (phase 3)', '2024-05-10 08:00:16', '2024-05-10 08:00:18');

-- --------------------------------------------------------

--
-- Table structure for table `vehicules`
--

CREATE TABLE `vehicules` (
  `Id_Vehicules` int(6) NOT NULL,
  `brand` varchar(50) DEFAULT NULL,
  `motorisation` varchar(50) DEFAULT NULL,
  `consumption` double DEFAULT NULL,
  `buildImpact` varchar(50) DEFAULT NULL,
  `recycleImpact` varchar(50) DEFAULT NULL,
  `technology` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `source` varchar(200) DEFAULT NULL,
  `enginePower` varchar(50) DEFAULT NULL,
  `model` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mixsenergetique`
--
ALTER TABLE `mixsenergetique`
  ADD PRIMARY KEY (`Id_MixEnergetiques`);

--
-- Indexes for table `powersources`
--
ALTER TABLE `powersources`
  ADD PRIMARY KEY (`id_PowerSource`);

--
-- Indexes for table `sourcesdenergie`
--
ALTER TABLE `sourcesdenergie`
  ADD PRIMARY KEY (`Id_SourcesDEnergie`);

--
-- Indexes for table `tiquetsmixsenergetique`
--
ALTER TABLE `tiquetsmixsenergetique`
  ADD PRIMARY KEY (`Id_tiquetMixEnergetiques`),
  ADD KEY `Id_Users` (`Id_Users`),
  ADD KEY `Id_MixEnergetiques` (`Id_MixEnergetiques`);

--
-- Indexes for table `tiquetssourcesdenergie`
--
ALTER TABLE `tiquetssourcesdenergie`
  ADD PRIMARY KEY (`Id_tiquetSourcesDEnergie`),
  ADD KEY `Id_Users` (`Id_Users`),
  ADD KEY `Id_SourcesDEnergie` (`Id_SourcesDEnergie`);

--
-- Indexes for table `tiquetsvehicules`
--
ALTER TABLE `tiquetsvehicules`
  ADD PRIMARY KEY (`Id_tiquetVehicule`),
  ADD KEY `Id_Users` (`Id_Users`),
  ADD KEY `Id_Vehicules` (`Id_Vehicules`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id_Users`);

--
-- Indexes for table `vehicles`
--
ALTER TABLE `vehicles`
  ADD PRIMARY KEY (`id_Vehicules`);

--
-- Indexes for table `vehicules`
--
ALTER TABLE `vehicules`
  ADD PRIMARY KEY (`Id_Vehicules`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mixsenergetique`
--
ALTER TABLE `mixsenergetique`
  MODIFY `Id_MixEnergetiques` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `powersources`
--
ALTER TABLE `powersources`
  MODIFY `id_PowerSource` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `sourcesdenergie`
--
ALTER TABLE `sourcesdenergie`
  MODIFY `Id_SourcesDEnergie` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tiquetsmixsenergetique`
--
ALTER TABLE `tiquetsmixsenergetique`
  MODIFY `Id_tiquetMixEnergetiques` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tiquetssourcesdenergie`
--
ALTER TABLE `tiquetssourcesdenergie`
  MODIFY `Id_tiquetSourcesDEnergie` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tiquetsvehicules`
--
ALTER TABLE `tiquetsvehicules`
  MODIFY `Id_tiquetVehicule` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `Id_Users` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vehicles`
--
ALTER TABLE `vehicles`
  MODIFY `id_Vehicules` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `vehicules`
--
ALTER TABLE `vehicules`
  MODIFY `Id_Vehicules` int(6) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tiquetsmixsenergetique`
--
ALTER TABLE `tiquetsmixsenergetique`
  ADD CONSTRAINT `tiquetsmixsenergetique_ibfk_1` FOREIGN KEY (`Id_Users`) REFERENCES `users` (`Id_Users`),
  ADD CONSTRAINT `tiquetsmixsenergetique_ibfk_2` FOREIGN KEY (`Id_MixEnergetiques`) REFERENCES `mixsenergetique` (`Id_MixEnergetiques`);

--
-- Constraints for table `tiquetssourcesdenergie`
--
ALTER TABLE `tiquetssourcesdenergie`
  ADD CONSTRAINT `tiquetssourcesdenergie_ibfk_1` FOREIGN KEY (`Id_Users`) REFERENCES `users` (`Id_Users`),
  ADD CONSTRAINT `tiquetssourcesdenergie_ibfk_2` FOREIGN KEY (`Id_SourcesDEnergie`) REFERENCES `sourcesdenergie` (`Id_SourcesDEnergie`);

--
-- Constraints for table `tiquetsvehicules`
--
ALTER TABLE `tiquetsvehicules`
  ADD CONSTRAINT `tiquetsvehicules_ibfk_1` FOREIGN KEY (`Id_Users`) REFERENCES `users` (`Id_Users`),
  ADD CONSTRAINT `tiquetsvehicules_ibfk_2` FOREIGN KEY (`Id_Vehicules`) REFERENCES `vehicules` (`Id_Vehicules`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
