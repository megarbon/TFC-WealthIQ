-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 26, 2024 at 02:16 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfoliosdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `investment`
--

CREATE TABLE `investment` (
  `investment_id` bigint(20) NOT NULL,
  `amount` int(11) DEFAULT NULL,
  `asset_id` bigint(20) DEFAULT NULL,
  `investment_portfolio_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `investment`
--

INSERT INTO `investment` (`investment_id`, `amount`, `asset_id`, `investment_portfolio_id`) VALUES
(1, 2, 1, 1),
(2, 5, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `investment_portfolio`
--

CREATE TABLE `investment_portfolio` (
  `investment_portfolio_id` bigint(20) NOT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `investment_portfolio`
--

INSERT INTO `investment_portfolio` (`investment_portfolio_id`, `user_id`) VALUES
(1, 1),
(2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `stock`
--

CREATE TABLE `stock` (
  `stock_id` bigint(20) NOT NULL,
  `stock_market` varchar(255) NOT NULL,
  `stock_name` varchar(255) NOT NULL,
  `stock_symbol` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stock`
--

INSERT INTO `stock` (`stock_id`, `stock_market`, `stock_name`, `stock_symbol`) VALUES
(1, 'NASDAQ', 'Apple', 'APPL'),
(2, 'NASDAQ', 'Microsoft', 'MSFT');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` bigint(20) NOT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `profile_pic_url` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `bio`, `email`, `password`, `profile_pic_url`, `username`) VALUES
(1, NULL, NULL, NULL, NULL, 'melaku'),
(2, NULL, NULL, NULL, NULL, 'gary');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `investment`
--
ALTER TABLE `investment`
  ADD PRIMARY KEY (`investment_id`),
  ADD KEY `FKekfbtg0pgb473rdal8hsynft` (`asset_id`),
  ADD KEY `FKmt5im62jtqc0quu8qey4rgnwx` (`investment_portfolio_id`);

--
-- Indexes for table `investment_portfolio`
--
ALTER TABLE `investment_portfolio`
  ADD PRIMARY KEY (`investment_portfolio_id`),
  ADD UNIQUE KEY `UK_osblcotisr5gu5bkmjhlclhmy` (`user_id`);

--
-- Indexes for table `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`stock_id`),
  ADD UNIQUE KEY `UK_cdttd3yp4i4etaq8ormxn4htc` (`stock_name`),
  ADD UNIQUE KEY `UK_5fm0245i3boai6gfh3q0l6usq` (`stock_symbol`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `investment`
--
ALTER TABLE `investment`
  MODIFY `investment_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `investment_portfolio`
--
ALTER TABLE `investment_portfolio`
  MODIFY `investment_portfolio_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `stock`
--
ALTER TABLE `stock`
  MODIFY `stock_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `investment`
--
ALTER TABLE `investment`
  ADD CONSTRAINT `FKekfbtg0pgb473rdal8hsynft` FOREIGN KEY (`asset_id`) REFERENCES `stock` (`stock_id`),
  ADD CONSTRAINT `FKmt5im62jtqc0quu8qey4rgnwx` FOREIGN KEY (`investment_portfolio_id`) REFERENCES `investment_portfolio` (`investment_portfolio_id`);

--
-- Constraints for table `investment_portfolio`
--
ALTER TABLE `investment_portfolio`
  ADD CONSTRAINT `FKlgwtybwmbk7bgv2jpeeaxrchi` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
