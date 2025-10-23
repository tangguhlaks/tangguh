-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: tangguh
-- ------------------------------------------------------
-- Server version	11.8.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `certificates`
--

DROP TABLE IF EXISTS `certificates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `certificates` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `source` varchar(150) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `certificates`
--

LOCK TABLES `certificates` WRITE;
/*!40000 ALTER TABLE `certificates` DISABLE KEYS */;
/*!40000 ALTER TABLE `certificates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `educations`
--

DROP TABLE IF EXISTS `educations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `educations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `school_name` varchar(150) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date DEFAULT NULL,
  `description` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `educations`
--

LOCK TABLES `educations` WRITE;
/*!40000 ALTER TABLE `educations` DISABLE KEYS */;
INSERT INTO `educations` VALUES (1,'State Vocational High School 1 Pandeglang','2018-07-22','2021-06-22','Software Engineering Major'),(2,'Telkom University','2021-09-01','2025-08-25','Software Engineering Major');
/*!40000 ALTER TABLE `educations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `experiences`
--

DROP TABLE IF EXISTS `experiences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `experiences` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `company_name` varchar(150) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date DEFAULT NULL,
  `description` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experiences`
--

LOCK TABLES `experiences` WRITE;
/*!40000 ALTER TABLE `experiences` DISABLE KEYS */;
INSERT INTO `experiences` VALUES (1,'Mobile Programmer (Internship)','Mobile Innovation Laboratory','2021-11-01','2022-02-28','Developed and tested mobile applications using Android Studio and Java, contributing to innovative projects that enhanced user experience and functionality.'),(3,'Lead Programmer (Vendor Team)','Angkasa Pura 1','2023-07-01','2023-10-30','As an outsourced Lead Programmer on the Audit Management Application project at Angkasa Pura I, I collaborated closely with the Project Manager to align development with business objectives and technical standards. I led technical planning, architecture, and system development; coordinated team efforts to maintain code quality and adherence to the Software Development Life Cycle (SDLC); and utilized Scrum methodology for sprint management, task prioritization, and progress tracking. Additionally, I deployed and maintained the application in a VPS environment using PuTTY for remote access. Key technologies included Laravel (MVC framework), HTML5 for frontend, and MySQL database, with skills in Scrum, team leadership, VPS management, and SDLC.'),(4,'Software Engineer ','PT Darul Global Solution','2021-06-01','2024-05-31','During my three years at PT Darul Global Solution, I worked on diverse projects across logistics, mining, government, and corporate sectors, covering web, mobile, and desktop applications. My contributions included developing enterprise systems (meeting management, maintenance, ERP, logistics, transactions, electronic documents), modernizing legacy applications in Laravel, CodeIgniter, and ASP.NET, building mobile apps for logistics and mining, POS systems, and desktop solutions with .NET MAUI and Windows Forms, as well as designing RESTful APIs and integrations such as payment methods and GPS tracking. I have hands-on experience with PHP (Laravel, CodeIgniter), ASP.NET (MVC), .NET Core, C#, HTML5, JavaScript, Kendo UI, PostgreSQL, MySQL, SQL Server, MariaDB, supported by tools like Git, Visual Studio, Google Maps API, and PuTTY. My core strengths include full-stack development, API design & integration, legacy system maintenance, OOP & design patterns, GPS tracking, and ERP/operational system development.'),(5,'AI Engineer (Internship)','HUMIC (Human Centric) Engineering Research Center','2024-02-01','2024-06-01','I contributed to the development of an AI-based patient monitoring system designed to track patient movement and location in real time using IoT devices. My key responsibilities included building an AI model with logistic regression to analyze movement data, integrating data communication via an MQTT broker for reliable low-latency transmission, and developing backend services with Python (Flask) and Express.js for data processing and API handling. I also participated in research and implementation of AI techniques for human-centric monitoring systems, focusing on real-time monitoring and AI-driven healthcare solutions.'),(6,'Software Engineer (Internship)','FPT Software','2024-06-01','2024-08-25','As a Software Engineer Intern at FPT Software (Jun–Aug 2024, Hanoi, Vietnam), I contributed to data analysis and dashboard development to support business intelligence and decision-making processes. I conducted data analysis and built dynamic dashboards in Power BI to visualize key performance metrics, developed web-based reporting dashboards using Express.js and EJS for interactive visualizations, and collaborated with teams to translate analytical insights into actionable reports for stakeholders. My work focused on interactive dashboards, business intelligence, and data-driven reporting, leveraging tools such as Power BI, Express.js, HTML5, and EJS.'),(7,'Backend .NET Developer','Blue Bird Group','2024-09-21','2025-06-30','Working as a Backend .NET Developer, responsible for designing and maintaining scalable microservices using .NET Core, implementing gRPC for high-performance communication, and integrating distributed systems with Google Pub/Sub. Experienced in conducting code reviews, writing unit tests with NUnit, and leveraging tools like Rancher and Visual Studio to ensure system reliability, maintainability, and performance.'),(8,'Backend .NET Developer','Nawa Data Solution','2025-07-07','2025-11-07','In my role as a Backend .NET Developer and handle product for banking company, I am responsible for developing \nand maintaining backend systems using ASP.NET and SQL Server to support the company\'s operations. Currently, I work \non the OneFCC product, which includes features such as Anti-Money Laundering (AML) functionalities. My focus is on \nensuring system scalability and performance, enabling seamless integration of various functionalities within the \norganization\'s infrastructure.\n');
/*!40000 ALTER TABLE `experiences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `global_configuration`
--

DROP TABLE IF EXISTS `global_configuration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `global_configuration` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `section` varchar(50) NOT NULL,
  `field_name` varchar(100) NOT NULL,
  `field_value` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_config` (`section`,`field_name`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `global_configuration`
--

LOCK TABLES `global_configuration` WRITE;
/*!40000 ALTER TABLE `global_configuration` DISABLE KEYS */;
INSERT INTO `global_configuration` VALUES (18,'home','cv','/files/cv.pdf','2025-09-17 09:56:49','2025-09-17 09:56:49'),(35,'home','profile-photo','/images/profile.png','2025-09-17 09:57:45','2025-09-17 09:57:45'),(86,'home','full-name','Tangguh Laksana','2025-09-17 10:35:39','2025-09-17 10:35:39'),(87,'home','job-titles','.NET Expertise,AI Enthusiast,Computer Vision Enthusiast,Software Engineer','2025-09-17 10:35:39','2025-09-22 07:10:12'),(88,'home','home-description','<p>With over 4 years of experience in .NET development, I specialize in crafting&nbsp;<span style=\"text-align: right;\">reliable and scalable software solutions.</span><span style=\"text-align: right;\">My passion lies in Artificial Intelligence&nbsp;</span><span style=\"text-align: right;\">and Computer Vision, building systems that empower machines to see, understand, and create meaningful impact in the real world.</span></p>','2025-09-17 10:35:39','2025-09-17 10:35:39'),(89,'about','about-title','About Me','2025-09-17 10:35:39','2025-09-17 10:35:39'),(90,'about','about-description','<p>A Multifaceted Developer With A Passion For .NET, AI, and Computer Vision.</p>','2025-09-17 10:35:39','2025-09-17 10:35:39'),(91,'about','about-sub-description','<p>With over 4 years of experience in .NET development, I specialize in building scalable and reliable software solutions. My journey expands into Artificial Intelligence and&nbsp;<span style=\"text-align: right;\">Computer Vision, blending technical precision with innovative problem solving.</span></p>','2025-09-17 10:35:39','2025-09-17 10:35:39'),(92,'portfolio','portfolio-title','Personal & Research Projects','2025-09-17 10:35:39','2025-09-17 10:35:39'),(93,'portfolio','portfolio-description','<p>Here’s a showcase of my personal and research projects</p>','2025-09-17 10:35:39','2025-09-17 10:35:39'),(94,'portfolio','portfolio-sub-description','<p>These works reflect my passion for tech and problem-solving. Interested to collaborate? Don’t hesitate to get in touch</p>','2025-09-17 10:35:39','2025-09-17 10:35:39'),(95,'blog','blog-title','My Blog','2025-09-17 10:35:39','2025-09-17 10:35:39'),(96,'blog','blog-description','<p>Sharing insights, experiences, and innovations in technology.</p>','2025-09-17 10:35:39','2025-09-17 10:35:39'),(97,'contact','contact-title','Let’s Collaborate','2025-09-17 10:35:39','2025-09-17 10:35:39'),(98,'contact','contact-description','<p>Have a project in mind or need guidance? Let’s connect.</p>','2025-09-17 10:35:39','2025-09-17 10:35:39'),(99,'contact','github','https://github.com/tangguhlaks','2025-09-17 10:35:39','2025-09-17 10:35:39'),(100,'contact','linkedin','https://www.linkedin.com/in/tangguhlaksana0/','2025-09-17 10:35:39','2025-09-17 10:35:39'),(101,'contact','instagram','https//instagram.com/tangguhlaks','2025-09-17 10:35:39','2025-09-17 10:35:39'),(102,'contact','whatsapp','6285283152547','2025-09-17 10:35:39','2025-09-17 10:35:39'),(103,'contact','email','tangguhlaksana0@gmail.com','2025-09-17 10:35:39','2025-09-17 10:35:39');
/*!40000 ALTER TABLE `global_configuration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skills`
--

DROP TABLE IF EXISTS `skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `level` varchar(50) DEFAULT NULL,
  `description` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skills`
--

LOCK TABLES `skills` WRITE;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
INSERT INTO `skills` VALUES (3,'C#','Advanced','Core language used in .NET development; applied in roles like Software Engineer at PT Darul Global Solution and .NET Developer at Blue Bird Group/NawaData.'),(4,'Python','Intermediate','Used for AI, data analysis, and backend development; tied to HUMIC Engineering Research Center, FPT Software, and courses like \"Become a Data Analyst (Python, Excel, SQL, Power BI)\".'),(5,'JavaScript','Intermediate','Applied in web development, including full-stack and frontend; used in roles at PT Darul Global Solution and FPT Software.'),(6,'PHP','Advanced','Backend web development language; integrated with frameworks like Laravel and CodeIgniter in Software Engineer roles at PT Darul Global Solution.'),(7,'C++','Basic','Used for problem-solving and programming challenges; linked to Qualifier Round of Global Programming Competition (SnackDown 2021)'),(8,'ASP.NET (including ASP.NET MVC)','Intermediate','Web application framework for .NET; applied in backend development at NawaData and PT Darul Global Solution.'),(9,'.NET Framework (including .NET Core, .NET MAUI)','Advanced','Microsoft\'s development platform; core to full-stack .NET apps at Blue Bird Group and PT Darul Global Solution, including mobile (MAUI) and cross-platform development.'),(10,'Entity Framework','Intermediate','ORM for .NET data access; used in Software Engineer role at PT Darul Global Solution.'),(11,'Laravel','Advanced','PHP web framework; applied in web development at PT Darul Global Solution and PT Angkasa Pura 1.'),(12,'Codeigniter','Advanced','Lightweight PHP framework; used for rapid web app development at PT Darul Global Solution.'),(13,'Express.js','Intermediate','Node.js web framework; backend development at FPT Software and other roles.'),(14,'Flask','Intermediate','Lightweight Python web framework; used in AI and data projects at HUMIC Engineering Research Center.'),(15,'Embedded JavaScript (EJS)','Intermediate','Templating engine for Node.js; applied in software engineering at FPT Software.'),(16,'WPF','Intermediate','Windows Presentation Foundation for desktop apps; used in .NET projects at PT Darul Global Solution.'),(17,'Kendo UI','basic','UI component library for web apps; integrated in Software Engineer role at PT Darul Global Solution.'),(18,'SQL (including Microsoft SQL Server, PostgreSQL, MySQL, MariaDB)','Advanced','Query language for relational databases; core to data handling in all roles.'),(19,'Power BI','Intermediate','Business intelligence tool for data visualization, modeling, and dashboards; used for analytics at FPT Software and self-study courses.'),(20,'Rancher','Basic','Kubernetes management platform; applied in container orchestration at Blue Bird Group.'),(21,'Google PubSub','Intermediate','Messaging service for event-driven apps; used as a message broker at Blue Bird Group.'),(22,'gRPC','Intermediate','High-performance RPC framework; used in microservices at Blue Bird Group.'),(23,'Firebase','Intermediate','Backend-as-a-service for mobile/web apps; using for notification when working at PT Darul Global Solution & Blue Bird Group'),(24,'Unit Testing (including NUnit, Mock)','Intermediate','Code testing frameworks; NUnit and mocking for .NET at Blue Bird Group.'),(25,'OOP','Advanced','Programming paradigm; foundational for C#, Java, and .NET at PT Darul Global Solution, Blue Bird Group, and Nawa Data Solution.'),(26,'REST APIs','Advanced','Web service design; built and consumed in backend roles at PT Darul Global Solution, and Blue Bird Group.'),(27,'Microservices','Intermediate','Distributed architecture; implemented at Blue Bird Group.'),(28,'Data Analysis (including Data Visualization, Data Modeling)','Intermediate','Extracting insights from data; used at FPT Software and \"Become a Data Analyst\" course with Python/Excel/SQL.'),(29,'Artificial Intelligence (AI)','Intermediate','AI engineering; applied at HUMIC Research Center, including logistic regression models.'),(30,'Team Leadership / Team Management / Managing Technical Personnel','Intermediate','Guiding teams and personnel; demonstrated as Lead Programmer at Angkasa Pura Airports.');
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'tangguh'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-10-23 11:17:59
