const {
    order
} = require('../../database/model/order')
const jwt = require('jsonwebtoken')
module.exports = async (req, res) => {
    let obj = jwt.decode(req.headers.authorization, 'DingNing')
    let username = obj.username

    let {
        phone,
        shopname,
        remark,
        logistics,
        goPrice,
        orderType,
        agent,
    } = req.body
    let status = 1
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
                goPrice,
                orderType,
                agent,

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
        await order.create({
            username,
            phone,
            shopname,
            remark,
            logistics,
            goPrice,
            status,
            orderType,
            agent
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
        res.status(201).send({
            meta: {
                msg: "失败",
                status: 400
            }
        })
    }



}