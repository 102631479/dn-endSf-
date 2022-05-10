import {
    maker
} from '@form-create/element-ui'
import store from '../../store'
let getToken = () => {
    return store.state.token
}
import Bus from "../../components/common/bus";
let makerForm = [

    maker.input('手机号:', 'mobile', '', ).col({
        span: 20,
        labelWidth: '80px',
    }),
    maker.input('姓名:', 'memberName', '', ).col({
        span: 20,
        labelWidth: '80px',
    }),
    maker.input('微信号:', 'wxid', '', ).col({
        span: 20,
        labelWidth: '80px',
    }),
    maker.input('token:', 'tokenData', '', ).col({
        span: 20,
        labelWidth: '80px',
    }),
    maker.input('openid:', 'openidData', '', ).col({
        span: 20,
        labelWidth: '80px',
    }),
    maker.input('备注:', 'remark', '', ).col({
        span: 20,
        labelWidth: '80px',
    }),
]
export default makerForm