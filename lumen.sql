-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 29, 2019 at 10:21 AM
-- Server version: 10.1.40-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lumen`
--

-- --------------------------------------------------------

--
-- Table structure for table `daily`
--

CREATE TABLE `daily` (
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `employee` varchar(255) NOT NULL,
  `yesterdaywork` varchar(255) NOT NULL,
  `issuework` varchar(255) NOT NULL,
  `todowork` varchar(255) NOT NULL,
  `ProjectName` varchar(255) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `daily`
--

INSERT INTO `daily` (`date`, `employee`, `yesterdaywork`, `issuework`, `todowork`, `ProjectName`, `id`) VALUES
('2017-07-05 00:00:00', 'ab', 'waterfall,', 'BugTest,Update,', 'Scrum,', 'Artisan,', 1),
('2019-07-13 00:00:00', 'SJ', 'Single,', 'BugTest,Invalid,', 'Duo,', 'SoftSquare,', 2),
('2022-11-24 00:00:00', '214', 'Scrum,', 'Stuck,BugTest,', 'Agile,', 'Sc,', 3),
('2016-11-02 00:00:00', 'abwqe', 'Duo,Scrum,Agile,waterfall,Single,', 'BugTest,', 'Single,Agile,', '1234,', 5),
('2019-07-18 00:00:00', 'FBN', 'Duo,Agile,', 'Stuck,Invalid,', 'Duo,Scrum,waterfall,', 'SoftSquare,', 7),
('2019-07-08 04:16:50', 'ab', 'Duo,', 'Stuck,', 'Single,', 'Mullberry,', 9),
('2018-05-17 00:00:00', 'FBN', 'Single,Agile,', 'BugTest,Invalid,Stuck,', 'Agile,Single,', 'Sc,', 10),
('2019-07-05 00:00:00', 'FBN', 'Duo,', 'BugTest,', 'Scrum,', '1234,', 12),
('2019-01-01 00:00:00', 'SJ', 'Single,agiletestupdate,', 'BugTest,Invalid,', 'Duo,Scrum,', 'ScrumDaily2,', 14),
('2019-07-18 00:00:00', 'FBN', 'Single,', 'BugTest,Missing,', 'agiletestupdate,', 'Sc257,', 17),
('2019-06-07 00:00:00', 'FBN', 'Duo,Scrum,', 'stuckdata,', 'Duo,agiletestupdate,', 'SoftSquare,', 18),
('2019-07-21 00:00:00', 'das', 'Single,', 'stuckdata,BugTest,', 'Single,', 'Sc257,', 19);

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `EmployName` varchar(255) NOT NULL,
  `EmployEmail` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id`, `EmployName`, `EmployEmail`) VALUES
(1, 'SJ', 'SJ@gmail.com'),
(2, 'FBN', 'pedobearearn@gmail.com'),
(13, 'ab1412cgh', 'aasd'),
(18, 'abwqe', 'aasdsadasd'),
(24, '214', 'qwe'),
(25, 'das', 'asfa');

-- --------------------------------------------------------

--
-- Table structure for table `issue`
--

CREATE TABLE `issue` (
  `id` int(11) NOT NULL,
  `issuename` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `issue`
--

INSERT INTO `issue` (`id`, `issuename`) VALUES
(1, 'BugTest'),
(2, 'stuckdata'),
(3, 'Invalid'),
(4, 'Missing'),
(5, 'Update');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `id` int(11) NOT NULL,
  `ProjectName` varchar(255) NOT NULL,
  `Description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`id`, `ProjectName`, `Description`) VALUES
(2, '1234', '3210-1'),
(3, 'ScrumDaily2', 'Issue2'),
(4, 'Sc257', 'oapsfk'),
(5, 'SoftSquare', 'Summer'),
(6, 'IGearGeek', 'Summer'),
(7, 'Artisan', 'Summer'),
(8, 'Mullberry', 'Summer');

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `Status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`id`, `Status`) VALUES
(1, 'overtime'),
(2, 'Success');

-- --------------------------------------------------------

--
-- Table structure for table `workcate`
--

CREATE TABLE `workcate` (
  `id` int(11) NOT NULL,
  `workcatename` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `workcate`
--

INSERT INTO `workcate` (`id`, `workcatename`) VALUES
(3, 'Duo'),
(4, 'Single'),
(5, 'Scrum'),
(6, 'agiletestupdate'),
(7, 'waterfall');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `daily`
--
ALTER TABLE `daily`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `issue`
--
ALTER TABLE `issue`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `workcate`
--
ALTER TABLE `workcate`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `daily`
--
ALTER TABLE `daily`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `issue`
--
ALTER TABLE `issue`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `workcate`
--
ALTER TABLE `workcate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
