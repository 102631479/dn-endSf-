var express = require('express');
var router = express.Router();
const db = require("../utils/index");
const path = require('path');
router.get("/dataa", (req, res) => {
    db.query('SELECT * FROM user').then(data => {
        return data

    }).catch(err => {
        res.send({
            msg: "失败",
            err
        })

    })
    res.send({
        data
    })
})
module.exports = router;