-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 10, 2024 at 09:06 AM
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
-- Table structure for table `usersmodels`
--

CREATE TABLE `usersmodels` (
  `id_Users` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `admin` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usersmodels`
--

INSERT INTO `usersmodels` (`id_Users`, `username`, `password`, `mail`, `admin`, `createdAt`, `updatedAt`) VALUES
(3, 'kévin', '$2b$10$Fy7TeFWwbyE8Js6yQVLtje.LiNSEP8emEHKnKHExA3A6fAjm60prS', 'kévin.fortnite@gmail.fr', 1, '2024-07-10 08:00:31', '2024-07-10 09:05:18'),
(1, 'titouan', '7TeFWwbyE8Js6yQVLtje.LiNSEP8emEHKnKHExA3A6fAjm60prS', 'titouan.fortnite@gmail.fr', 0, '2024-07-10 08:00:31', '2024-07-10 09:05:18'),
(2, 'riboul', '$2b$10$Fy7TeFWwNSEP8emEHKnKHExA3A6fAjm60prS', 'riboul.fortnite@gmail.fr', 1, '2024-07-10 08:00:31', '2024-07-10 09:05:18'),
(4, 'zizou', '$2b$10$Fy7TeFWwbyE8Js6yQVLtje.LiNSEP8emEHKnKHE60prS', 'zizou.fortnite@gmail.fr', 0, '2024-07-10 08:00:31', '2024-07-10 09:05:18'),
(5, 'albert', '$2b$10$Fy7TeFWwbyE8Js6yQVLtje', 'albert.fortnite@gmail.fr', 1, '2024-07-10 08:00:31', '2024-07-10 09:05:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `usersmodels`
--
ALTER TABLE `usersmodels`
  ADD PRIMARY KEY (`id_Users`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `usersmodels`
--
ALTER TABLE `usersmodels`
  MODIFY `id_Users` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
