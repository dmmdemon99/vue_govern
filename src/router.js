import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import Banner from './Banner.vue';
import News from './News.vue';
import Newsa from './Newsa.vue';
import Login from './Login.vue';
import Home from './Home.vue';
import Layout from './Layout.vue';

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/",
        component: Home
    },
    {
        path:"/home",
        component: Home
    },
    {
        path:"/banner",
        component: Banner
    },
    {
        path: "/news",
        component: News
    },
    {
        path: "/news/newsa",
        component: Newsa
    },
    {
        path: "/login",
        component: Login
    }
]

var router =  new VueRouter({
    routes
})
export default router;
