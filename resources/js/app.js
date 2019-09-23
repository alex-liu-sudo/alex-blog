/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');
//
// window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store'
import Vant from 'vant';
import ElementUI from 'element-ui';

import 'vant/lib/index.css';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Vant);
Vue.use(ElementUI);

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
