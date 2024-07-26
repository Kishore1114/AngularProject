/*
SQLyog Community v12.5.0 (64 bit)
MySQL - 5.5.27 : Database - ecommerce
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`ecommerce` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `ecommerce`;

/*Table structure for table `fav_products` */

DROP TABLE IF EXISTS `fav_products`;

CREATE TABLE `fav_products` (
  `pid` int(11) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `fav_products` */

/*Table structure for table `order_products` */

DROP TABLE IF EXISTS `order_products`;

CREATE TABLE `order_products` (
  `id` int(10) DEFAULT NULL,
  `orderid` int(10) DEFAULT NULL,
  `productid` int(10) DEFAULT NULL,
  `quantity` int(10) DEFAULT NULL,
  `status` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `order_products` */

/*Table structure for table `orders` */

DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `userid` int(10) NOT NULL,
  `createddate` date DEFAULT NULL,
  `status` int(10) DEFAULT NULL,
  `amount` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `orders` */

/*Table structure for table `products` */

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `category` varchar(30) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `imageUrl` varchar(500) DEFAULT NULL,
  `added` date DEFAULT NULL,
  `quantity` decimal(10,0) DEFAULT NULL,
  `seller` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=latin1;

/*Data for the table `products` */

insert  into `products`(`id`,`name`,`category`,`price`,`description`,`imageUrl`,`added`,`quantity`,`seller`) values 
(1,'p1','mobile',10000,'it is a very good product','https://assets.croma.com/medias/sys_master/images/images/h79/hee/8859987279902/219203.webp','2019-07-19',10,'honor'),
(2,'p2','mobile',10000,'it is a very good product','https://assets.croma.com/medias/sys_master/images/images/h86/h56/8859705475102/219655.webp','2019-07-19',10,'chroma'),
(3,'p3','mobile',10000,'good product','https://assets.croma.com/medias/sys_master/images/images/h79/h4c/8857383862302/219193.webp','2019-07-19',10,'amazon'),
(4,'p4','mobile',10000,'good product','https://assets.croma.com/medias/sys_master/images/images/hd4/h27/8854790307870/218721.webp','2019-07-19',10,'flipkart'),
(5,'p5','mobile',10000,'good product','https://assets.croma.com/medias/sys_master/images/images/h97/h75/8852176404510/218493.webp','2019-07-19',10,'flipkart'),
(6,'p6','laptop',100000,'good product','https://assets.croma.com/medias/sys_master/images/images/h9e/ha5/8858703691806/219439.webp','2019-07-19',10,'flipkart'),
(7,'p7','laptop',40000,'very good laptop','https://assets.croma.com/medias/sys_master/images/images/h9d/h8b/8854295511070/218681.png','2019-07-19',10,'croma'),
(8,'p8','laptop',100000,'laptop','https://assets.croma.com/medias/sys_master/images/images/h6e/h91/8852980891678/218516.webp','2019-07-19',10,'croma'),
(9,'p9','laptop',100000,'laptop','https://assets.croma.com/medias/sys_master/images/images/hb2/h91/8856385585182/217953.webp','2019-07-19',10,'croma'),
(10,'p10','laptop',100000,'laptop','https://assets.croma.com/medias/sys_master/images/images/h0d/h2e/8852622966814/218430.webp','2019-07-19',10,'asus'),
(11,'p11','tv',100000,'color tv','https://assets.croma.com/medias/sys_master/images/images/h60/h04/8853490532382/217488.webp','2019-07-19',10,'asus'),
(12,'p12','tv',100000,'color tv','https://assets.croma.com/medias/sys_master/images/images/h4b/h16/8852532035614/218010.webp','2019-07-19',10,'samsung'),
(13,'p13','tv',100000,'color tv','https://assets.croma.com/medias/sys_master/images/images/h0f/h1a/8850429706270/217908.webp','2019-07-19',10,'vue'),
(14,'p14','tv',100000,'color tv','https://assets.croma.com/medias/sys_master/images/images/hf1/h93/8850428985374/217901.webp','2019-07-19',10,'vue'),
(15,'p15','tv',100000,'color tv -- 100 inches','https://assets.croma.com/medias/sys_master/images/images/h2c/h8d/8860715974686/217896.webp','2019-07-19',10,'vue'),
(16,'p16','tv',100000,'color tv -- 100 inches','https://assets.croma.com/medias/sys_master/images/images/h7a/h8d/8859979055134/217487.webp','2019-07-19',10,'croma'),
(17,'p17','tv',100000,'color tv -- 100 inches','https://assets.croma.com/medias/sys_master/images/images/hde/h8e/8846688780318/217587.webp','2019-07-19',10,'samsung'),
(18,'p18','tv',100000,'color tv -- 100 inches','https://assets.croma.com/medias/sys_master/images/images/h21/h89/8841044951070/216340.webp','2019-07-19',10,'croma'),
(19,'p19','tv',100000,'color tv -- 100 inches','https://assets.croma.com/medias/sys_master/images/images/hbf/h2c/8841041313822/216335.webp','2019-07-19',10,'samsung'),
(20,'p20','tv',100000,'color tv -- 100 inches','https://assets.croma.com/medias/sys_master/images/images/h7f/h40/8842255106078/215465.webp','2019-07-19',10,'samsung'),
(21,'p21','washingmachine',100000,'washing machine','https://assets.croma.com/medias/sys_master/images/images/hd2/hf5/8848699719710/217486.webp','2019-07-19',10,'samsung'),
(22,'p22','washingmachine',100000,'washing machine 5 kg','https://assets.croma.com/medias/sys_master/images/images/h7f/he3/8848697589790/217485.webp','2019-07-19',10,'samsung'),
(23,'p23','washingmachine',100000,'washing machine 10kg','https://assets.croma.com/medias/sys_master/images/images/h87/hc6/8848693657630/217483.webp','2019-07-19',10,'samsung'),
(24,'p24','washingmachine',100000,'washing machine 10kg','https://assets.croma.com/medias/sys_master/images/images/ha2/h95/8797861511198/215115.webp','2019-07-19',10,'samsung'),
(25,'p25','washingmachine',100000,'washing machine','https://assets.croma.com/medias/sys_master/images/images/hd8/h82/8839559938078/214898.webp','2019-07-19',10,'voltas'),
(26,'p26','washingmachine',100000,'washing machine','https://assets.croma.com/medias/sys_master/images/images/hba/h02/8839522484254/214721.webp','2019-07-19',10,'haier'),
(27,'p27','washingmachine',100000,'washing machine','https://assets.croma.com/medias/sys_master/images/images/hef/he9/8857793363998/212689.webp','2019-07-19',10,'super general'),
(28,'p28','washingmachine',100000,'washing machine','https://assets.croma.com/medias/sys_master/images/images/h8b/hea/8838632538142/212020.webp','2019-07-19',10,'LG'),
(29,'p29','washingmachine',100000,'washing machine','https://assets.croma.com/medias/sys_master/images/images/hac/h6a/8797463642142/211461.webp','2019-07-19',10,'Bosch'),
(30,'p30','washingmachine',100000,'washing machine','https://assets.croma.com/medias/sys_master/images/images/h2c/h4c/8812078891038/207330.webp','2019-07-19',10,'IFB'),
(32,'p31','ac',100000,'Inverter AC','https://assets.croma.com/medias/sys_master/images/images/h92/hda/8854252322846/218716.png','2019-07-19',10,'onida'),
(33,'p32','ac',100000,'Inverter AC','https://assets.croma.com/medias/sys_master/images/images/h90/hb9/8850704171038/217965.webp','2019-07-19',10,'voltas'),
(34,'p33','ac',100000,'Inverter AC','https://assets.croma.com/medias/sys_master/images/images/h2a/h93/8849927110686/217943.webp','2019-07-19',10,'voltas'),
(35,'p34','ac',100000,'onida 1 ton ac','https://assets.croma.com/medias/sys_master/images/images/he1/h17/8853628977182/217919.webp','2019-07-19',10,'onida'),
(36,'p35','ac',100000,'voltas 1.5 ton ac','https://assets.croma.com/medias/sys_master/images/images/h58/h8a/8848185327646/217655.webp','2019-07-19',10,'voltas'),
(37,'p36','ac',100000,'whirlpool 1.5 ton ac','https://assets.croma.com/medias/sys_master/images/images/h4d/h63/8846113538078/216231.webp','2019-07-19',10,'whirlpool'),
(38,'p37','ac',100000,'1.5 ton ac','https://assets.croma.com/medias/sys_master/images/images/h53/h33/8844922716190/216605.webp','2019-07-19',10,'carrier'),
(39,'p38','ac',100000,'1.5 ton ac','https://assets.croma.com/medias/sys_master/images/images/he9/hdd/8859616378910/217106.webp','2019-07-19',10,'croma'),
(40,'p39','ac',100000,'1.5 ton ac','https://assets.croma.com/medias/sys_master/images/images/h6e/h1f/8842567876638/216640.webp','2019-07-19',10,'panasonic'),
(41,'p40','ac',100000,'1.5 ton ac','https://assets.croma.com/medias/sys_master/images/images/hc8/h00/8846367424542/216707.webp','2019-07-19',10,'samsung');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(30) DEFAULT NULL,
  `emailId` varchar(30) DEFAULT NULL,
  `password` varchar(30) DEFAULT NULL,
  `phoneNumber` decimal(10,0) DEFAULT NULL,
  `firstName` varchar(30) DEFAULT NULL,
  `lastName` varchar(30) DEFAULT NULL,
  `address1` varchar(50) DEFAULT NULL,
  `address2` varchar(50) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `state` varchar(50) DEFAULT NULL,
  `zip` decimal(10,0) DEFAULT NULL,
  `createdOn` date DEFAULT NULL,
  `isAdmin` decimal(1,0) DEFAULT NULL,
  `avatar` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `user` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
