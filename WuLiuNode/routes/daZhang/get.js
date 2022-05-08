const {
    daZhang
} = require('../../database/model/daZhang')

const jwt = require('jsonwebtoken')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
module.exports = async (req, res) => {
    try {
        // return
        let obj = jwt.decode(req.headers.authorization, 'DingNing')
        let username = obj.username
        if (username == 'admin') {
            let daZhangRetuen = await daZhang.findAndCountAll({
                where: {
                    ['memberMobile']: {
                        [Op.like]: '%' + req.query.phone + '%'
                    },
                    ['status']: {
                        [Op.like]: '%' + req.query.status + '%'
                    },

                },
                limit: 0,
            })
            let data = await daZhang.findAll({
                order: [
                    ['id', 'desc']
                ],
                where: {
                    ['status']: {
                        [Op.like]: '%' + req.query.status + '%'
                    },
                    ['memberMobile']: {
                        [Op.like]: '%' + req.query.phone + '%'
                    },
                },
                offset: (Number(req.query.pageIndex) - 1) * 10,
                limit: Number(req.query.pageSize)
            })
            res.status(200).send({
                data: {
                    total: daZhangRetuen.count,
                    list: data
                },
                meta: {
                    msg: "查询成功！",
                    status: 200
                }
            })
        } else {

            let daZhangRetuen = await daZhang.findAndCountAll({
                where: {
                    ['username']: username,
                    ['status']: {
                        [Op.like]: '%' + req.query.status + '%'
                    },
                    ['memberMobile']: {
                        [Op.like]: '%' + req.query.phone + '%'
                    },
                },
                limit: 0,
            })
            let data = await daZhang.findAll({
                order: [
                    ['id', 'desc']
                ],
                where: {
                    ['username']: username,
                    ['status']: {
                        [Op.like]: '%' + req.query.status + '%'
                    },
                    ['memberMobile']: {
                        [Op.like]: '%' + req.query.phone + '%'
                    },
                },
                offset: (Number(req.query.pageIndex) - 1) * 10,
                limit: Number(req.query.pageSize)
            })
            res.status(200).send({
                data: {
                    total: daZhangRetuen.count,
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
        res.status(201).send({
            meta: {
                msg: "失败",
                status: 400
            }
        })
    }





}