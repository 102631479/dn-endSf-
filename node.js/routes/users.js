var express = require('express');
var router = express.Router();
const db = require("../config/Db");
const path = require('path');

// 引入 验证码中间件
var svgCaptcha = require("svg-captcha");


router.get('/usersdata', (req, res) => {
  db.query('SELECT * FROM `user`').then(data => {
    res.status(200).send({
      msg: "成功",
      code: 200,
      data
    })
  }).catch(err => {
    res.send({
      msg: "失败",
      err
    })
  })
})

module.exports = router;