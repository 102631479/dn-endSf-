import request from '../utils/request';


export const getLogisticsData = data => {
    console.log(data,'ssssssss');
    return request({
        url: '/logisticsdata',
        method: 'get',
        params: data
    });
};
export const data = () => {
    return request({
        url: '/data',
        method: 'get',
    });
};
export const dataadd = data => {
    return request({
        url: '/dataadd',
        method: 'get',
        params: data
    });
};

export const getLogistics = data => {
    return request({
        url: '/getLogistics',
        method: 'get',
        params: data
    });
};
// 获取账户信息
// export async function getUserData() {
//     let res = await get("/usersdata");
//     return res.data
// }
// export async function text(data) {
//     let res = await get("/text", data);
//     return res.data
// }

// export async function data() {
//     let res = await get("/data");
//     return res.data
// }
// export const getUserData = () => {
//     return request({
//         url: '/usersdata',
//         method: 'get',
//     });
// };