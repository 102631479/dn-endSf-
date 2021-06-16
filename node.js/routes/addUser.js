var express = require('express');
var router = express.Router();
// const db = require("../utils/index");
const path = require('path');
const Db = require('../utils/Db')
const to = require('../utils/await-to');
let {
    SUCCESS,
    ERROR
} = require('../utils/result'); //结果

// const bodyParser = require("body-parser");


// router.post('/loginadd', (req, res) => {
//     // console.log(req.body, 'req.body');
//     // console.log(req, 'req.body');
//     db.query('INSERT INTO xinxi (name,time) VALUE(?,?)', [req.body.name, req.body.time]).then(data => {
//         res.status(200).send({
//             msg: "成功",
//             code: 200
//         })
//     }).catch(err => {
//         res.send({
//             msg: "失败",
//             err
//         })
//     })
// })


// router.post('/loginadd', (req, res) => {
//     Db.select('INSERT INTO xinxi (name,time) VALUE(?,?)', [req.body.name, req.body.time]).then(data => {
//         res.status(200).send({
//             msg: "成功",
//             code: 200
//         })
//     }).catch(err => {
//         res.send({
//             msg: "失败",
//             err
//         })
//     })
// })



// let textModel = () => {
//     return async (req, res) => {
//         let [err, data] = await to(Db.select('INSERT INTO xinxi (name,time,text) VALUE(?,?,?)', [req.query.name, req.query.time, req.query.text]))
//         err ? ERROR(res, '信息发送失败', err) : SUCCESS(res, data);
//     }
// }
// router.get('/text', textModel());






// router.get('/text', async (req, res) => {
// let [err, data] = await to(Db.select('INSERT INTO xinxi (name,time,text) VALUE(?,?,?)', [req.query.name, req.query.time, req.query.text]))
// console.log(err, data, '我是err');
// err ? ERROR(res, '轮播图查询失败', err) : SUCCESS(res, data);

// .then(data => {
//     res.status(200).send({
//         msg: "成功",
//         code: 200
//     })
// }).catch(err => {
//     res.send({
//         msg: "失败",
//         err
//     })
// })
// })



let dataModel = () => {
    return async (req, res) => {
        console.log(req.query.phone);
        console.log(typeof (req.query.phone));
        console.log(req.query.phone == "");
        // console.log(req.query.phone);
        if (req.query.phone) {
            let [err, data] = await to(Db.select(`SELECT * FROM user WHERE phone like "%${req.query.phone}%"`))
            err ? ERROR(res, '数据查询失败2', err) : SUCCESS(res, data);
        } else {
            let [err, data] = await to(Db.select('SELECT * FROM `user`order by id desc'))
            err ? ERROR(res, '数据查询失败1', err) : SUCCESS(res, data);
        }

    }
}
router.get('/data', dataModel());

let textModel = () => {
    return async (req, res) => {
        let sqldata = req.query
        let [err, data] = await to(Db.select('INSERT INTO user (logisticsdata,datatime,name,phone,shopname,logistics,remark,goPrice) VALUE(?,?,?,?,?,?,?,?)',
            [sqldata.logisticsdata, sqldata.datatime, sqldata.name, sqldata.phone, sqldata.shopname, sqldata.logistics, sqldata.remark, sqldata.goPrice]))
        err ? ERROR(res, '信息发送失败', err) : SUCCESS(res, data);
    }
}
router.get('/dataadd', textModel());





// router.get('/data', (req, res) => {
//     Db.select('SELECT * FROM xinxi').then(data => {
//         res.status(200).send({ data })
//     }).catch(err => {
//         res.send({
//             msg: "失败",
//             err: "连接失败"
//         })
//     })
// })




module.exports = router;