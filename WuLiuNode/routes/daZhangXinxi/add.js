const {
    daZhangXinxi
} = require('../../database/model/daZhangXinxi')
const {
    tryErrorFun
} = require('../../src/until/returnFun')
const jwt = require('jsonwebtoken')
module.exports = async (req, res) => {
    let obj = jwt.decode(req.headers.authorization, 'DingNing')
    let username = obj.username

    let {
        mobile,
        memberName,
        wxid,
        tokenData,
        openidData,
        remark,
    } = req.body
    try {
        let model = await daZhangXinxi.findOne({
            where: {
                username,
                mobile,
                memberName,
                wxid,
                tokenData,
                openidData,
                remark,
            }
        })
        if (model) {
            res.status(201).send({
                data: null,
                meta: {
                    msg: "数据已经存在了!",
                    status: 201
                }
            })
            return
        }
        await daZhangXinxi.create({
            username,
            mobile,
            memberName,
            wxid,
            tokenData,
            openidData,
            remark,
        }).catch(err => {
            res.status(201).send({
                err,
                meta: {
                    msg: "添加失败",
                    status: 201
                }
            })
            return
        }).then(d => {
            res.status(200).send({
                meta: {
                    msg: "创建成功！",
                    status: 200
                }
            })
            return
        })

    } catch (d) {
        tryErrorFun(res,d)
    }



}