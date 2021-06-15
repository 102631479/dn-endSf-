var express = require('express')
var router = express.Router()
const multer = require('multer') // 引入上传模块
const path = require('path')
const fs = require('fs')


const uploda = multer({
    dest: "uploads/"
}) //图片上传之后的文件夹

// uploda.single  单一单个
router.post('/uploadImg', uploda.single('avatar'), (req, res) => {
    // console.log(res);
    // console.log(req.file); //上传文件信息
    // 使用multer 中间件上传的文件  文件没有后缀名字  文件编码类型是其他编码类型  需要重新命名 指定
    // fieldname 是文件当前的名称     originalname 是文件本来的名称

    let {
        originalname,
        filename
    } = req.file //读取文件上传的数据
    let extName = path.extname(originalname) //获取图片文件的后缀名字
    // console.log(1,extName);
    // console.log(2,req.file);
    // console.log(1,path.basename(__dirname));
    // 将上传的文件重命名
    // 路径上少一个 参数 ‘/’
    try{
        fs.renameSync(`./uploads/${filename}`, `./uploads/${filename}${extName}`)
    }catch(e){
        console.log('异常：',e);
    }
    
    // res.send({ code: 0, msg: "图片上传成功" })
    res.send('ok');
})
module.exports = router