import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入组件
import Home from '../view/Home.vue'
import User from '../view/User.vue'
import Mall from '../view/Mall.vue'
import Page1 from '../view/Page1.vue'
import Page2 from '../view/Page2.vue'
import MyMain from '../view/MyMain.vue'
import Login from '../view/Login.vue'
import SignUp from '../view/SignUp.vue'

Vue.use(VueRouter)

// 定义路由
const routes = [

    {
        path: '/',
        redirect: "/login"
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    // 注册页面
    {
        path: '/SignUp',
        name: 'SignUp',
        component: SignUp
    },
    // 用户界面
    {
        path: '/home',
        component: MyMain,
        // redirect: '/home',//重定向
        children: [
            // 子路由
            { path: '', name: 'home', component: Home },//首页
            { path: 'user', name: 'user', component: User },//用户管理
            { path: 'mall', name: 'mall', component: Mall },// 商品管理
            { path: 'page1', name: 'page1', component: Page1 },
            { path: 'page2', name: 'page2', component: Page2 },
        ],

    },

]
// 创建一个router实例，将定义的路由放进去
const router = new VueRouter({
    routes,
    mode: 'history'
})
export default router
