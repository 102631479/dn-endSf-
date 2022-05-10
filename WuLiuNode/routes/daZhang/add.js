var request = require('request');
var qs = require('querystring');
const jwt = require('jsonwebtoken')
const {
    tryErrorFun
} = require('../../src/until/returnFun')
const {
    daZhang
} = require('../../database/model/daZhang')
module.exports = async (req, res) => {

    let obj = jwt.decode(req.headers.authorization, 'DingNing')
    let username = obj.username
    var url = `https://pay.elanvm.com/v1/wxmall/maotai/order/orderList`;
    request({
        url: url,
        method: "POST",
        json: true,
        headers: {
            "mobile": '18300692217',
            'type': '1',
            'openId': 'oRPcE5uFhjvF4_O1GKUD5eUUlqB',
            'token': 'f05045ecde14129f36c55dfe0d5ea45d677621ef52a63a0bd415876f4ebe066a',
            'Content-Length': '26',
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217 MicroMessenger/6.8.0(0x16080000) NetType/WIFI Language/en Branch/Br_trunk MiniProgramEnv/Mac'
        },
        body: qs.stringify({
            mobile: req.query.memberMobile,
            cpage: '1'
        })
    }, async (error, response, body) => {
        // console.log(body);
        // console.log(response.statusCode);
        if (!error && response.statusCode == 200) {
            /*
                        {
                            memberName: '刘新强',
                            memberMobile: '16277139419',
                            memberIdCardNo: '412701197906223097',
                            storeName: '长申广场金纱店',
                            productLable: '爆款',
                            productName: '飞天53%vol 500ml贵州茅台酒（带杯）',
                            productImagePath: 'https://imgdz.eheguang.com/uploadb/image/202005/small/4728f362d68d4778b35e950bc055a66e.jpg',
                            productPrice: 1499,
                            advanceBuyId: '13e74ea8a36e4a22a665d03be76c46c3',
                            billNumber: '0092414711184853605',
                            createDate: '2022-05-03 12:02:03',
                            payType: '微信支付',
                            quantity: 2,
                            pickTime: '',
                            totalAmount: 2998,
                            status: 0,
                            payStatus: 1,
                            invoiceStatus: 0
                          }


            */
            try {

                let {
                    memberMobile,
                } = req.query
                let data = body.orderInfoList[0]
                if (body.orderInfoList.length == 0) {
                    res.status(201).send({
                        meta: {
                            msg: "没有数据",
                            status: 201
                        }
                    })
                    return
                }
                data.username = username
                // console.log(username,'uaernamae');
                // res.send(data)

                // let dataB = {
                //     姓名: data.memberName,
                //     手机号: data.memberMobile,
                //     身份证: data.memberIdCardNo,
                //     商店: data.storeName,
                //     支付方式: data.payType,
                //     支付金额: data.totalAmount,
                //     领取状态: data.status == 0 ? '未领取' : '已领取',
                //     下单时间: data.createDate,
                //     领取时间: data.pickTime,

                // }
                let model = await daZhang.findOne({
                    where: {
                        username,
                        memberMobile
                    }
                })

                console.log(data,'datass');
                if (model) {
                    await daZhang.update(data, {
                        where: {
                            ['username']: username,
                            ['memberMobile']: req.query.memberMobile,
                        }
                    }).catch(err => {
                        res.status(201).send({
                            err,
                            meta: {
                                msg: "更新失败",
                                status: 201
                            }
                        })
                        return
                    }).then(d => {
                        res.status(200).send({
                            meta: {
                                msg: "数据更新！",
                                status: 200
                            }
                        })
                        return
                    })
                    // res.status(201).send({
                    //     meta: {
                    //         msg: "手机号已存在",
                    //         status: 201
                    //     }
                    // })
                    return
                }
                
                await daZhang.create(data).catch(err => {
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
                tryErrorFun(res,d)
            }

        }
    });

































    return



    var url = `https://pay.elanvm.com/v1/wxmall/maotai/daZhang/daZhangList`;
    console.log(req.query.memberMobile);
    request({
        url: url,
        method: "POST",
        json: true,
        headers: {
            "mobile": '18300692217',
            'type': '1',
            'openId': 'oRPcE5uFhjvF4_O1GKUD5eUUlqB',
            'token': 'f05045ecde14129f36c55dfe0d5ea45d677621ef52a63a0bd415876f4ebe066a',
            'Content-Length': '26',
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217 MicroMessenger/6.8.0(0x16080000) NetType/WIFI Language/en Branch/Br_trunk MiniProgramEnv/Mac'
        },
        body: qs.stringify({
            mobile: 16751467664,
            cpage: '1'
        })
    }, function (error, response, body) {
        console.log(body);
        console.log(response.statusCode);
        return
        if (!error && response.statusCode == 200) {
            console.log(body, 'body');
            /*
                        {
                            memberName: '刘新强',
                            memberMobile: '16277139419',
                            memberIdCardNo: '412701197906223097',
                            storeName: '长申广场金纱店',
                            productLable: '爆款',
                            productName: '飞天53%vol 500ml贵州茅台酒（带杯）',
                            productImagePath: 'https://imgdz.eheguang.com/uploadb/image/202005/small/4728f362d68d4778b35e950bc055a66e.jpg',
                            productPrice: 1499,
                            advanceBuyId: '13e74ea8a36e4a22a665d03be76c46c3',
                            billNumber: '0092414711184853605',
                            createDate: '2022-05-03 12:02:03',
                            payType: '微信支付',
                            quantity: 2,
                            pickTime: '',
                            totalAmount: 2998,
                            status: 0,
                            payStatus: 1,
                            invoiceStatus: 0
                          }


            */
            try {

            } catch (d) {
                res.send(d)

            }

        }
    });
}