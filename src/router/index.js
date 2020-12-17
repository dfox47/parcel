import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import AuthGuard from './auth-guard';
import ParcelSend from "../views/ParcelSend";
import SendSearch from "../views/SendSearch";
import ParcelTake from "../views/ParcelTake";
import ParcelOverview from "../views/ParcelOverview";
import TakeSearch from "../views/TakeSearch";
import Registration from "../views/Registration";
import Search from "../views/Search";
import Error404 from "../views/Error404";

import LoginPopup from "@/components/LoginPopup";

Vue.use(VueRouter);

const routes = [
    {
        component: Home,
        path: '/',
    },
    {
        component: ParcelTake,
        path: '/take',
    },
    {
        component: TakeSearch,
        path: '/take/search',
    },
    {
        component: ParcelOverview,
        path: '/parseloveriew',
    },
    {
        component: ParcelSend,
        path: '/send',
    },
    {
        component: SendSearch,
        path: '/send/search',
    },
    {
        component: Registration,
        path: '/registration',
    },

    {
        component: Search,
        path: '/search',
    },
    {
        component: Error404,
        path: '*',
    }

]

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;


