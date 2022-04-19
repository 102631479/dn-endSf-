const {
    order
} = require('../../database/model/order')
const jwt = require('jsonwebtoken')
module.exports = async (req, res) => {
    try {
        await order.update({
            status: 0,
        }, {
            where: {
                ['id']: req.query.id,
            }
        }).catch(err => {
            res.status(201).send({
                err,
                meta: {
                    msg: "删除失败",
                    status: 201
                }
            })
            return
        }).then(d => {
            res.status(200).send({
                meta: {
                    msg: "删除成功",
                    status: 200
                }
            })
            return
        })

    } catch (d) {
        console.log(d, '失败原因');
    }



}