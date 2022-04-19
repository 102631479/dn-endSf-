import store from '../store'
import axios from 'axios';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; //设置post请求时的header信息\\
// axios.defaults.withCredentials = true

let getToken = () => {
    if (store.state.token == '') {
        return store.state.token;
    }
    return store.state.token
}

const service = axios.create({
    // headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    // },
    headers: {
        'Content-Type': 'application/json',
    },
    // withCredentials: true,
    // baseURL: 'http://172.16.17.162:8080/api',
    // baseURL: 'http://172.16.16.104:8080/api',
    // baseURL: 'http://183.134.74.133:8082/api',
    baseURL: 'http://172.16.16.113:8888/api',
    baseURL: 'http://101.132.72.248:3033/api',
    timeout: 10000,
});
service.interceptors.request.use(
    config => {
        config.headers["authorization"] = getToken()
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);
service.interceptors.response.use(
    response => {
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