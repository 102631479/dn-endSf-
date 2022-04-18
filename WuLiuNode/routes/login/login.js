const {
    User
} = require('../../database/model/login/user')
const {
    tokenReturn
} = require('../../database/model/login/token')
const jwt = require('jsonwebtoken')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
module.exports = async (req, res) => {
    // 接收客户端传递过来的账号和密码
    const {
        username,
        password
    } = req.body

    console.log(username);

    // 根据用户名来查询数据库是否存在这个用户
    const findUser = await User.findOne({
        where: {
            ['username']: username
        }
    })
  
    // 判断
    if (!findUser) {
        res.status(201).send({
            data: null,
            meta: {
                msg: "用户名不存在！",
                status: 201
            }
        })
        return
    }
    // 判断账号 和 密码 是否正确

    if (username != findUser.username || password != findUser.password) {
        res.status(201).send({
            data: null,
            meta: {
                msg: "账号或者密码不正确！",
                status: 201
            }
        })
        return
    }


    // 登陆成功生成 token 返回给客户端 第一个参数 是 组 ，第二个是 私钥（自己随便定义）
    const token = jwt.sign({
        username
    }, 'DingNing')

    try {
        await tokenReturn.update({
            token: token
        }, {
            where: {
                username: username
            }
        }).then((d) => {
            res.status(200).send({
                data: {
                    username: username,
                    token
                },
                result: 'success',
                meta: {
                    msg: "登陆成功",
                    status: 200
                }
            })
        })

    } catch (d) {
        console.log(d);
        res.status(201).send({
            result: d,
            meta: {
                msg: "服务器错误",
                status: 201
            }
        })
    }


}