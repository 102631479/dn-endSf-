/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50731
Source Host           : localhost:3306
Source Database       : xinxi

Target Server Type    : MYSQL
Target Server Version : 50731
File Encoding         : 65001

Date: 2021-06-15 08:23:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `shopname` varchar(255) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `logistics` varchar(255) DEFAULT NULL,
  `goPrice` varchar(255) DEFAULT NULL,
  `datatime` varchar(255) DEFAULT NULL,
  `logisticsdata` varchar(500) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('易君', '18237615092', '204501878529', '已结账', 'JD0045327813010', '3898', '6-14', '', '12');
INSERT INTO `user` VALUES ('冯朔源', '13676984454', '204514443332 ', '已结账', 'JD0045327997202', '3898', '6-14', '', '13');
INSERT INTO `user` VALUES ('张同同', '15238625074', '204516746122 ', '已结账', 'JD0045332019340\r\n', '3898', '6-14', '', '14');
INSERT INTO `user` VALUES ('王靖博', '18623943948', '203848994397 ', '已结账', 'JD0045319049933', '3898', '6-14', '', '15');
INSERT INTO `user` VALUES ('王雪茹', '18203835490', '204521933216 ', '已结账', 'JD0045331794825', '3898', '6-14', '', '16');
INSERT INTO `user` VALUES ('留自己 ', '17637904085 ', '203966794096 ', '已结账', 'JD0045330666919', '3898', '6-14', '', '17');
INSERT INTO `user` VALUES ('刘高威', '19803632720', '204524478885 ', '已结账', 'JD0045330411994', '3868', '6-14', '', '18');
INSERT INTO `user` VALUES ('朱月琦', '18272621606', '204401319273 ', '已结账', 'JD0045319097966', '3898', '6-14', '', '19');
INSERT INTO `user` VALUES ('张晨义', '13295086172', '203838748979 ', '已结账', 'JD0045318577541', '3898', '6-14', '', '20');
INSERT INTO `user` VALUES ('康鹏晓', '13295086172', '203840194420 ', '已结账', 'JD0045318459075', '3898', '6-14', '', '21');
INSERT INTO `user` VALUES ('张博磊', '18239991918', '203840194420', '已结账', 'JD0045319447176', '3898', '6-14', '', '22');
INSERT INTO `user` VALUES ('王昱', '15090446975', '204328426924 ', '已结账', 'JD0045317971553', '3898', '6-14', '', '23');
INSERT INTO `user` VALUES ('李小尚', '15083025791', '203831491671 ', '已结账', 'JD0045317593815', '3898', '6-14', '', '24');
INSERT INTO `user` VALUES ('翟永富', '15515347160', '203839807668', '已结账', 'JD0045318409071', '3898', '6-14', '', '25');
INSERT INTO `user` VALUES ('李敏', '16692294431', '204047655198', '已结账', 'JD0045347899046', '3898', '6-14', null, '26');
INSERT INTO `user` VALUES ('张家奎', '13148026213', '204525633605', '已结账', null, '3898', '6-14', null, '27');
INSERT INTO `user` VALUES (' 赵帝豪', '18239607740', '204513120460 ', null, 'JD0045343401048', '3898', '6-14', null, '28');
INSERT INTO `user` VALUES ('王世远', '17530830107', '203843527094', null, 'JD0045319252956', '3898', '6-14', null, '29');
INSERT INTO `user` VALUES ('钟汉望', '18239607740', '204597745351 ', null, 'JD0045346933796        ', '3898', '6-14', null, '30');
INSERT INTO `user` VALUES ('王豪', '17638729634', '204583288257 ', null, 'JD0045346111450', '3898', '6-14', null, '31');
INSERT INTO `user` VALUES ('丁宁', '18300692207\r\n', '204375393858 \r\n', null, 'JD0045317215645\r\n', '3898\r\n', '6-14', null, '32');
INSERT INTO `user` VALUES ('仔仔\r\n', '17597817146\r\n', '204671602534 \r\n', null, 'JD0045362541983\r\n', '3898\r\n', '6-14', null, '33');
