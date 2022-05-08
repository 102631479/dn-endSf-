import store from '../store'
import axios from 'axios';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; //设置post请求时的header信息\\
import router from '../router';
// import Cookie from "js-cookie";

let getToken = () => {
    if (store.state.token == '') {
        return store.state.token;
    }
    return store.state.token
}
console.log( document.cookie ,'console.log document.cookie' )

// axios.defaults.withCredentials = true
const service = axios.create({

    // headers: {
    //     'Access-Control-Allow-Credentials': true,
    //     'Access-Control-Allow-Origin': 'http://localhost:8888',
    //     // 'Set-Cookie':'JSESSIONID=134454179F75BD8499DsFDAA41AD89B17'

    // },
    // baseURL: 'http://172.16.17.162:8080/api',
    // baseURL: 'http://172.16.16.104:8080/api',
    // baseURL: 'http://183.134.74.133:8082/api',
    // baseURL: 'http://172.16.16.113:3033/api',
    baseURL: 'https://pay.elanvm.com/v1/wxmall/maotai/order/orderList',
    timeout: 10000,
});
axios.defaults.withCredentials = true

service.interceptors.request.use(
    config => {
        console.log(document.cookie,'document.cookie');
        // config.setHeader('Set-Cookie', [`token = };path: '/'; secure: false; signed: false,userId = 1`]);
        // config.defaults.withCredentials = true
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);
console.log(axios, 'axios.defaults');

service.interceptors.response.use(
    response => {

        if (response.data.meta.status === 4004) {
            router.push({
                path: '/login',

            });
            return response;
        }

        if (response.status == 200) {
            // if (response.data.code == 200||response.data.code==0) {
            return Promise.resolve(response.data);
            // } else {
            //     return Promise.reject(response.data);
            // }
        } else {
            return Promise.reject(response.data);
        }
    },
    error => {
        return Promise.reject(error);
    }
);

export default service;