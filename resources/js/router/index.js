import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

export default new VueRouter({
    saveScrollPosition: true,
    routes: [
        {
            name: '首页',
            path: '/',
            component: resolve => void(require(['../views/Home.vue'], resolve))
        },
        {
            name: '详情页',
            path: '/detail',
            component: resolve => void(require(['../views/Detail.vue'], resolve))
        }
    ]
})
