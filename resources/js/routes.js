import VueRouter from 'vue-router';
import HomePage from './views/HomePage.vue';


let routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/about',
    }
];

export default new VueRouter({
    routes
});