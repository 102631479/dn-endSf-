import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n';
import store from './store'




import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
import formCreate from '@form-create/element-ui'
Vue.use(formCreate)
// let setCookie = (c_name, value, expire) => {
//     var date = new Date()
//     date.setSeconds(date.getSeconds() + expire)
//     document.cookie = c_name + "=" + escape(value) + "; expires=" + date.toGMTString()
//     console.log(document.cookie)
// }
// setCookie('sss')
// vm.$formCreate(rule,option)
// window.formCreate.create(rule,option)
// AOS 动画使用
// data-aos="zoom-in"   使用例子 安装 cnpm install aos --save
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();

import {
    messages
} from './components/common/i18n';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
// import './assets/css/theme-green/index.css'; // 浅绿色主题
import './assets/css/icon.css';
import 'babel-polyfill';
import {
    post,
    get
} from './utils/http'
import powersReturn from '../src/utils/powers'
Vue.prototype.$powersReturn = powersReturn
import SlideVerify from 'vue-monoplasty-slide-verify';
Vue.use(SlideVerify);
Vue.prototype.$post = post;
Vue.prototype.$get = get;

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(ElementUI, {
    size: 'small'
});
const i18n = new VueI18n({
    locale: 'zh',
    messages
});

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | 信息平台`;
    const role = store.state.token;
    if (role == '' && to.path !== '/login') {
        next('/login');
    } else {
        // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
        // if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
        //     Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
        //         confirmButtonText: '确定'
        //     });
        // } else {
        next();
        // }
    }
});

new Vue({
    store,
    router,
    i18n,
    render: h => h(App)
}).$mount('#app');



/**
 *                             _ooOoo_
 *                            o8888888o
 *                            88" . "88
 *                            (| -_- |)
 *                            O\  =  /O
 *                         ____/`---'\____
 *                       .'  \\|     |//  `.
 *                      /  \\|||  :  |||//  \
 *                     /  _||||| -:- |||||-  \
 *                     |   | \\\  -  /// |   |
 *                     | \_|  ''\---/''  |   |
 *                     \  .-\__  `-`  ___/-. /
 *                   ___`. .'  /--.--\  `. . __
 *                ."" '<  `.___\_<|>_/___.'  >'"".
 *               | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *               \  \ `-.   \_ __\ /__ _/   .-` /  /
 *          ======`-.____`-.___\_____/___.-`____.-'======
 *                             `=---='
 *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *                     佛祖保佑        永无BUG
 *            佛曰:
 *                   写字楼里写字间，写字间里程序员；
 *                   程序人员写程序，又拿程序换酒钱。
 *                   酒醒只在网上坐，酒醉还来网下眠；
 *                   酒醉酒醒日复日，网上网下年复年。
 *                   但愿老死电脑间，不愿鞠躬老板前；
 *                   奔驰宝马贵者趣，公交自行程序员。
 *                   别人笑我忒疯癫，我笑自己命太贱；
 *                   不见满街漂亮妹，哪个归得程序员？
 **/