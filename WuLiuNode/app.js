const jwt = require('jsonwebtoken')
// 导入 express
const express = require('express')
const app = express()
// 导出接收 post 请求数据 模块
const bodyParser = require('body-parser')
// 导入主路由
const main = require('./routes/main')
// 导入数据库连接
require('./database/init')
var morgan = require('morgan');

// 处理josn格式数据
app.use(express.json());



// const {
//     tokenReturn
// } = require('./database/model/token')
// 打印日志访问接口记录
app.use(morgan('dev'));
app.disable('etag');


const cors = require("cors");
app.use(cors())


// 设置跨域和相应数据格式  
// app.all('*', function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Headers', 'X-Requested-With, mytoken')
//     res.header('Access-Control-Allow-Headers', 'X-Requested-With, Authorization')
//     res.setHeader('Content-Type', 'application/json;charset=utf-8')
//     res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With,sessionToken')
//     res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE')
//     res.header('X-Powered-By', ' 3.2.1')
//     // // res.setHeader('Expires',new Date(Date.now()+10*1000).toGMTString())
//     // res.setHeader('Cache-Control','false')
//     // // res.setHeader('Last-Modified', (new Date()).toUTCString());
//     if (req.method == 'OPTIONS') res.send(200)
//     /*让options请求快速返回*/
//     else next()
// })


app.get('/', (req, res) => {
    res.status(404).send({
        data: null,
        meta: {
            msg: 'Not Found',
            status: 404
        }
    })
})


app.use('/api', async (req, res, next) => {
    // next()
    // return
    if (req.url == '/login' || req.url == '/register' || req.url == '/redisTest') {
        // // console.log(req.body,'1111');
        next()
        return
    }
    // if (req.url == '/cic_info/downtable') {
    //     // console.log('下载接口');
    //     next()
    //     return
    // }
    // if (req.url == '/biz_call/getData') {
    //     // console.log('下载接口');
    //     next()
    //     return
    // }
    // 接收客户端传递过来的 token
    const token = String(req.headers.authorization)
    // 解析 token 如果解析失败 返回的是 null
    const usernameData = jwt.decode(token, 'DingNing')
    // 判断客户端是否传递了 token
    if (token == 'undefined' || usernameData == null) {
        // next()
        // return
        res.status(201).send({
            data: null,
            meta: {
                msg: "token无效",
                status: 4004
            }
        })
        return
    } else {
        next()
        return
        // token时间戳
        const username = jwt.decode(token, 'DingNing').username
        // // 当前时间戳
        // var TimeData = jwt.decode(token, 'DingNing').iat.toString()
        // var timeNow = Math.floor(Date.now() / 1000).toString()
        // let p1 = new Date(TimeData).toDateString()
        // let p2 = new Date(timeNow).toDateString()
        // if (!p1 == p2) {
        //     res.status(201).send({
        //         meta: {
        //             msg: "登录已经过期了，重新登录吧aaaaa！！！",
        //             status: 4004
        //         }
        //     })
        //     return
        // }

        let model = await tokenReturn.findOne({
            where: {
                ['username']: username
            }
        }).catch(err => {
            res.status(201).send({
                role: username,
                meta: {
                    msg: "token已经不能使用,重新登录吧",
                    status: 4004
                }
            })

        }).then(d => {
            // // console.log(d.token,'数据库的');
            // // console.log(token,'传过来的');
            next()
            return


            
            if (d.token == token) {
                next()
            } else {
                res.status(201).send({
                    role: username,
                    meta: {
                        msg: "token已经不能使用,重新登录吧",
                        status: 4004
                    }
                })
            }
        })
    }
})



app.use(bodyParser.urlencoded({
    extended: false
}))
// 为main 匹配 地址 /api
app.use('/api', main)
// 监听8888 端口
app.listen(8888, (res) => {
    // // console.log(res,'监听返回');
    // // console.log('youren')
})