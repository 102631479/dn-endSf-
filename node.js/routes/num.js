var express = require('express');
var router = express.Router();
const db = require("../utils/index");
const path = require('path');
router.get('/number', (req, res) => {
    let data = {
        num: 12345,
        statur: 22130,
        ren: 13020,
    }
    res.send({
        code: 200,
        data
    })

})

module.exports = router;