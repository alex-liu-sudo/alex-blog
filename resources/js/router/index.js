import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import LoginView from "../views/auth/Login"

export default new VueRouter({
    saveScrollPosition: true,
    routes: [
        {
            name: '首页',
            path: '/',
            component: resolve => void(require(['../views/Home.vue'], resolve))
        },
        {
            name: '首页',
            path: '/login',
            component: LoginView
        }
    ]
})
