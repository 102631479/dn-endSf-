
//成功
let SUCCESS = (res, data) => {
    res.send({
        code: 200,
        msg: "成功",
        data            //响应给客户端的数据

    });
};


let SUCCESS1 = (res, data) => {
    res.send({
        code: 200,
        msg: "成功",
        result: data
    });
}

//失败
let ERROR = (res, msg, err) => {
    res.send({
        code: 500,
        msg,
        result: err
    });
};
//注册失败
let ERROR506 = (res, msg, err) => {
    res.status(506).send({
        code: 506,
        msg,
        result: err
    });
};



module.exports = {
    SUCCESS,
    ERROR,
    SUCCESS1, ERROR506
};