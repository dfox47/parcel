import Vue from 'vue'
import Vuex from 'vuex'
import shared from './shared'
import requests from "./requests";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        LoginPopup: false
    },
    mutations: {
        showLoginPopup(state) {
            console.log('showLoginPopup');
            state.LoginPopup = true;
        },
        hideLoginPopup(state) {
            state.LoginPopup = false;
        }
    },
    getters: {
        getLoginPopup: state => {
            return state.LoginPopup;
        }
    }
})
