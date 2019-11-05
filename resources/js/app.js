require('./bootstrap');
import Vue from 'vue';
window.Vue = Vue;

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import axios from 'axios';
window.axios = axios;

import router from './routes';





import BurgerNav from './components/BurgerNav.vue';


new Vue({
    el: '#app',
    components: {
        BurgerNav,
    },
    router,
    data: {
        webSiteInfo: {
            siteLogo: 'images/logo.svg',
            siteTitle: 'RED SPICE RESTAURANT',
        },
        BookingNow: {
            text: 'Booking Now',
            url: '/',
        },
        transitionName: '',
    },
    methods: {

        

    },
    watch: {
        '$route' (to, from) {
          const toDepth = to.path.split('/').length
          const fromDepth = from.path.split('/').length
          this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
      }
});
