import request from '../utils/request';
// 页面数据
export const getData = (query) => {
    return request({
        url: '/sys/admin/page',
        method: 'get',
        params: query
    });
};

// 角色查询
export const getUsetRole = (query) => {
    return request({
        url: '/sys/role/list',
        method: 'get',
        params: query
    });
};

// 添加接口
export const addUsetRole = (data) => {
    return request({
        url: '/sys/admin/add',
        method: 'post',
        data
    });
};

// 密码修改接口
export const putPassword = (data) => {
    // return ''
    return request({
        url: '/sys/admin/password/update',
        method: 'put',
        data
    });
};


// 删除
export const deleteAdiminData = (data) => {
    let dataPRM = {
        id: data
    }
    return request({
        url: '/sys/admin/delete',
        method: 'delete',
        params: dataPRM
    });
};



// 编辑查询
export const getAdiminData = (data) => {
    let dataPRM = {
        id: data
    }
    return request({
        url: '/sys/admin/get',
        method: 'get',
        params: dataPRM
    });
};


// 编辑确认
export const putSubimAdiminData = (data) => {
    return request({
        url: '/sys/admin/update',
        method: 'put',
        // params: data
        data
    });
};

// 删除接口
export const deleteData = (data) => {
    let dataPRM = {
        id: data
    }
    return request({
        url: '/sys/admin/delete',
        method: 'delete',
        params: dataPRM
    });
};