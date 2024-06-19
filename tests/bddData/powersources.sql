-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 19, 2024 at 09:25 AM
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

--
-- Indexes for dumped tables
--

--
-- Indexes for table `powersources`
--
ALTER TABLE `powersources`
  ADD PRIMARY KEY (`id_PowerSource`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `powersources`
--
ALTER TABLE `powersources`
  MODIFY `id_PowerSource` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
