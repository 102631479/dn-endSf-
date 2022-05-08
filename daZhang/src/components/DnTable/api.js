import request from '../../utils/request';
// 页面数据

export const getData = (urlData, query) => {
    // let data = JSON.parse(JSON.stringify(query))
    // if (query.dataTime) {
    //     delete data.dataTime
    // }


    let data = {
        mobile: '16571520235',
        cpage: '1'
    }
    return request({
        withCredentials: true, 
        headers: {
            Content_Type: 'application/x-www-form-urlencoded',
            // Host: 'pay.elanvm.com',
            mobile: '18300692207',
            type: '1',
            openId: 'oRPcE5uFhjvF4_O1GKUD5eUUlqBQ',
            token: 'f05045ecde14129f36c55dfe0d5ea45d677621ef52a63a0bd415876f4ebe066a',
            // Connection: 'keep-alive',
        },
        withCredentials: true,
        method: 'post',
        data
    });
};

export const getEditData = (urlData, data) => {
    return request({
        headers: {
            'token': 'f05045ecde14129f36c55dfe0d5ea45d677621ef52a63a0bd415876f4ebe066a',
            'openId': 'oRPcE5uFhjvF4_O1GKUD5eUUlqBQ',
            'type': 1
        },
        url: urlData,
        method: 'get',
        params: data
    });
};