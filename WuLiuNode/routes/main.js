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

main.get('/daZhang/getData', require('./daZhang/get'))
main.get('/daZhang/add', require('./daZhang/add'))





// 导出
module.exports = main