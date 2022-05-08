var request = require('request');
var qs = require('querystring');

module.exports = async (req, res) => {
    // res.cookie('JSESSIONID',"true", {maxAge:30000, httpOnly:true, signed:true} ) 
    // console.log(req.query.phone, 'req.query.phone');
    // return
    var url = `https://pay.elanvm.com/v1/wxmall/maotai/order/orderList`;

    var data = {
        mobile: "16277139419",
        cpage: 1
    }
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
            mobile: req.query.phone,
            cpage: '1'
        })
    }, function (error, response, body) {
        console.log(body);
        console.log(response.statusCode);
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
                let data = body.orderInfoList[0]
                data.username = username
                let dataB = {
                    姓名: data.memberName,
                    手机号: data.memberMobile,
                    身份证: data.memberIdCardNo,
                    商店: data.storeName,
                    支付方式: data.payType,
                    支付金额: data.totalAmount,
                    领取状态: data.status == 0 ? '未领取' : '已领取',
                    下单时间: data.createDate,
                    领取时间: data.pickTime,

                }
                res.send(dataB)
            } catch (d) {
                res.send(d)

            }

        }
    });
}