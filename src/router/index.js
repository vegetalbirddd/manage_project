import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入组件
import Home from '../view/Home.vue'
import User from '../view/User.vue'
import Mall from '../view/Mall.vue'
import Page1 from '../view/Page1.vue'
import Page2 from '../view/Page2.vue'
import MyMain from '../view/MyMain.vue'

Vue.use(VueRouter)

// 定义路由
const routes = [
    // 主路由
    {
        path: '/',
        component: MyMain,
        redirect: '/home',//重定向
        children: [
            // 子路由
            { path: 'home', component: Home },//首页
            { path: 'user', component: User },//用户管理
            { path: 'mall', component: Mall },// 商品管理
            { path: 'page1', component: Page1 },
            { path: 'page2', component: Page2 },
        ]
    },

]
// 创建一个router实例，将定义的路由放进去
const router = new VueRouter({
    routes,
    mode:'history'
})
export default router
