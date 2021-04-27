-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 27, 2021 at 08:30 PM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `maestro`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(50) NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `motdepasse` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `nom`, `motdepasse`) VALUES
(1, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `apprenant`
--

CREATE TABLE `apprenant` (
  `id` int(50) NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `motdepasse` varchar(50) DEFAULT NULL,
  `image` varchar(50) DEFAULT NULL,
  `mail` varchar(50) DEFAULT NULL,
  `age` int(50) DEFAULT NULL,
  `genre` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `apprenant`
--

INSERT INTO `apprenant` (`id`, `nom`, `motdepasse`, `image`, `mail`, `age`, `genre`) VALUES
(3, 'nina', '78515', '', 'nina@maestro.com', 42, 'femme');

-- --------------------------------------------------------

--
-- Table structure for table `enseignant`
--

CREATE TABLE `enseignant` (
  `id` int(50) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `motdepasse` varchar(50) NOT NULL,
  `image` varchar(50) DEFAULT 'NULL',
  `mail` varchar(50) NOT NULL,
  `age` int(50) DEFAULT NULL,
  `genre` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `enseignant`
--

INSERT INTO `enseignant` (`id`, `nom`, `motdepasse`, `image`, `mail`, `age`, `genre`) VALUES
(1, 'richard', '4141515', '', 'richard@maestro.com', 42, 'homme'),
(2, 'nina', '78515', '', 'nina@maestro.com', 42, 'femme'),
(3, 'Professeur lea', '4141515', './test.jpg', 'lea@maestro.com', 37, 'femme'),
(4, 'Professeur lea', '4141515', './test.jpg', 'lea@maestro.com', 37, 'femme'),
(5, 'Professeur lea', '4141515', './test.jpg', 'lea@maestro.com', 37, 'femme'),
(6, 'Professeur lea', '4141515', './test.jpg', 'lea@maestro.com', 37, 'femme'),
(7, 'Professeur reddington', '1545', '', 'reddington@maestro.com', 52, 'homme'),
(8, 'Professeur trevor', '124654', '', 'trevor@maestro.com', 23, 'homme'),
(9, 'Professeur trevor', '124654', '', 'trevor@maestro.com', 23, 'homme'),
(10, 'Professeur trevor', '124654', '', 'trevor@maestro.com', 23, 'homme'),
(11, 'Professeur trevor', '124654', '', 'trevor@maestro.com', 23, 'homme'),
(12, 'Professeur trevor', '124654', '', 'trevor@maestro.com', 23, 'homme'),
(13, 'Professeur reddington', '1545', '', 'reddington@maestro.com', 52, 'homme'),
(14, 'Professeur trevor', '124654', '', 'trevor@maestro.com', 23, 'homme'),
(15, 'Professeur reddington', '1545', '', 'reddington@maestro.com', 52, 'homme'),
(16, 'Professeur trevor', '124654', '', 'trevor@maestro.com', 23, 'homme'),
(17, 'Professeur reddington', '1545', '', 'reddington@maestro.com', 52, 'homme'),
(18, 'Professeur reddington', '1545', '', 'reddington@maestro.com', 52, 'homme'),
(19, 'Professeur reddington', '1545', '', 'reddington@maestro.com', 52, 'homme'),
(20, 'Professeur reddington', '1545', '', 'reddington@maestro.com', 52, 'homme'),
(21, 'Professeur trevor', '124654', '', 'trevor@maestro.com', 23, 'homme'),
(22, 'Professeur reddington', '1545', '', 'reddington@maestro.com', 52, 'homme');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `apprenant`
--
ALTER TABLE `apprenant`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `enseignant`
--
ALTER TABLE `enseignant`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `apprenant`
--
ALTER TABLE `apprenant`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `enseignant`
--
ALTER TABLE `enseignant`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
