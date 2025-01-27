-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 27, 2025 at 03:23 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


--
-- Database: `todo_db`

-- Table structure for table `todos`
--

CREATE TABLE `todos` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `is_done` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `todos`
--

INSERT INTO `todos` (`id`, `title`, `description`, `is_done`, `created_at`) VALUES
(1, 'Walk the dog.', 'Walk the dog in the park at 3.00 p.m.', 1, '2025-01-26 11:22:39'),
(2, 'Do Homework.', 'Do Maths Lesson 4 Homework.', 0, '2025-01-26 11:23:25'),
(3, 'Do Grocery Shopping.', 'Buy groceries for next week.', 0, '2025-01-26 11:27:07'),
(10, 'Go to Mall.', 'Check whether the mall is open on Saturday and then go.', 1, '2025-01-27 02:50:02'),
(11, 'Give a call to Emma.', 'Ask when she will be able to come.', 1, '2025-01-27 02:50:27'),
(12, 'Help Saman.', 'Ask the requirements.', 0, '2025-01-27 02:50:54'),
(20, 'Go for a run.', 'Run around the block for 30 minutes and walk for 15 minutes.', 0, '2025-01-27 14:13:19');

--
ALTER TABLE `todos`
  ADD PRIMARY KEY (`id`);

--
ALTER TABLE `todos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

