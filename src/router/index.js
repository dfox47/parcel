import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import AuthGuard from './auth-guard';
import ParcelSend from "../views/ParcelSend";
import SendSearch from "../views/SendSearch";
import ParcelTake from "../views/ParcelTake";
import TakeSearch from "../views/TakeSearch";
import Registration from "../views/Registration";
import Search from "../views/Search";
import Error404 from "../views/Error404";

import LoginPopup from "@/components/LoginPopup";

Vue.use(VueRouter);

const popupRoutes = [
    {
        name: 'popupName',
        path: "/popupLogin",
        component: LoginPopup
    }
]

const routes = [
    {
        component: Home,
        path: '/',
        children: [
            {
                name: 'popupName',
                path: "/popupLogin",
                components: {
                    page: LoginPopup
                }
            }
        ]
    },
    {
        component: ParcelTake,
        path: '/take',
        children: popupRoutes
    },
    {
        component: TakeSearch,
        path: '/take/search',
        children: popupRoutes
    },
    {
        component: ParcelSend,
        path: '/send',
        children: [
            {
                path: "/popupLogin",
                components: {
                    page: LoginPopup
                }
            }
        ]
    },
    {
        component: SendSearch,
        path: '/send/search',
        children: popupRoutes
    },
    {
        component: Registration,
        path: '/registration',
        children: popupRoutes
    },

    {
        component: Search,
        path: '/search',
        children: popupRoutes
    },
    {
        component: Error404,
        path: '*',
        children: popupRoutes
    }

]

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;


