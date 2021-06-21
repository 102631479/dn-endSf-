/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50731
Source Host           : localhost:3306
Source Database       : xinxi

Target Server Type    : MYSQL
Target Server Version : 50731
File Encoding         : 65001

Date: 2021-06-20 14:43:43
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for recyled
-- ----------------------------
DROP TABLE IF EXISTS `recyled`;
CREATE TABLE `recyled` (
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `shopname` varchar(255) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `logistics` varchar(255) DEFAULT NULL,
  `goPrice` varchar(255) DEFAULT NULL,
  `datatime` varchar(255) DEFAULT NULL,
  `logisticsdata` varchar(500) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usercode` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=698 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of recyled
-- ----------------------------
INSERT INTO `recyled` VALUES ('4额温枪', '认定为群', '切勿', '额温枪', '额温枪', '额温枪', '06-20 11:36', '', '694', '18749282812');
INSERT INTO `recyled` VALUES ('田超', '18848840179', '666', '特产天齐', '773102954406899', '1490', '06-20 12:15', '2021-06-19 20:12:57-已签收，签收人凭取货码签收', '697', '18749282812');
