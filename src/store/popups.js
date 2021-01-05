export default {
    state: {
        ConfirmPopup: false,
        LoginPopup: false,
        RegistrationPopup: false,
        SendOrGrubPopup: false,
        LangAndCurPopup: false,
        MenuPopup: false,
        RequestSend: true
    },
    mutations: {
        //Hide All popup's
        hideEverything (state) {
            state.ConfirmPopup = false;
            state.LoginPopup = false;
            state.RegistrationPopup = false;
            state.SendOrGrubPopup = false;
            state.LangAndCurPopup = false;
            state.MenuPopup = false;
            state.RequestSend = false;
        },

        //LOGIN
        showLoginPopup(state) {
            this.commit('hideEverything');
            state.LoginPopup = true;
        },
        hideLoginPopup(state) {
            state.LoginPopup = false;
        },

        //REGISTRATION
        showRegistrationPopup(state) {
            this.commit('hideEverything');
            state.RegistrationPopup = true;
        },
        hideRegistrationPopup(state) {
            state.RegistrationPopup = false;
        },

        //CONFIRM
        showConfirmPopup(state) {
            this.commit('hideEverything');
            state.ConfirmPopup = true;
        },
        hideConfirmPopup(state) {
            state.ConfirmPopup = false;
        },

        //SendOrGrub
        showSendOrGrubPopup(state) {
            this.commit('hideEverything');
            state.SendOrGrubPopup = true;
        },
        hideSendOrGrubPopup(state) {
            state.SendOrGrubPopup = false;
        },

        //LangAndCur
        showLangAndCurPopup(state) {
            this.commit('hideEverything');
            state.LangAndCurPopup = true;
        },
        hideLangAndCurPopup (state) {
            state.LangAndCurPopup = false;
        },

        //Menu
        showMenuPopup(state) {
            this.commit('hideEverything');
            state.MenuPopup = true;
        },
        hideMenuPopup (state) {
            state.MenuPopup = false;
        },

        //RequestSend
        showRequestSendPopup(state) {
            this.commit('hideEverything');
            state.RequestSend = true;
        },
        hideRequestSendPopup (state) {
            state.RequestSend = false;
        }
    },
    actions: {
        showLoginPopup ({ commit }) {
            commit('showLoginPopup')
        },
        hideLoginPopup({ commit }) {
            commit('hideLoginPopup')
        },

        showRegistrationPopup ({ commit }) {
            commit('showRegistrationPopup')
        },
        hideRegistrationPopup ({ commit }) {
            commit('hideRegistrationPopup')
        },

        showConfirmPopup ({ commit }) {
            commit('showConfirmPopup')
        },
        hideConfirmPopup ({ commit }) {
            commit('hideConfirmPopup')
        },

        showSendOrGrubPopup ({ commit }) {
            commit('showSendOrGrubPopup')
        },
        hideSendOrGrubPopup ({ commit }) {
            commit('hideSendOrGrubPopup')
        },

        showLangAndCurPopup ({ commit }) {
            commit('showLangAndCurPopup')
        },
        hideLangAndCurPopup ({ commit }) {
            commit('hideLangAndCurPopup')
        },

        showMenuPopup ({ commit }) {
            commit('showMenuPopup')
        },
        hideMenuPopup ({ commit }) {
            commit('hideMenuPopup')
        },

        showRequestSendPopup(state) {
            this.commit('hideEverything');
            state.RequestSend = true;
        },
        hideRequestSendPopup (state) {
            state.RequestSend = false;
        }
    },
    getters: {
        getLoginPopup (state) {
            return state.LoginPopup;
        },
        getRegisterPopup (state) {
            return state.RegistrationPopup;
        },
        getConfirmPopup (state) {
            return state.ConfirmPopup;
        },
        getSendOrGrub (state) {
            return state.SendOrGrubPopup;
        },
        getLangAndCurPopup (state) {
            return state.LangAndCurPopup;
        },
        getMenuPopup (state) {
            return state.MenuPopup;
        },
        getRequestSendPopup (state) {
            return state.RequestSend;
        }
    }
}
