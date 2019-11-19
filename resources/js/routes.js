import VueRouter from 'vue-router';
import HomePage from './views/HomePage.vue';
import CuisinePage from './views/CuisinePage.vue';
import OrderPage from './views/OrderPage.vue';
import ReservationPage from './views/ReservationPage.vue';
import ContactPage from './views/ContactPage.vue';


let routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/cuisine',
        component: CuisinePage,
    },
    {
        path: '/order',
        component: OrderPage,
    },
    {
        path: '/reservation',
        component: ReservationPage,
    },
    {
        path: '/contact',
        component: ContactPage,
    },
];

export default new VueRouter({
    mode: 'history',
    routes
});