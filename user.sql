/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50731
Source Host           : localhost:3306
Source Database       : xinxi

Target Server Type    : MYSQL
Target Server Version : 50731
File Encoding         : 65001

Date: 2021-06-18 18:41:26
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
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('易君', '18237615092', '204501878529', '已结账', 'JD0045327813010', '3898', '6-14', '2021-06-15 19:00:10-您的快件已由公司前台代收，感谢您使用京东物流，期待再次为您服务', '12');
INSERT INTO `user` VALUES ('冯朔源', '13676984454', '204514443332 ', '已结账', 'JD0045327997202', '3898', '6-14', '2021-06-15 13:44:01-您的快件已由本人签收，感谢您使用京东物流，期待再次为您服务', '13');
INSERT INTO `user` VALUES ('王靖博', '18623943948', '203848994397 ', '已结账', 'JD0045319049933', '3898', '6-14', '2021-06-15 13:44:01-您的快件已由本人签收，感谢您使用京东物流，期待再次为您服务', '15');
INSERT INTO `user` VALUES ('留自己 ', '17637904085 ', '203966794096 ', '已结账', 'JD0045330666919', '3898', '6-14', '2021-06-16 12:10:46-您的快件已由公司前台代收，感谢您使用京东物流，期待再次为您服务', '17');
INSERT INTO `user` VALUES ('刘高威', '19803632720', '204524478885 ', '已结账', 'JD0045330411994', '3868', '6-14', '2021-06-16 12:10:46-您的快件已由公司前台代收，感谢您使用京东物流，期待再次为您服务', '18');
INSERT INTO `user` VALUES ('朱月琦', '18272621606', '204401319273 ', '已结账', 'JD0045319097966', '3898', '6-14', '2021-06-15 19:00:10-您的快件已由公司前台代收，感谢您使用京东物流，期待再次为您服务', '19');
INSERT INTO `user` VALUES ('张晨义', '13295086172', '203838748979 ', '已结账', 'JD0045318577541', '3898', '6-14', '2021-06-16 12:16:04-您的快件已由公司前台代收，感谢您使用京东物流，期待再次为您服务', '20');
INSERT INTO `user` VALUES ('康鹏晓', '13295086172', '203840194420 ', '已结账', 'JD0045318459075', '3898', '6-14', '2021-06-15 19:00:09-您的快件已由公司前台代收，感谢您使用京东物流，期待再次为您服务', '21');
INSERT INTO `user` VALUES ('张博磊', '18239991918', '203840194420', '已结账', 'JD0045319447176', '3898', '6-14', '2021-06-15 19:00:10-您的快件已由公司前台代收，感谢您使用京东物流，期待再次为您服务', '22');
INSERT INTO `user` VALUES ('王昱', '15090446975', '204328426924 ', '已结账', 'JD0045317971553', '3898', '6-14', '2021-06-16 12:10:47-您的快件已由公司前台代收，感谢您使用京东物流，期待再次为您服务', '23');
INSERT INTO `user` VALUES ('李小尚', '15083025791', '203831491671 ', '已结账', 'JD0045317593815', '3898', '6-14', '2021-06-15 19:00:10-您的快件已由公司前台代收，感谢您使用京东物流，期待再次为您服务', '24');
INSERT INTO `user` VALUES ('翟永富', '15515347160', '203839807668', '已结账', 'JD0045318409071', '3898', '6-14', '2021-06-16 12:10:46-您的快件已由公司前台代收，感谢您使用京东物流，期待再次为您服务', '25');
INSERT INTO `user` VALUES ('李敏', '16692294431', '204047655198', '已结账', 'JD0045347899046', '3898', '6-14', '2021-06-15 13:44:01-您的快件已由本人签收，感谢您使用京东物流，期待再次为您服务', '26');
INSERT INTO `user` VALUES ('张家奎', '13148026213', '204525633605', '已结账', 'JD0045362897906', '3898', '6-14', '2021-06-16 12:16:04-您的快件已由公司前台代收，感谢您使用京东物流，期待再次为您服务', '27');
INSERT INTO `user` VALUES ('赵帝豪', '18239607740', '204513120460 ', null, 'JD0045343401048', '3898', '6-14', '2021-06-16 12:10:47-您的快件已由公司前台代收，感谢您使用京东物流，期待再次为您服务', '28');
INSERT INTO `user` VALUES ('王世远', '17530830107', '203843527094', null, 'JD0045319252956', '3898', '6-14', '2021-06-16 12:10:47-您的快件已由公司前台代收，感谢您使用京东物流，期待再次为您服务', '29');
INSERT INTO `user` VALUES ('钟汉望', '18239607740', '204597745351 ', null, 'JD0045346933796        ', '3898', '6-14', '2021-06-16 12:17:17-您的快件已由公司前台代收，感谢您使用京东物流，期待再次为您服务', '30');
INSERT INTO `user` VALUES ('王豪', '17638729634', '204583288257 ', null, 'JD0045346111450', '3898', '6-14', '2021-06-16 12:10:47-您的快件已由公司前台代收，感谢您使用京东物流，期待再次为您服务', '31');
INSERT INTO `user` VALUES ('丁宁', '18300692207', '204375393858 \r\n', null, 'JD0045317215645\r\n', '3898\r\n', '6-14', '2021-06-15 19:00:10-您的快件已由公司前台代收，感谢您使用京东物流，期待再次为您服务', '32');
INSERT INTO `user` VALUES ('仔仔\r\n', '17597817146\r\n', '204671602534 \r\n', null, 'JD0045362541983\r\n', '3898\r\n', '6-14', '2021-06-16 12:10:47-您的快件已由公司前台代收，感谢您使用京东物流，期待再次为您服务', '33');
INSERT INTO `user` VALUES ('张同同', '15238625074', '204909567982', '已结账', 'JD0045444935480', '2904', '', '2021-06-16 15:01:45-您的快件已由公司前台代收，感谢您使用京东物流，期待再次为您服务', '40');
INSERT INTO `user` VALUES ('王雪茹', '18203835490', '204418007766', '已结账', 'JD0045445120227', '2904', '', '2021-06-16 15:01:45-您的快件已由公司前台代收，感谢您使用京东物流，期待再次为您服务', '41');
INSERT INTO `user` VALUES ('汤翔博', '18737153964', '204976156361', '小米10S', 'JD0045445201388', '2904', '06-15 20:54', '2021-06-17 13:24:36-您的快件已由本人签收，感谢您使用京东物流，期待再次为您服务', '44');
INSERT INTO `user` VALUES ('温晶', '18317652823', '204988856999', '10s', 'JD0045454611715', '2904', '06-16 00:34', '2021-06-16 15:01:45-您的快件已由公司前台代收，感谢您使用京东物流，期待再次为您服务', '45');
INSERT INTO `user` VALUES ('冯世茹', '15194463881', '204437726717', '10s', 'JD0045455251328', '2904', '06-16 00:42', '2021-06-17 13:24:36-您的快件已由本人签收，感谢您使用京东物流，期待再次为您服务', '46');
INSERT INTO `user` VALUES ('张文孝', '15238481539', '204398736965 ', '', 'JD0045318570209', '3998', '06-18 12:08', '2021-06-16 12:10:47-您的快件已由公司前台代收，感谢您使用京东物流，期待再次为您服务', '70');
INSERT INTO `user` VALUES ('张文孝', '15238481539', '203844340126', '', 'JD0045318915510', '3998', '06-18 12:09', '2021-06-16 12:10:46-您的快件已由公司前台代收，感谢您使用京东物流，期待再次为您服务', '71');
INSERT INTO `user` VALUES ('丁宁', '18300692207', '1328116324867979145', '', 'SF1314072410528', '5099', '06-18 12:14', '2021-06-18 17:05:49-[郑州市]快件交给刘海锋,正在派送途中（联系电话：15238997643,顺丰已开启“安全呼叫”保护您的电话隐私,请放心接听！）（主单总件数：1件）', '72');
INSERT INTO `user` VALUES ('易君', '18237615092', '205311037191', '12  ', 'JD0045750416146', '5299', '06-18 13:30', '2021-06-18 08:41:28-您的快件由【西安临潼分拣中心】准备发往【郑州前程分拣中心】', '73');
INSERT INTO `user` VALUES ('洋洋洋', '15139903185', '1328152000989195856', '12', 'SF1323213140279', '5099', '06-18 13:31', '2021-06-18 17:05:50-[郑州市]快件交给刘海锋,正在派送途中（联系电话：15238997643,顺丰已开启“安全呼叫”保护您的电话隐私,请放心接听！）（主单总件数：1件）', '74');
INSERT INTO `user` VALUES ('王靖博', '18336570355', '1331954583904679979', '', '', '5099', '06-18 17:47', '', '75');
