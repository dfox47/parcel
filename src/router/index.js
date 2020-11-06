import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import AuthGuard from './auth-guard'
import ParcelSend from "../views/ParcelSend";
import SendSearch from "../views/SendSearch";
import ParcelTake from "../views/ParcelTake";
import TakeSearch from "../views/TakeSearch";
import Registration from "../views/Registration";
import Search from "../views/Search";
import Error404 from "../views/Error404";

Vue.use(VueRouter)

const routes = [
    {
        component: Home,
        name: 'Home',
        path: '/'
    },
    {
        component: ParcelTake,
        name: 'ParcelTake',
        path: '/take'
    },
    {
        path: '/take/search',
        component: TakeSearch
    },
    {
        component: ParcelSend,
        name: 'ParcelSend',
        path: '/send'
    },
    {
        path: '/send/search',
        component: SendSearch
    },
    {
        component: Registration,
        name: 'Registration',
        path: '/registration'
    },

    {
        path: '/search',
        component: Search
    },
    {
        path: '*',
        component: Error404
    }

]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router

