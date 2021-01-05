import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home';
import AuthGuard from './auth-guard';
import Error404 from "../views/Error404";

import ParcelTake from "../views/ParcelTake";
import ParcelSend from "../views/ParcelSend";
import ParcelOverview from "../views/ParcelOverview";
import Registration from "../views/Registration";
import Search from "../views/Search";
import SendSearch from "../views/SendSearch";
import SuitcaseOverview from "../views/SuitcaseOverview";
import SuitcaseSearch from "../views/SuitcaseSearch";
import TakeSearch from "../views/TakeSearch";

import LoginPopup from "@/components/LoginPopup";

Vue.use(VueRouter);

const routes = [
    {
        component: Error404,
        path: '*',
    },
    {
        component: Home,
        path: '/',
    },
    {
        component: ParcelOverview,
        path: '/parseloveriew',
    },
    {
        component: SuitcaseOverview,
        path: '/suitcase-overview',
    },
    {
        component: SuitcaseSearch,
        path: '/suitcase-search',
    },
    {
        component: ParcelSend,
        path: '/send',
    },
    {
        component: ParcelTake,
        path: '/take',
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
        component: SendSearch,
        path: '/send/search',
    },
    {
        component: TakeSearch,
        path: '/take/search',
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;


