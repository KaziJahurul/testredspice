require('./bootstrap');
import Vue from 'vue';
import axios from 'axios';

window.axios = axios;

import BurgerNav from './components/BurgerNav.vue';
import HomePage from './view/HomePage.vue';


new Vue({
    el: '#app',
    components: {
        BurgerNav,
        HomePage,
    },
    data: {
        webSiteInfo: {
            siteLogo: 'images/logo.svg',
            siteTitle: 'RED SPICE RESTAURANT',
        },
    },
    methods: {

    

    }
});
