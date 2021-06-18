var express = require('express');
var router = express.Router();
var request = require('request');
var querystring = require('querystring');
router.get('/logisticsdata', (req, res) => {
    var headers = {
        "Content-Type": "application/json;charset=UTF-8",
        "Authorization": "APPCODE 56ab62bcacb04d5e8a9b575f056831f1",
    }
    var url = `http://jisukdcx.market.alicloudapi.com/express/query?mobile=${req.query.mobile}&number=${req.query.number}&type=auto`;
    var options = {
        url: url,
        method: 'GET',
        headers: headers,
    }
    request(options, function (error, response, body) {
        if (error !== null) {
            console.log('error:', error);
            return;
        }
        res.send(body)
    });

})
module.exports = router;