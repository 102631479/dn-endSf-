// const config = {
//     chainWebpack: config => {
//         config.plugin("AddAssetHtmlPlugin").use(
//             new AddAssetHtmlPlugin({
//                 // SDK可以在index.html里面引入，也可以在vue.config.js里面引入，
//                 // 若在index.html引入，打包时需要手动拷贝SDK文件，在vue.config.js内用插件引入则可以直接将SDK打包到项目中
//                 // 无论使用何种方式引入，都需要能全局调用
//                 filepath: resolve("/src/SDK/RTCSDKV2.min.js")
//             })
//         );
//     }
// };


// const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");



const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    // baseUrl: './',
    publicPath: './',
    assetsDir: 'static',
    productionSourceMap: false,
   
    chainWebpack: config => {
        // config.plugin("AddAssetHtmlPlugin").use(
        //     new AddAssetHtmlPlugin({
        //         filepath: resolve("/src/SDK/RTCSDKV2.min.js")
        //     })
        // );
        config.resolve.alias
            .set("@", resolve("src"))
            .set("assets", resolve("src/assets"))
            .set("components", resolve("src/components"))
            .set("base", resolve("baseConfig"))
            .set("public", resolve("public"));

    },
  

    devServer: {
        https: true
        // proxy: {
        //     '/api':{
        //         target:'http://jsonplaceholder.typicode.com',
        //         changeOrigin:true,
        //         pathRewrite:{
        //             '/api':''
        //         }
        //     }
        // }
    }
}