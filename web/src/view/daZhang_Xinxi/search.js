import {
    maker
} from '@form-create/element-ui'
let makerForm = [
    // maker.hidden('beginTime', ''),
    // maker.hidden('endTime', ''),
    // maker.input('公司名称:', 'companyName', '', ).col({
    //     span: 8,
    //     labelWidth: '80px',
    // }).props({
    //     placeholder: "请输入公司名称",
    // }),
    maker.input('手机号:', 'mobile', '', ).col({
        span: 6,
        labelWidth: '80px',
    }).props({
        placeholder: "请输入手机号",
    }),
    maker.input('微信号:', 'wxid', '', ).col({
        span: 6,
        labelWidth: '80px',
    }).props({
        placeholder: "请输入微信号",
    }),
  
  
 
    // maker.dateRange('录入日期:', 'dataTime', [], ).props({
    //     type: "datetimerange",
    //     format: "yyyy-MM-dd HH:mm:ss",
    //     startPlaceholder: "开始日期",
    //     endPlaceholder: '结束日期',
    //     rangeSeparator: '至',
    // }).col({
    //     span: 8,
    //     labelWidth: '80px',
    // }).on({
    //         change: (res) => {
    //         }
    //     }

    // ),
    // maker.select('状态:', 'certifyStatus', '')
    // .options([{
    //     value: 0,
    //     label: '未审核'
    // }, {
    //     value: 1,
    //     label: '已通过'
    // }, {
    //     value: 2,
    //     label: '审核不通过'
    // }]).col({
    //     span: 8,
    //     labelWidth: '150px',
    // }),

]
export default makerForm