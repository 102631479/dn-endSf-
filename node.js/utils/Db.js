var mysql = require('mysql'); // node-mysql module
const {
    json
} = require('body-parser');

// errno 4058 路径问题
// 注意这里必须用绝对路径
let path = require('path')
let fs = require('fs');
let to = require('./await-to');
let buf = fs.readFileSync(path.join(__dirname, "config.json"))
let obj = JSON.parse(buf.toString())
class Db {
    constructor(obj) {
        this.obj = obj
    }
    connect() {
        return new Promise((resolve, reject) => {
            this.conn = mysql.createConnection(obj);
            this.conn.connect(err => {
                err ? reject(err) : resolve('success');
            });
        });
    }
    async select(sql, params = []) {
        let conn = mysql.createPool(obj);
        let p = new Promise((resolve, reject) => {
            conn.getConnection(function (err, connection) {
                if (err) {
                    reject(err)
                    // console.log("建立连接失败");
                } else {
                    // console.log("建立连接成功");
                    console.log(conn._allConnections.length, '2'); //  1
                    connection.query(sql, params, function (err, rows) {
                        if (err) {
                            reject(err)
                            // console.log("查询失败");
                        } else {
                            resolve(rows)
                            // console.log(rows, '1data');
                        }
                        // connection.destory();
                        // console.log(conn._allConnections.length); // 0
                    })
                }
                // connection.release();
            })
            // conn.end();
        })
        return p
        // 建立对象链接  8小时sql没有活动会中断请求
        // let [err, data] = await to(this.connect());
        // if (err) throw '错误';
        // let p = new Promise((resolve, reject) => {
        //     this.conn.query(sql, params, (err, result) => {
        //         err ? reject(err) : resolve(result);
        //     });
        // });
        // this.close()
        // return p;
    }
    close() {
        this.conn.end();
    }

    // connect() {
    //     return new Promise((resolve, reject) => {
    //         this.connection = mysql.createConnection(obj)
    //         this.connection.connect(err => {
    //             if (err) {
    //                 reject(err)
    //                 throw "数据库连接失败....."
    //             }
    //         })

    //     })
    // }
    // async select(sql, options = []) {
    //     let [err, data] = await to(this.connect())
    //     console.log("路过err");
    //     if (err) throw "错误"
    //     let p = new Promise((resolve, reject) => {
    //         // this.connection = mysql.createConnection(obj)
    //         // this.connection.connect(err => {
    //         //     if (err) {
    //         //         reject(err)
    //         //         throw "数据库连接失败....."
    //         //     }
    //         // })
    //         this.connection.query(sql, options, (err, data) => {
    //             err ? reject(err) : resolve(data)
    //         })
    //         this.connection.end()
    //     })
    //     return p
    // }
}
let db = new Db(obj)
module.exports = db;