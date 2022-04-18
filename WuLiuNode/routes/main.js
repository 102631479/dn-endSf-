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
// 物流
main.get('/order/getDelivery', require('./order/getDelivery'))







// 创建一个路由测试一下
main.get('/index', (req, res) => {
    res.send('访问成功！')
})

// 导出
module.exports = main