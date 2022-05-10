const {
    daZhangXinxi
} = require('../../database/model/daZhangXinxi')
const {
    DeleErr,
    DeleSuccess,
    tryErrorFun
} = require('../../src/until/returnFun')
const jwt = require('jsonwebtoken')
module.exports = async (req, res) => {
    const obj = jwt.decode(req.headers.authorization, 'DingNing')
    const username = obj.username
    const model = await daZhangXinxi.findOne({
        where: {
            ['username']: username,
            ['id']: req.query.id
        }
    })
    try {
        if (username == 'admin') {
            daZhangXinxi.destroy({
                where: {
                    ['id']: req.query.id
                }
            }).then(d => {
                DeleSuccess(res)
            }).catch(err => {
                DeleErr(res)
            });
            return
        }
        if (model) {
            daZhangXinxi.destroy({
                where: {
                    ['username']: username,
                    ['id']: req.query.id
                }
            }).then(d => {
                DeleSuccess(res)
            }).catch(err => {
                DeleErr(res)
            });
        } else {
            DeleErr(res)
        }

    } catch (d) {
        tryErrorFun(res, d)
    }





}