var request = require('request');
var qs = require('querystring');
module.exports = async (req, res) => {
    // let obj = jwt.decode(req.headers.authorization, 'DingNing')
    // let username = obj.username
    var url = `https://pay.elanvm.com/v1/wxmall/promotion/yye`;
    try{
        request({
            url: url,
            method: "POST",
            json: true,
            headers: {
                // "Accept-Language": "zh-CN,zh-Hans;q=0.9",
                // "Referer": "https://servicewechat.com/wxded25a5479be2a8c/172/page-frame.html",
                "mobile": '18300692207',
                'type': '1',
                'openId': '',
                'token': 'f05045ecde14129f36c55dfe0d5ea45d677621ef52a63a0bd415876f4ebe066a',
                'Content-Length':101,
                'Content-Type':'application/x-www-form-urlencoded',
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217 MicroMessenger/6.8.0(0x16080000) NetType/WIFI Language/en Branch/Br_trunk MiniProgramEnv/Mac'
            },
            body: qs.stringify({
                code: req.query.code,
                dcId: '2c95808c6f7a2ca2016f7d9bf51f0583',
                storeCode: '0099',
                quantity: '2'
            })
        }, async (error, response, body) => {
            // console.log(error, response, body);
            res.send(body)
        });
    }catch(d){
        console.log(d);
    }
 
}