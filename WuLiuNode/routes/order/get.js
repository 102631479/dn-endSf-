const {
    order
} = require('../../database/model/order')
const {
    tryErrorFun
} = require('../../src/until/returnFun')
const jwt = require('jsonwebtoken')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
module.exports = async (req, res) => {
    try {
        let obj = jwt.decode(req.headers.authorization, 'DingNing')
        let username = obj.username
        console.log(username, 'username');
        if (username == 'admin') {

            let OrderRetuen = await order.findAndCountAll({
                where: {
                    ['phone']: {
                        [Op.like]: '%' + req.query.phone + '%'
                    },
                    ['agent']: {
                        [Op.like]: '%' + req.query.agent + '%'
                    },
                    ['orderType']: {
                        [Op.like]: '%' + req.query.orderType + '%'
                    },
                    ['status']: 1

                },
                limit: 0,
            })
            let data = await order.findAll({
                order: [
                    ['id', 'desc']
                ],
                where: {
                    ['phone']: {
                        [Op.like]: '%' + req.query.phone + '%'
                    },
                    ['agent']: {
                        [Op.like]: '%' + req.query.agent + '%'
                    },
                    ['orderType']: {
                        [Op.like]: '%' + req.query.orderType + '%'
                    },
                    ['status']: 1

                },
                offset: (Number(req.query.pageIndex) - 1) * 10,
                limit: Number(req.query.pageSize)
            })
            res.status(200).send({
                data: {
                    total: OrderRetuen.count,
                    list: data
                },
                meta: {
                    msg: "查询成功！",
                    status: 200
                }
            })
        } else {

            let OrderRetuen = await order.findAndCountAll({
                where: {
                    ['username']: username,
                    ['phone']: {
                        [Op.like]: '%' + req.query.phone + '%'
                    },
                    ['agent']: {
                        [Op.like]: '%' + req.query.agent + '%'
                    },
                    ['orderType']: {
                        [Op.like]: '%' + req.query.orderType + '%'
                    },
                    ['status']: 1

                },
                limit: 0,
            })
            let data = await order.findAll({
                order: [
                    ['id', 'desc']
                ],
                where: {
                    ['username']: username,
                    ['phone']: {
                        [Op.like]: '%' + req.query.phone + '%'
                    },
                    ['agent']: {
                        [Op.like]: '%' + req.query.agent + '%'
                    },
                    ['orderType']: {
                        [Op.like]: '%' + req.query.orderType + '%'
                    },
                    ['status']: 1

                },
                offset: (Number(req.query.pageIndex) - 1) * 10,
                limit: Number(req.query.pageSize)
            })
            res.status(200).send({

                data: {
                    total: OrderRetuen.count,
                    list: data
                },
                meta: {
                    msg: "查询成功！",
                    status: 200
                }
            })
        }












        // if()

    } catch (d) {
        tryErrorFun(res,d)

    }





}