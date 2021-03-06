import Vue from 'vue'
import Vuex from 'vuex'
import shared from './shared'
import popups from "./popups";
import requests from "./requests";
import user from "./user";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        shared,
        requests,
        popups,
        user
    }
})
