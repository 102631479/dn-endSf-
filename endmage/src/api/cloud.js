


import request from '../utils/request';
export const clouddata = (data) => {
    return request({
        url: '/clouddata',
        method: 'get',
        params: data
    });
};
