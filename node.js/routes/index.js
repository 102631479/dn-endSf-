var express = require('express');
var router = express.Router();
const Db = require('../utils/Db')
const to = require('../utils/await-to');
let {
  SUCCESS,
  ERROR,
} = require('../utils/result'); //结果




// router.use( (req, res, next) => {
//   // res.send('对不起我们网站正在维护.............')
//   next()
// })


let getLogistics = () => {
  return async (req, res) => {
    let updata = req.query
    let [err, data] = await to(Db.select(`UPDATE user SET logisticsdata="${updata.logisticsdata}" WHERE id="${updata.id}"`))
    err ? ERROR(res, '数据修改失败', err) : SUCCESS(res,'sql修改', data);
  }
}

router.get('/getLogistics', getLogistics())
module.exports = router;