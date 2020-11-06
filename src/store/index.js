import Vue from 'vue'
import Vuex from 'vuex'
import shared from './shared'
import requests from "./requests";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        shared,
        requests
    }
})
