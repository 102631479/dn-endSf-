const {
    Sequelize,
    sequelize
} = require('../init')
const daZhangXinxi = sequelize.define('daZhangXinxi', {


    username: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    // token
    tokenData: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    // openid
    openidData: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    // wxid
    wxid: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    // 手机号码
    mobile: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    // 门店code
    storeCode: {
        type: Sequelize.STRING,
        allowNull: true,
    },
      // 门店名字
      storeName: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    // 门店id
    dcId: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    // 姓名
    memberName: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    // 备注
    remark: {
        type: Sequelize.STRING,
    },

})

// 同步模型
daZhangXinxi.sync().then(() => {
    console.log('daZhangXinxi');
}).catch(() => {
    // console.log('失败');
})
// 导出
module.exports = {
    daZhangXinxi
}