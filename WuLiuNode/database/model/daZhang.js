const {
    Sequelize,
    sequelize
} = require('../init')
const daZhang = sequelize.define('daZhang', {
    // memberName: '刘新强',
    // memberMobile: '16277139419',
    // memberIdCardNo: '412701197906223097',
    // storeName: '长申广场金纱店',
    // productLable: '爆款',
    // productName: '飞天53%vol 500ml贵州茅台酒（带杯）',
    // productImagePath: 'https://imgdz.eheguang.com/uploadb/image/202005/small/4728f362d68d4778b35e950bc055a66e.jpg',
    // productPrice: 1499,
    // advanceBuyId: '13e74ea8a36e4a22a665d03be76c46c3',
    // billNumber: '0092414711184853605',
    // createDate: '2022-05-03 12:02:03',
    // payType: '微信支付',
    // quantity: 2,
    // pickTime: '',
    // totalAmount: 2998,
    // status: 0,
    // payStatus: 1,
    // invoiceStatus: 0

    // 支付方式
    payType: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    billNumber: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    // 领取时间
    pickTime: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    // 订单金额
    totalAmount: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    // 创建订单时间
    createDate: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    // 领取状态
    status: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    // 手机号码
    memberMobile: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    // 姓名
    memberName: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    // 商店名称
    storeName: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    // 身份证号码
    memberIdCardNo: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    isShow: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    // 备注
    remark: {
        type: Sequelize.STRING,
    },

})

// 同步模型
daZhang.sync().then(() => {
    console.log('daZhang');
}).catch(() => {
    // console.log('失败');
})
// 导出
module.exports = {
    daZhang
}