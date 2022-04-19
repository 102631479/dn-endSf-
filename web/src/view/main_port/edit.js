import {
    maker
} from '@form-create/element-ui'
import store from '../../store'
let getToken = () => {
    return store.state.token
}
import Bus from "../../components/common/bus";
console.log(store.state.updataUrl, 'form');
let makerForm = [
    maker.input('代理人:', 'agent', '', ).col({
        span: 20,
        labelWidth: '150px',
    }),
    maker.input('手机号:', 'phone', '', ).col({
        span: 20,
        labelWidth: '150px',
    }),
    maker.input('购物姓名:', 'shopname', '', ).col({
        span: 20,
        labelWidth: '150px',
    }),
 
    maker.input('物流单号:', 'logistics', '', ).col({
        span: 20,
        labelWidth: '150px',
    }),

    maker.input('下单价格:', 'goPrice', '', ).col({
        span: 20,
        labelWidth: '150px',
    }),
    maker.select('物品类型', 'orderType', '')
    .options([{
        value: 1,
        label: '手机'
    }, {
        value: 2,
        label: '鞋子'
    }, {
        value: 3,
        label: '其他'
    }, ]).col({
        span: 20,
        labelWidth: '150px',
    }),
    maker.input('备注:', 'remark', '', ).col({
        span: 20,
        labelWidth: '150px',
    }),
]
export default makerForm