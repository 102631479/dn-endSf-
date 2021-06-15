
var express = require('express');
var router = express.Router();
const path = require('path');
const Db = require('../utils/Db')
const to = require('../utils/await-to');
let { SUCCESS, ERROR, } = require('../utils/result');//结果
let { getuid } = require('../utils/tablefuntion')

// 登录
let login = () => {
    return async (req, res) => {
        let [err, data] = await to(Db.select(`SELECT * FROM user WHERE user="${req.body.user}"`))
        data.length >= 1 ? SUCCESS(res, data) : ERROR(res, '没有该用户请注册', err);
    }
}

router.post('/login', login())




// 注册
let register = () => {
    return async (req, res) => {
        if (req.body.user == '' || req.body.password == '') {
            ERROR(res, '信息不完整')
            return
        }
        let [err, data] = await to(Db.select(`SELECT * FROM user WHERE user="${req.body.user}"`))
        if (data.length >= 1) {
            ERROR(res, '用户已经注册请登录', err)
        } else {
            let data = {
                user: req.body.user,
                password: req.body.password
            }
            data = getuid(data)
            // console.log(data,'加密后的数据');
            // SUCCESS(res)
        }
    }
}
// return
// let [err, data] = await to(Db.select())


router.post('/register', register())

module.exports = router;