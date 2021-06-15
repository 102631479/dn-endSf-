var express = require('express');
var router = express.Router();


router.use( (req, res, next) => {
  // res.send('对不起我们网站正在维护.............')
  next()
})

// router.use('/login', (req, res, next) => {
//   //用户为登录  
//   let isLogin = true;
//   if (isLogin) {
//     next()
//   } else {
//     res.send('对不起您您没有登录')
//   }
// })



// /* GET home page. */
// router.post('/login', function (req, res, next) {
//   console.log(req.body);
//   // res.render('index', { title: '欢迎来到Express' });
//   res.send({
//     name: '张三',
//     age: 20
//   })
// });






module.exports = router;