


import Vue from 'vue';
import VueRouter from 'vue-router';

import AccountPersonalInfo from "@/views/AccountPersonalInfo";
import AccountPayments from "@/views/AccountPayments";
import AutoSearch from "@/views/AutoSearch";
import AuthGuard from './auth-guard';
import Conditions from "@/views/rules/Conditions";
import CookiePolicy from "@/views/rules/CookiePolicy";
import Error404 from "@/views/Error404";
import GuaranteeOwners from "@/views/rules/GuaranteeOwners";
import Home from '@/views/Home';
import IntellectualPolicy from "@/views/rules/IntellectualPolicy";
import MyMessages from "@/views/MyMessages";
import MyParcelsActive from "@/views/MyParcelsActive";
import MyParcelsCompleted from "@/views/MyParcelsCompleted";
import ParcelOverview from "@/views/ParcelOverview";
import ParcelSend from "@/views/ParcelSend";
import ParcelTake from "@/views/ParcelTake";
import PrivacyPolicy from "@/views/rules/PrivacyPolicy";
import Registration from "@/views/Registration";
import Return from "@/views/rules/Return";
import Search from "@/views/Search";
import SendSearch from "@/views/SendSearch";
import ServicePolicy from "@/views/rules/ServicePolicy";
import SuitcaseOverview from "@/views/SuitcaseOverview";
import SuitcaseSearch from "@/views/SuitcaseSearch";
import TakeSearch from "@/views/TakeSearch";
import TermsOfService from "@/views/rules/TermsOfService";



Vue.use(VueRouter);

const routes = [
    {
        component: AccountPersonalInfo,
        path: '/account/personal-info',
    },
    {
        component: AccountPayments,
        path: '/account/payments',
    },
    {
        component: AutoSearch,
        path: '/auto-search',
    },
    {
        component: Conditions,
        path: '/rules/conditions',
    },
    {
        component: CookiePolicy,
        path: '/rules/cookie-policy',
    },
    {
        component: Error404,
        path: '*',
    },
    {
        component: GuaranteeOwners,
        path: '/rules/guarantee-owners',
    },
    {
        component: Home,
        path: '/',
    },
    {
        component: IntellectualPolicy,
        path: '/rules/intellectual-policy',
    },
    {
        component: MyMessages,
        path: '/my-messages',
    },
    {
        component: MyParcelsActive,
        path: '/my-parcels-active',
    },
    {
        component: MyParcelsCompleted,
        path: '/my-parcels-completed',
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
        component: PrivacyPolicy,
        path: '/rules/privacy-policy',
    },
    {
        component: Registration,
        path: '/registration',
    },
    {
        component: Return,
        path: '/rules/return',
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
        component: ServicePolicy,
        path: '/rules/service-policy',
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
        component: TakeSearch,
        path: '/take/search',
    },
    {
        component: TermsOfService,
        path: '/rules',
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;


