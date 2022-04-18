const {
    order
} = require('../../database/model/order')

const jwt = require('jsonwebtoken')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
module.exports = async (req, res) => {
    // let OrderRetuen = await Order.findAndCountAll({
    //     limit: 0,
    // })
    let data = await order.findAll({
    })
    res.status(200).send({
        data: data,
        meta: {
            msg: "查询成功！",
            status: 200
        }
    })




}