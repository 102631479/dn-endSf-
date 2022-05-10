const {
    daZhangXinxi
} = require('../../database/model/daZhangXinxi')
const {
    tryErrorFun,
    getSuccessFun,
} = require('../../src/until/returnFun')
const jwt = require('jsonwebtoken')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
module.exports = async (req, res) => {
    try {
        let obj = jwt.decode(req.headers.authorization, 'DingNing')
        let username = obj.username
        if (username == 'admin') {
            let daZhangXinxiRetuen = await daZhangXinxi.findAndCountAll({
                where: {
                    ['mobile']: {
                        [Op.like]: '%' + req.query.mobile + '%'
                    },
                    ['wxid']: {
                        [Op.like]: '%' + req.query.wxid + '%'
                    },
                },
                limit: 0,
            })
            let data = await daZhangXinxi.findAll({
                attributes: ['id',"username","memberName","wxid","tokenData",'openidData','mobile','updatedAt','remark'],
                order: [
                    ['id', 'desc']
                ],
                where: {
                    ['mobile']: {
                        [Op.like]: '%' + req.query.mobile + '%'
                    },
                    ['wxid']: {
                        [Op.like]: '%' + req.query.wxid + '%'
                    },
                },
                offset: (Number(req.query.pageIndex) - 1) * 10,
                limit: Number(req.query.pageSize)
            })
            let dataObj = {
                total: daZhangXinxiRetuen.count,
                list: data
            }
            getSuccessFun(res, dataObj)
            
        } else {
            let daZhangXinxiRetuen = await daZhangXinxi.findAndCountAll({
                where: {
                    ['username']: username,
                    ['mobile']: {
                        [Op.like]: '%' + req.query.mobile + '%'
                    },
                    ['wxid']: {
                        [Op.like]: '%' + req.query.wxid + '%'
                    },
                },
                limit: 0,
            })
            let data = await daZhangXinxi.findAll({
                order: [
                    ['id', 'desc']
                ],
                attributes: ['id',"username","memberName","wxid","tokenData",'openidData','mobile','updatedAt','remark'],
                where: {
                    ['username']: username,
                    ['mobile']: {
                        [Op.like]: '%' + req.query.mobile + '%'
                    },
                    ['wxid']: {
                        [Op.like]: '%' + req.query.wxid + '%'
                    },
                },
                offset: (Number(req.query.pageIndex) - 1) * 10,
                limit: Number(req.query.pageSize)
            })
            let dataObj = {
                total: daZhangXinxiRetuen.count,
                list: data
            }
            getSuccessFun(res, dataObj)
        }
    } catch (d) {
        tryErrorFun(res,d)
    }
}