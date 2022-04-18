const {
    Sequelize,
    sequelize
} = require('../../init')
const tokenReturn = sequelize.define('token', {
    username: {
        // 定义类型 字符串
        type: Sequelize.STRING,
        allowNull: true,

        // 是否允许为空 默认是 true
        // 约束不能为空
        unique: true
    },
    token: {
        // 定义类型 字符串
        type: Sequelize.STRING,
        // // 是否允许为空 默认是 true
        allowNull: true,
        // // 约束不能为空
    },
    isAdime: {
        // 定义类型 字符串
        type: Sequelize.INTEGER,
        // // 是否允许为空 默认是 true
        allowNull: true,
        // // 约束不能为空
    },

})

// 同步模型
tokenReturn.sync().then(() => {
    console.log('token对接就绪');
}).catch(() => {
    // console.log('失败');

})
// 导出
module.exports = {
    tokenReturn
}