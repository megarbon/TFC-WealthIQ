-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: wealthiq_db:3306
-- Generation Time: Jun 06, 2024 at 04:50 PM
-- Server version: 8.0.37
-- PHP Version: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wealthiq_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `investment`
--

CREATE TABLE `investment` (
  `investment_id` bigint NOT NULL,
  `amount` int DEFAULT NULL,
  `asset_id` bigint DEFAULT NULL,
  `investment_portfolio_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `investment_portfolio`
--

CREATE TABLE `investment_portfolio` (
  `investment_portfolio_id` bigint NOT NULL,
  `user_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `investment_portfolio`
--

INSERT INTO `investment_portfolio` (`investment_portfolio_id`, `user_id`) VALUES
(1, 2),
(2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `role_id` int NOT NULL,
  `authority` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`role_id`, `authority`) VALUES
(1, 'ADMIN'),
(2, 'USER');

-- --------------------------------------------------------

--
-- Table structure for table `roles_seq`
--

CREATE TABLE `roles_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `roles_seq`
--

INSERT INTO `roles_seq` (`next_val`) VALUES
(101);

-- --------------------------------------------------------

--
-- Table structure for table `stock`
--

CREATE TABLE `stock` (
  `stock_id` bigint NOT NULL,
  `stock_market` varchar(255) NOT NULL,
  `stock_name` varchar(255) NOT NULL,
  `stock_symbol` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `stock`
--

INSERT INTO `stock` (`stock_id`, `stock_market`, `stock_name`, `stock_symbol`) VALUES
(1, 'NYSE', 'Apple Inc.', 'AAPL'),
(2, 'NASDAQ', 'Microsoft Corp.', 'MSFT'),
(3, 'NYSE', 'Amazon.com Inc.', 'AMZN'),
(4, 'NASDAQ', 'Alphabet Inc.', 'GOOGL'),
(5, 'NASDAQ', 'Facebook Inc.', 'META'),
(6, 'NASDAQ', 'Intel Corp.', 'INTC'),
(7, 'NYSE', 'Netflix Inc.', 'NFLX'),
(8, 'NASDAQ', 'Cisco Systems Inc.', 'CSCO'),
(9, 'NYSE', 'PepsiCo Inc.', 'PEP'),
(10, 'NASDAQ', 'Adobe Inc.', 'ADBE'),
(11, 'NYSE', 'Coca-Cola Co.', 'KO'),
(12, 'NASDAQ', 'Qualcomm Inc.', 'QCOM'),
(13, 'NYSE', 'Oracle Corp.', 'ORCL'),
(14, 'NASDAQ', 'NVIDIA Corp.', 'NVDA'),
(15, 'NYSE', 'IBM Corp.', 'IBM'),
(16, 'NASDAQ', 'eBay Inc.', 'EBAY'),
(17, 'NYSE', 'Procter & Gamble Co.', 'PG'),
(18, 'NASDAQ', 'Tesla Inc.', 'TSLA'),
(19, 'NYSE', 'Johnson & Johnson', 'JNJ'),
(20, 'NASDAQ', 'PayPal Holdings Inc.', 'PYPL'),
(21, 'NYSE', 'Visa Inc.', 'V'),
(22, 'NASDAQ', 'Starbucks Corp.', 'SBUX'),
(23, 'LSE', 'BP plc', 'BP'),
(24, 'TSE', 'Toyota Motor Corp.', 'TM'),
(25, 'BSE', 'Reliance Industries', 'RELIANCE'),
(26, 'LSE', 'HSBC Holdings plc', 'HSBC'),
(27, 'SSE', 'Alibaba Group', 'BABA'),
(28, 'DAX', 'Siemens AG', 'SIE'),
(29, 'IBEX', 'Banco Santander', 'SAN'),
(30, 'ASX', 'BHP Group', 'BHP');

-- --------------------------------------------------------

--
-- Table structure for table `token_blacklist`
--

CREATE TABLE `token_blacklist` (
  `token` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `description`, `firstname`, `password`, `surname`, `username`) VALUES
(1, 'Admin Account', 'admin', '$2a$10$eDxlLq0vaBsND8iR0UfL8ufv6yn.D3g0zKOhJkG5GdoJjrj1b9jli', NULL, 'admin'),
(2, 'Inversor oil and gas', 'Melaku', '$2a$10$nDuzvvGy.JZd1NGSuYF56eevzlXHF1IKHjJe0OcDsIs73eXTcpiTu', 'Garcia', 'melakugb'),
(3, 'Especialista Forex y Divisas', 'Gary', '$2a$10$AhTvzT62B2kSfOrilcUL/eZ5U8lkGiN5OOxH3nqecmxnwXb8KLmAO', 'vaca', 'gary4vaca');

-- --------------------------------------------------------

--
-- Table structure for table `users_seq`
--

CREATE TABLE `users_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users_seq`
--

INSERT INTO `users_seq` (`next_val`) VALUES
(101);

-- --------------------------------------------------------

--
-- Table structure for table `user_role_junction`
--

CREATE TABLE `user_role_junction` (
  `user_id` int NOT NULL,
  `role_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_role_junction`
--

INSERT INTO `user_role_junction` (`user_id`, `role_id`) VALUES
(1, 1),
(2, 2),
(3, 2);

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
  ADD KEY `FKnpy5342drwl43peaesdlalu04` (`user_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`stock_id`),
  ADD UNIQUE KEY `UK_cdttd3yp4i4etaq8ormxn4htc` (`stock_name`),
  ADD UNIQUE KEY `UK_5fm0245i3boai6gfh3q0l6usq` (`stock_symbol`);

--
-- Indexes for table `token_blacklist`
--
ALTER TABLE `token_blacklist`
  ADD PRIMARY KEY (`token`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `UK_r43af9ap4edm43mmtq01oddj6` (`username`);

--
-- Indexes for table `user_role_junction`
--
ALTER TABLE `user_role_junction`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `FKhybpcwvq8snjhbxawo25hxous` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `investment`
--
ALTER TABLE `investment`
  MODIFY `investment_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `investment_portfolio`
--
ALTER TABLE `investment_portfolio`
  MODIFY `investment_portfolio_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `stock`
--
ALTER TABLE `stock`
  MODIFY `stock_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

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
  ADD CONSTRAINT `FKnpy5342drwl43peaesdlalu04` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `user_role_junction`
--
ALTER TABLE `user_role_junction`
  ADD CONSTRAINT `FK5aqfsa7i8mxrr51gtbpcvp0v1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `FKhybpcwvq8snjhbxawo25hxous` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
