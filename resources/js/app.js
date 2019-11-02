require('./bootstrap');
import Vue from 'vue';
window.Vue = Vue;

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import axios from 'axios';
window.axios = axios;

import router from './routes';





import BurgerNav from './components/BurgerNav.vue';
// import HomePage from './views/HomePage.vue';


new Vue({
    el: '#app',
    components: {
        BurgerNav,
        // HomePage,
    },
    router,
    data: {
        webSiteInfo: {
            siteLogo: 'images/logo.svg',
            siteTitle: 'RED SPICE RESTAURANT',
        },
    },
    methods: {

        

    },
});
