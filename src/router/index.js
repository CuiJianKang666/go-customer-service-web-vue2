import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component:()=>import('@/views/index.vue'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/login',
        component:()=>import('@/views/login.vue')
    },
    {
        path: '/main',
        name: 'main',
        component: ()=>import('@/views/main.vue'),
        meta: {title: '客服主页', keepAlive: false}
    },
    {
        path: '/chat_main',
        name: 'chat_main',
        component: ()=>import('@/views/chat_main.vue'),
        meta: {title: '客服聊天页', keepAlive: false}
    },
    {
        path: '/chatIndex',
        name: 'chatIndex',
        component: ()=>import('@/views/chat_page.vue'),
        meta: {title: '用户聊天页！', keepAlive: false}
    },
    {
        path: '/login',
        name: 'login',
        component: ()=>import('@/views/login.vue'),
        meta: {title: '登陆页面！', keepAlive: false}
    },
    {
        path: '/pannel',
        name: 'pannel',
        component: ()=>import('@/views/pannel.vue'),
        meta: {title: '面板', keepAlive: false}
    },
    {
        path: '/setting',
        name: 'setting',
        component: ()=>import('@/views/setting.vue'),
        meta: {title: '设置', keepAlive: false}
    },
    {
        path: '/setting_statistics',
        name: 'setting_statistics',
        component: ()=>import('@/views/setting_statistics.vue'),
        meta: {title: '数据统计', keepAlive: false}
    },
    {
        path: '/setting_modifypass',
        name: 'setting_modifypass',
        component: ()=>import('@/views/setting_modifypass.vue'),
        meta: {title: '登陆页面！', keepAlive: false}
    },
    {
        path: '/setting_avator',
        name: 'setting_avator',
        component: ()=>import('@/views/setting_avator.vue'),
        meta: {title: '登陆页面！', keepAlive: false}
    },
    {
        path: '/setting_config',
        name: 'setting_config',
        component: ()=>import('@/views/setting_config.vue'),
        meta: {title: '登陆页面！', keepAlive: false}
    },
    {
        path: '/setting_ipblack',
        name: 'setting_ipblack',
        component: ()=>import('@/views/setting_ipblack.vue'),
        meta: {title: '登陆页面！', keepAlive: false}
    },
    {
        path: '/setting_deploy',
        name: 'setting_deploy',
        component: ()=>import('@/views/setting_deploy.vue'),
        meta: {title: '登陆页面！', keepAlive: false}
    },
];


const router = new VueRouter({
    mode: 'history',
    routes
})


router.beforeEach((to,from,next)=>{//beforeEach是router的钩子函数，在进入路由前执行
    if(to.meta.title){//判断是否有标题
        document.title = to.meta.title
    }
    next()  //执行进入路由，如果不写就不会进入目标页
})

export default router

