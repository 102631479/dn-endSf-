import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/daZhang_Store'
        },
        {
            path: '/',
            component: () => import( /* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: {
                title: '自述文件'
            },
            children: [{
                    path: '/manager-management',
                    component: () => import( /* webpackChunkName: "table" */ '../view/manager-management/index.vue'),
                    meta: {
                        title: '管理员管理'
                    }
                },
                {
                    path: '/welcome',
                    component: () => import( /* webpackChunkName: "table" */ '../view/welcome.vue'),
                    meta: {
                        title: '欢迎登录'
                    }
                },
                {
                    path: '/Dn-Table',
                    component: () => import( /* webpackChunkName: "table" */ '../view/DnTable/index.vue'),
                    meta: {
                        title: 'Dn-Table'
                    }
                },
              
                {
                    path: '/logistics_management',
                    component: () => import( /* webpackChunkName: "table" */ '../view/logistics_management/index.vue'),
                    meta: {
                        title: '主端口'
                    }
                },
                {
                    path: '/daZhang_Store',
                    component: () => import( /* webpackChunkName: "table" */ '../view/daZhang_Store/index.vue'),
                    meta: {
                        title: '大张订单'
                    }
                },
            
                {
                    path: '/404',
                    component: () => import( /* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: {
                        title: '404'
                    }
                },
                {
                    path: '/403',
                    component: () => import( /* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: {
                        title: '403'
                    }
                },

            ]
        },
        {
            path: '/login',
            component: () => import( /* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: {
                title: '登录'
            }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});