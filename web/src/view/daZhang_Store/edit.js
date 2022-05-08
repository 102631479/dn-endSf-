import {
    maker
} from '@form-create/element-ui'
import store from '../../store'
let getToken = () => {
    return store.state.token
}
import Bus from "../../components/common/bus";
let makerForm = [

    maker.input('手机号:', 'phone', '', ).col({
        span: 20,
        labelWidth: '80px',
    }),


  
]
export default makerForm