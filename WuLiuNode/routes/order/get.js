const {
    order
} = require('../../database/model/order')

const jwt = require('jsonwebtoken')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
module.exports = async (req, res) => {
    try {
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
                ['status']:1

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
                ['status']:1

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
    } catch (d) {
        console.log(d);
    }





}