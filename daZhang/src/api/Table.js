import request from '../utils/request';
export const addData = (urlData, data) => {
    return request({
        url: urlData,
        method: 'post',
        data
    });
};
export const putData = (urlData, data) => {
    return request({
        url: urlData,
        method: 'put',
        data
    });
};


export const getData = (urlData, data) => {
    return request({
        url: urlData,
        method: 'get',
        params: data
    });
};