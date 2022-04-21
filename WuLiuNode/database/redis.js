const {
    log
} = require('console');
const redis = require('redis')
client = redis.createClient(6379, '127.0.0.1');
const {
    promisify
} = require("util");
client.set = promisify(client.set)

client.on('ready', (res) => {
    console.log('ready');
})

client.on('end', (err) => {
    console.log('end');
});

client.on('error', (err) => {
    console.log(err, '获取失败');
});

client.on('connect', () => {
    console.log('redis connect success!');
});

// 取值的时候 用 synGet 否则是布尔值
const synGet = async (key) => {
    const newGet = async (key) => {
        let val = await new Promise((resolve => {
            client.get(key, function (err, res) {
                return resolve(res);
            });
        }));
        return val;
    };
    return await newGet(key);
};

// 存 值
const synSet = async (key, data) => {
    await client.set(key, data);
    await client.expire(key, 10000)
}


let TonkerControl = {
    synGet,
    synSet
}



module.exports = {
    TonkerControl
}

/*
// node 使用redis  错误处理 redis 使用了4.0版本 api 发生了变化    回退      "redis": "^3.1.2", 即可解决


(node:3943) UnhandledPromiseRejectionWarning: Error: The client is closed
    at Commander._RedisClient_sendCommand (/Users/xiaowo/Desktop/Mr-Dai/node/node_modules/_@node-redis_client@1.0.0@@node-redis/client/dist/lib/client/index.js:387:31)
    at Commander.commandsExecutor (/Users/xiaowo/Desktop/Mr-Dai/node/node_modules/_@node-redis_client@1.0.0@@node-redis/client/dist/lib/client/index.js:160:154)
    at Commander.BaseClass.<computed> [as set] (/Users/xiaowo/Desktop/Mr-Dai/node/node_modules/_@node-redis_client@1.0.0@@node-redis/client/dist/lib/commander.js:8:29)
    at internal/util.js:297:30
    at new Promise (<anonymous>)
    at Commander.set (internal/util.js:296:12)
    at module.exports (/Users/xiaowo/Desktop/Mr-Dai/node/routes/user/register.js:17:33)
    at Layer.handle [as handle_request] (/Users/xiaowo/Desktop/Mr-Dai/node/node_modules/_express@4.17.1@express/lib/router/layer.js:95:5)
    at next (/Users/xiaowo/Desktop/Mr-Dai/node/node_modules/_express@4.17.1@express/lib/router/route.js:137:13)
    at Route.dispatch (/Users/xiaowo/Desktop/Mr-Dai/node/node_modules/_express@4.17.1@express/lib/router/route.js:112:3)
(Use `node --trace-warnings ...` to show where the warning was created)
(node:3943) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 2)



//  引入模块
const {
    client
} = require('../../database/redis')

//  redis  使用
    // // 登陆成功生成 token 返回给客户端 第一个参数 是 组 ，第二个是 私钥（自己随便定义）
    // const token = jwt.sign({
    //     username
    // }, 'DingNing')

    // await client.set(username, token);
    // let dataToken = await client.synGet(username);
    // // console.log(dataToken, 'dataToken');
    // res.status(200).send({
    //     data: dataToken,
    //     meta: {
    //         msg: "缺少参数",
    //         status: 400
    //     }
    // })
    // return

*/