let mysql = require("mysql")
// 数据库操作
// 传入空数组的目的是  为了不传值得时候  不报错
function query(sql, options = []) {
    let p = new Promise((resolve, reject) => {
        // 1，创建数据库
        let conn = mysql.createConnection({
            host: 'localhost', //主机名
            user: 'root',
            password: 'root',
            database: 'xinxi',
            charset: 'utf8'
        })
        // console.log(conn, "数据库资料");
        // 2，连接数据库
        conn.connect(err => {
            // 发生一个错误 这边   下面唐突的  把结果扔出去 会造成连接失败  
            // 原错误写法
            // console.log('数据库连接失败.....');
            // reject(err)
            // 新正确写法
            if (err) {
                console.log('数据库连接失败.....');
                reject(err)
            }
        })
        // 3，数据库操作  
        // 这边的思路是  想要拿到回调函数的  结果  用promise 用成功的回调函数
        conn.query(sql, options, (err, data) => {
            err ? reject(err) : resolve(data)
        })
        // 4 ， 关闭数据库
        conn.end()
    })
    // 最后不要忘了  返回promise
    return p

}
module.exports = {
    query
}