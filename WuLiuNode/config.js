//  false 为正式环境    true 为测试环境   dn 本地
let test = false

// {
//     "host": "rm-wz93n3kj1b5azmh03xo.mysql.rds.aliyuncs.com",
//     "user": "ddd1026341779",
//     "password": "dN1314521",
//     "database": "xinxi",
//     "port":"3306"
  
// }

// 测试
let configTest = {
    sql: {
        excel: 'cic_project',
        username: 'root',
        password: 'ddd13131313',
        host: 'localhost',
        port: "3306"
    }
}
// 正式
let configDev = {
    sql: {
        excel: 'xinxi',
        username: 'ddd1026341779',
        password: 'dN1314521',
        host: 'rm-wz93n3kj1b5azmh03xo.mysql.rds.aliyuncs.com',
        port: "3306"
    }
}

let config
if (test) {
    config = configTest
} else {
    config = configDev
}

module.exports = {
    config
}