let mysql = require("mysql")
const { dbConfig } = require("../config/global")
function query(sql, options = []) {
    let p = new Promise((resolve, reject) => {
        let conn = mysql.createConnection(dbConfig)
        conn.connect(err => {
            if (err) {
                reject(err)
            }
        })
        conn.query(sql, (err, data) => {
            err ? reject(err) : resolve(data)
        })
        conn.end()
    })
    return p
}
module.exports = {
    query
}