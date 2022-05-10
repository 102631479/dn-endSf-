let DataRouter = [

    // {
    //     powerShow: true,
    //     icon: 'el-icon-user-solid',
    //     index: 'manager-management',
    //     title: '系统管理',
    //     subs: [{
    //             powerShow: 'm:user',
    //             index: 'manager-management',
    //             title: '用户管理',
    //         },

    //     ],
    // },

    {
        powerShow: true,
        icon: 'el-icon-user-solid',
        index: 'logistics_management',
        title: '物流管理',
     
    },
   
    {
        powerShow: true,
        icon: 'el-icon-user-solid',
        index: 'daZhang_Store',
        title: '大张订单',
     
    },
    {
        powerShow: true,
        icon: 'el-icon-user-solid',
        index: 'daZhang_Xinxi',
        title: '信息统计',
    },
    {
        powerShow: true,
        icon: 'el-icon-user-solid',
        index: 'daZhang_IP',
        title: 'IP配置',
    },
    {
        powerShow: true,
        icon: 'el-icon-user-solid',
        index: 'daZhang_StoreXinxi',
        title: '门店信息',
     
    },
    {
        powerShow: true,
        icon: 'el-icon-user-solid',
        index: 'daZhang_reserve',
        title: '预约门店',
     
    },


  

    // {
    //     powerShow: true,
    //     icon: 'el-icon-user-solid',
    //     index: 'Dn-Table',
    //     title: '表格封装',
    //     subs: [{
    //             powerShow: 'm:user',
    //             index: 'Dn-Table',
    //             title: '表格',
    //         },

    //     ],
    // },




]


let data = () => {
    return DataRouter
}
export default data;