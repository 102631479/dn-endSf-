var express = require('express');
var router = express.Router();
const Db = require('../utils/Db')
const to = require('../utils/await-to');
let {
  SUCCESS,
  ERROR,
} = require('../utils/result'); //结果

let getLogistics = () => {
  return async (req, res) => {
    let updata = req.query
    let [err, data] = await to(Db.select(`UPDATE user SET logisticsdata="${updata.logisticsdata}" WHERE id="${updata.id}"`))
    err ? ERROR(res, '数据修改失败', err) : SUCCESS(res, 'sql修改', data);
  }
}

router.get('/getLogistics', getLogistics())

let updata = () => {
  return async (req, res) => {
    let updata = req.query
    let [err, data] = await to(Db.select(`UPDATE user SET logisticsdata="${updata.logisticsdata}",name="${updata.name}", logistics="${updata.logistics}",phone="${updata.phone}",remark="${updata.remark}",shopname="${updata.shopname}", goPrice="${updata.goPrice}"WHERE id="${updata.id}"`))
    err ? ERROR(res, '数据修改失败', err) : SUCCESS(res, 'sql修改', data);
  }
}

router.get('/oneupdata', updata())




module.exports = router;