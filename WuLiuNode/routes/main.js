const express = require('express')
const main = express.Router()
const multer = require('multer');

// redis测试
// main.post('/redisTest', require('./user/redisTest'))

// 用户操作
main.post('/login', require('./login/login'))
//order 订单系统
main.get('/order/getData', require('./order/get'))
main.post('/order/addData', require('./order/post'))
main.put('/order/addData', require('./order/put'))
main.get('/order/putDelete', require('./order/putDelete'))
// 物流
main.get('/order/getDelivery', require('./order/getDelivery'))
// 创建一个路由测试一下
main.get('/index',require('./test/index') )
// 大张订单
main.get('/daZhang/getData', require('./daZhang/get'))
main.get('/daZhang/add', require('./daZhang/add'))
// 大张信息
main.get('/daZhangXinxi/getData', require('./daZhangXinxi/get'))
main.post('/daZhangXinxi/addData', require('./daZhangXinxi/add'))
main.put('/daZhangXinxi/putData', require('./daZhangXinxi/put'))
main.delete('/daZhangXinxi/deleteData', require('./daZhangXinxi/dele'))
// 预约测试
main.get('/yuyue', require('./daZhang/yuyue'))





// 导出
module.exports = main