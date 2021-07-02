// //引入mysql模块
// const mysql = require("mysql");
// const {
//     connectionConfig
// } = config

// class DB {
//     static instance;
//     pool = null;
//     config = connectionConfig

//     static getInstance() {
//         if (!DB.instance) {
//             DB.instance = new DB();
//         }
//         return DB.instance
//     }

//     constructor() {
//         if (!DB.instance) {
//             DB.instance = this;
//         }
//         this.pool = mysql.createPool(this.#config);
//         return DB.instance
//     }

//     getConfig() {
//         return this.config
//     }

//     execute() {
//         let args = arguments;
//         return new Promise((resolve, reject) => {
//             this.pool.getConnection(function (err, connection) {
//                 if (err) {
//                     console.log("SQL connection failed:", err);
//                 } else {
//                     console.log("连接建立成功");
//                     connection.query(...args, function (err, data) {
//                         console.log("SQL 执行语句:", ...args);
//                         if (err) {
//                             reject(err)
//                             console.log("语句执行出错,错误为：", err);
//                         } else {
//                             resolve(data);
//                             console.log("语句执行完毕,执行结果为：", data);
//                         }
//                     })
//                     connection.release();
//                 }
//             })

//         })
//     }
// }