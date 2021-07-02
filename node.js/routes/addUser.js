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


// 查询
let dataModel = () => {
    return async (req, res) => {
        console.log(req.query.usercode, '个人账户信息');
        let [err, data] = await to(Db.select(`SELECT * FROM user WHERE usercode="${req.query.usercode}" and phone like "%${req.query.phone}%" ORDER by id desc `))
        err ? ERROR(res, '数据查询失败2', err) : SUCCESS(res, data);
    }
}
router.get('/data', dataModel());


// 添加
let textModel = () => {
    return async (req, res) => {
        console.log();
        let sqldata = req.query
        let [err, data] = await to(Db.select('INSERT INTO user (logisticsdata,datatime,name,phone,shopname,logistics,remark,goPrice,usercode) VALUE(?,?,?,?,?,?,?,?,?)',
            [sqldata.logisticsdata, sqldata.datatime, sqldata.name, sqldata.phone, sqldata.shopname, sqldata.logistics, sqldata.remark, sqldata.goPrice, sqldata.usercode]))
        err ? ERROR(res, '信息发送失败', err) : SUCCESS(res, data);
    }
}


router.get('/dataadd', textModel());

// 添加回收站
let recyled = () => {
    return async (req, res) => {
        console.log();
        let sqldata = req.query
        let [err, data] = await to(Db.select('INSERT INTO recyled (logisticsdata,datatime,name,phone,shopname,logistics,remark,goPrice,usercode) VALUE(?,?,?,?,?,?,?,?,?)',
            [sqldata.logisticsdata, sqldata.datatime, sqldata.name, sqldata.phone, sqldata.shopname, sqldata.logistics, sqldata.remark, sqldata.goPrice, sqldata.usercode]))
        if (err) {
            // console.log("回收失败");
            ERROR(res, '回收失败', err)
        } else {
            let [error, datase] = await to(Db.select(`DELETE FROM user WHERE id='${req.query.id}' AND usercode="${req.query.usercode}" `))
            error ? ERROR(res, '数据查询失败2', err) : SUCCESS(res, '回收成功 新增成功', datase);

        }
    }
}


router.get('/recyled', recyled());
// 回收站数据

let dataRecyled = () => {
    return async (req, res) => {
        console.log(req.query.usercode, '个人账户信息');
        let [err, data] = await to(Db.select(`SELECT * FROM recyled WHERE usercode="${req.query.usercode}" and phone like "%${req.query.phone}%" ORDER by id desc `))
        err ? ERROR(res, '数据查询失败2', err) : SUCCESS(res, data);
    }
}
router.get('/dataRecyled', dataRecyled());




// 添加回收站
let Retuedata = () => {
    return async (req, res) => {
        console.log();
        let sqldata = req.query
        let [err, data] = await to(Db.select('INSERT INTO user (logisticsdata,datatime,name,phone,shopname,logistics,remark,goPrice,usercode) VALUE(?,?,?,?,?,?,?,?,?)',
            [sqldata.logisticsdata, sqldata.datatime, sqldata.name, sqldata.phone, sqldata.shopname, sqldata.logistics, sqldata.remark, sqldata.goPrice, sqldata.usercode]))
        if (err) {
            console.log("回收失败");
            ERROR(res, '回收失败', err)
        } else {
            let [error, datase] = await to(Db.select(`DELETE FROM recyled WHERE id='${req.query.id}' AND usercode="${req.query.usercode}" `))
            error ? ERROR(res, '数据查询失败2', err) : SUCCESS(res, '回收成功 新增成功', datase);

        }
    }
}


router.get('/retureData', Retuedata());

module.exports = router;












































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