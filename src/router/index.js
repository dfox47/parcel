


import Vue from 'vue';
import VueRouter from 'vue-router';

import AccountPersonalInfo from "../views/AccountPersonalInfo";
import AutoSearch from "@/views/AutoSearch";
import Home from '../views/Home';
import AuthGuard from './auth-guard';
import Error404 from "../views/Error404";
import MyMessages from "../views/MyMessages";
import MyParcelsCompleted from "../views/MyParcelsCompleted";
import ParcelOverview from "../views/ParcelOverview";
import ParcelSend from "../views/ParcelSend";
import ParcelTake from "../views/ParcelTake";
import Registration from "../views/Registration";
import Search from "../views/Search";
import SendSearch from "../views/SendSearch";
import SuitcaseOverview from "../views/SuitcaseOverview";
import SuitcaseSearch from "../views/SuitcaseSearch";
import TakeSearch from "../views/TakeSearch";



Vue.use(VueRouter);

const routes = [
    {
        component: AccountPersonalInfo,
        path: '/account/personal-info',
    },
    {
        component: AutoSearch,
        path: '/auto-search',
    },
    {
        component: Error404,
        path: '*',
    },
    {
        component: Home,
        path: '/',
    },
    {
        component: MyMessages,
        path: '/my-messages',
    },
    {
        component: MyParcelsCompleted,
        path: '/my-parcels-completed',
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
        component: ParcelOverview,
        path: '/parcel-overview',
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


