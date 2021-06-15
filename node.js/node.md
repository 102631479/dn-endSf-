##   node笔记
### 第一步 创建项目
#### 创建项目
``` cmd
npx express-generator
```

```javascript
npm  init
```

执行npm init命令之后，会进入一个交互式的窗口(可以选择配置，也可以默认), 最后会在项目根目录下生成一个package.json的配置文件. 这个文件非常重要，是项目的配置文件。

### 第二步 安装依赖    
```js
    cnpm i
```

## 1.fs模块

nodejs内置了fs模块，来帮助开发者完成文件的相关操作

```javascript
使用：require('fs');
```

fs模块的核心内容有两部分：文件操作，目录操作。

fs模块中关于文件和目录的操作，一般都提供了两个方法，一个是异步，一个同步




## 2.path模块

path是nodejs的内置模块，用来进行目录的操作

```javascript
require('path');
```

常见方法：

```javascript
// console.log(__dirname+"/data/demo1.txt");
// let s=path.join(__dirname,"data/demo1.txt");//进行路径拼接
let s=path.join(__dirname,'data','demo1.txt');
```



**1.读取文件**

异步：fs.readFile(path,callback);

```javascript
fs.readFile(p, (err, data) => {
    if (!err) {
        // console.log('读取成功：', data.toString());
        console.log(data);
    } else {
        console.log('读取失败:',err);
    }
});
```

同步：fs.readFileSync(path)     返回值为读取到数据

```javascript
try {
    let buf = fs.readFileSync(p);//同步
    console.log(buf.toString());
} catch (e) {
    console.log(e);
}
```

2.写入文件

3.删除文件