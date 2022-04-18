const {
    Sequelize,
    sequelize
} = require('../../init')
const User = sequelize.define('user', {
    username: {
        // 定义类型 字符串
        type: Sequelize.STRING,
        // 是否允许为空 默认是 true
        allowNull: false,
        // 约束不能为空
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    Remark: {
        type: Sequelize.STRING,
    },
    status: {
        type: Sequelize.INTEGER,
    },
})

// 同步模型
User.sync().then(() => {
    // console.log('token');
}).catch(() => {
    // console.log('失败');

})
// 导出
module.exports = {
    User
}