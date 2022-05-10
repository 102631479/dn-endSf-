const {
    tokenReturn
} = require('../../database/model/login/token')
const jwt = require('jsonwebtoken')
const {
    tryErrorFun
} = require('../../src/until/returnFun')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
module.exports = async (req, res) => {
    res.status(200).send({
        meta: {
            msg: "查询成功！",
            status: 200
        }
    })
    return
    const obj = jwt.decode(req.headers.authorization, 'DingNing')
    const username = obj.username
    tokenReturn.findAll({
        attributes: ['id', 'username', 'createdAt'],
        where: {
            ['username']: {
                [Op.like]: '%' + req.query.name + '%'
            },
        },
        // 分页属性
        // offset:1,
        // limit: 5

    }).catch(err => {
        // // console.log(err.original,'sssssss');
        res.send(202).send({
            data: '查询失败'
        })
    }).then(d => {
        res.status(200).send({
            data: d,
            PageSize: d.length,
            // PageSize: 10,
            // page: 1,
            meta: {
                msg: "查询成功！",
                status: 200
            }
        })
    });


}