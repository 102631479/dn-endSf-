const {
    daZhangXinxi
} = require('../../database/model/daZhangXinxi')
const jwt = require('jsonwebtoken')
const {
    tryErrorFun,
    ExistedErrorFun,
    EditErrorFun,
    EditSuccFun
} = require('../../src/until/returnFun')
module.exports = async (req, res) => {
    let obj = jwt.decode(req.headers.authorization, 'DingNing')
    let username = obj.username
    let {
        id,
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
            ExistedErrorFun(res)
            return
        }
        await daZhangXinxi.update({
            username,
            mobile,
            memberName,
            wxid,
            tokenData,
            openidData,
            remark,
        }, {
            where: {
                ['id']: id,
            }
        }).catch(err => {
            EditErrorFun(res, err)
            return
        }).then(d => {
            EditSuccFun(res)
            return
        })

    } catch (d) {
        tryErrorFun(res,d)

    }



}