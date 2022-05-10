const tryErrorFun = (res,d) => {
    console.log(d,'错误信息');
    res.status(201).send({
        meta: {
            msg: "服务器响应失败",
            status: 400
        }
    })
}

const EditSuccFun = (res) => {
    res.status(200).send({
        meta: {
            msg: "修改成功！",
            status: 200
        }
    })
}
const EditErrorFun = (res, err) => {
    res.status(201).send({
        err,
        meta: {
            msg: "修改失败",
            status: 201
        }
    })
}
const ExistedErrorFun = (res) => {
    res.status(201).send({
        data: null,
        meta: {
            msg: "数据已经存在了!",
            status: 201
        }
    })
}
const SuccessFun = (res) => {
    res.status(200).send({
        meta: {
            msg: "操作成功",
            status: 200
        }
    })
}
const getSuccessFun = (res, data) => {
    res.status(200).send({
        data,
        meta: {
            msg: "查询成功！",
            status: 200
        }
    })
}
const DeleErr = (res) => {
    // return
    res.status(201).send({
        meta: {
            msg: "删除失败!",
            status: 400
        }
    })
}
const DeleSuccess = (res) => {
    res.status(200).send({
        meta: {
            msg: "删除成功！",
            status: 200
        }
    })
}
module.exports = {
    DeleErr,
    DeleSuccess,
    EditErrorFun,
    ExistedErrorFun,
    tryErrorFun,
    SuccessFun,
    getSuccessFun,
    EditSuccFun
}