var request = require('request');
const {
    order
} = require('../../database/model/order')
const jwt = require('jsonwebtoken')

module.exports = async (req, res) => {
    let obj = jwt.decode(req.headers.authorization, 'DingNing')
    let username = obj.username
    var headers = {
        "Content-Type": "application/json;charset=UTF-8",
        "Authorization": "APPCODE 56ab62bcacb04d5e8a9b575f056831f1",
    }
    var url = `http://jisukdcx.market.alicloudapi.com/express/query?mobile=${req.query.phone}&number=${req.query.logistics}&type=auto`;
    var options = {
        url: url,
        method: 'GET',
        headers: headers,
    }
    try {
        request(options, async (error, response, body) => {
            if (error !== null) {
                res.status(200).send({
                    data: username,
                    body,
                    meta: {
                        msg: "物流更新失败",
                        status: 200
                    }
                })
                console.log('error:', error);
                return;
            }
            await order.update({
                logisticsData: body
            }, {
                where: {
                    ['id']: req.query.id,
                }
            }).then(d => {
                res.status(200).send({
                    data: username,
                    body,
                    meta: {
                        body,
                        msg: "物流更新成功",
                        status: 200
                    }
                })
            }).catch(err => {
                res.status(201).send({
                    err,
                    role: username,
                    meta: {
                        msg: "物流更新失败",
                        status: 400
                    }
                })
            })
        })
    } catch (d) {
        console.log(d, '失败原因');
    }


}