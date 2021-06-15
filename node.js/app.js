var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
// 错误日志
var logger = require('morgan');
// 跨域


var app = express();
const cors = require("cors");
app.use(cors())
// view engine setup
//指定项目的模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
//处理josn 格式的
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//指定静态资源
app.use(express.static(path.join(__dirname, 'public')));

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var cookieRouter = require('./routes/cookie');
// var mysqlRouter = require('./routes/sql');
var addUserRouter = require('./routes/addUser');
// var uploadImgRouter = require('./routes/multer');
// var loginRouter = require('./routes/login');
// var numRouter = require('./routes/num');

// app.use('/', indexRouter);
// app.use('/', usersRouter);
app.use('/', cookieRouter);
// app.use('/', mysqlRouter);
app.use('/', addUserRouter);
// app.use('/', loginRouter);
// app.use('/', numRouter);
// app.use('/', uploadImgRouter);


//下面不用管是错误日志
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  // next(createError(404));
  res.status(404).send("对不起我们这个网站不存在.............404")
  // next()
});


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

