const {
    order
} = require('../../database/model/order')
const jwt = require('jsonwebtoken')
module.exports = async (req, res) => {
    let obj = jwt.decode(req.headers.authorization, 'DingNing')
    let username = obj.username

    let {
        id,
        phone,
        shopname,
        remark,
        logistics,
        goPrice,
        status,
    } = req.body

    // console.log(req.body);
    // return

    try {
        let model = await order.findOne({
            where: {
                username,
                phone,
                shopname,
                remark,
                logistics,
                goPrice
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
        await order.update({
            phone,
            shopname,
            remark,
            logistics,
            goPrice,
            status,
        }, {
            where: {
                // ['username']: username,
                ['id']: id,
            }
        }).catch(err => {
            res.status(201).send({
                err,
                meta: {
                    msg: "修改失败",
                    status: 201
                }
            })
            return
        }).then(d => {
            res.status(200).send({
                meta: {
                    msg: "修改成功！",
                    status: 200
                }
            })
            return
        })

    } catch (d) {
        console.log(d, '失败原因');
    }



}