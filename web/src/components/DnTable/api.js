import request from '../../utils/request';
// 页面数据

export const getData = (urlData, query) => {
    let data = JSON.parse(JSON.stringify(query))
    if (query.dataTime) {
        delete data.dataTime
    }
    return request({
        url: urlData,
        method: 'get',
        params: data
    });
};

export const getEditData = (urlData, data) => {
    return request({
        url: urlData,
        method: 'get',
        params: data
    });
};

export const deleteData = (urlData) => {
    return request({
        url: urlData,
        method: 'delete',
    });
};
