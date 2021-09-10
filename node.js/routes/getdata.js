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
    console.log('爬虫开始');
    superagent.post('https://www.gza-e.com/api/consumer/user/info')
        // superagent.post('https://app.dennis.cn/v1/wxmall/advanceFix/apInfoAndStock')
        .set({
            // 'Content-Length': '372',
            'content-type': 'application/json'
        })
        .send({
            accessToken: 'ODc0ODEwNDU3MjI2MDg0MzUyOjE6YTk5ZmRjNTRiYTQwNGU1YThkMTIwODc0MDU3ZmE1ZWQ=',
            nonceStr: '40cbba5658fb4b2f96d52f632c1ceeec',
            Referer: 'https://servicewechat.com/wx88c590140de89f92/94/page-frame.html',
            sign: 'e50c8bfe1be606768361ef2efdb610c4',
            timestamp: '1631159791',
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