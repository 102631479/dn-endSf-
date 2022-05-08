import request from '../utils/request';
export function daZhangAdd(query) {
    return request({
        url: '/daZhang/add',
        method: 'get',
        params: query

    })
}