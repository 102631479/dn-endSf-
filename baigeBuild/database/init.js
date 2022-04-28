const Sequelize = require('sequelize')
const config = require('../config')
var configData = config.config.sql
// 项目使用地址
const sequelize = new Sequelize(configData.excel, configData.username, configData.password, {
  host: configData.host, // => 地址
  port: configData.port, // => 数据库端口 默认是 3306
  dialect: 'mysql', // => 指定数据库类型 必须指定
  timezone: '+08:00',
  logging: false,
  define: {
    freezeTableName: true,
  },
  dialectOptions: {
    charset: 'utf8'
  }
})

// 测试地址
// const sequelize = new Sequelize('cic_project', 'root', 'ddd13131313', {
//   host: 'localhost', // => 地址
//   dialect: 'mysql', // => 指定数据库类型 必须指定
//   port: '3306', // => 数据库端口 默认是 3306
//   define: {
//     freezeTableName: true,
//   },
// })
// 连接
sequelize
  // 发送连接请求
  .authenticate()
  // 成功
  .then(() => {
    console.log('数据库连接成功！  ' + configData.host + 'mysql');
  })
  // 失败
  .catch(err => {
    console.error('连接失败！' + '错误信息：' + err);
  });

// 导出这两个 创建模型 需要
module.exports = {
  Sequelize,
  sequelize
}