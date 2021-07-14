var express = require('express');
var router = express.Router();
const db = require("../utils/index");
const path = require('path');
var cheerio = require('cheerio');
var superagent = require('superagent');

/*
Host: pay.elanvm.com
Connection: keep-alive
Content-Length: 0
openId: 
mobile: 16237187592
content-type: application/x-www-form-urlencoded
type: 1
token: 845194cc69d8fddf1841d7c43bb2aa755fa5fe106344f806cdb275dad4838a9b
Accept-Encoding: gzip,compress,br,deflate
User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 12_5_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.7(0x18000731) NetType/WIFI Language/zh_CN
Referer: https://servicewechat.com/wxded25a5479be2a8c/129/page-frame.html
*/



router.get('/getdata', (req, res) => {
    superagent.post('https://app.dennis.cn/v1/wxmall/advanceFix/afIndex')
        .set({
            // "Host": "",
            // "Connection": "keep-alive",
            // "Accept-Encoding": "gzip, deflate, br",
            'username': 'dns_ee7190d9fcfd',
            "content-type": "application/x-www-form-urlencoded",
            "type": '1',
            "token": "de16dbd357c2709f853e4102a34f77b33350e03900ab03e6c86cd17111ab3ca6",
            'User-Agent': " Mozilla/5.0 (iPhone; CPU iPhone OS 12_5_3 like Mac OS X)",
        })
        .send({
            mobile:"18300692207",
            apId:"5e40d21229274cd7a11c871b46bdc5f6"
        })
        .end(function (err, sres) {
            console.log(err, 'err');
            console.log(sres, 'sres');
            res.send(sres.body);
            // if (err) {
            //     // return next(err);
            // }
            // var $ = cheerio.load(sres.text);
            // var items = [];
            // $('#topic_list .topic_title').each(function (idx, element) {
            //     // console.log(element,'element');
            //     // console.log(idx,'idx');
            //     var $element = $(element);
            //     items.push({
            //         title: $element.attr('title'),
            //         href: $element.attr('href')
            //     });
            // });

        });
})

module.exports = router;