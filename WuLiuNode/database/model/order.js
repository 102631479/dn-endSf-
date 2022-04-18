const {
    Sequelize,
    sequelize
} = require('../init')
const order = sequelize.define('order', {
    username: {
        // 定义类型 字符串
        type: Sequelize.STRING,
  
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    shopname: {
        type: Sequelize.STRING,
    },
    remark: {
        type: Sequelize.STRING,
    },
    // 物流单号
    logistics: {
        type: Sequelize.STRING,
    },
    // 物流数据
    logisticsData: {
        type: Sequelize.TEXT,
    },
    // 下单价格
    goPrice: {
        type: Sequelize.STRING,
    },
    orderType: {
        type: Sequelize.INTEGER,
    },
})

// 同步模型
order.sync().then(() => {
    console.log('order');
}).catch(() => {
    // console.log('失败');
})
// 导出
module.exports = {
    order
}