export default {
    state: {
        ConfirmPopup: false,
        LoginPopup: false,
        RegistrationPopup: false,
        SendOrGrubPopup: false,
        LangAndCurPopup: false,
        MenuPopup: false,
        RequestSendPopup_1: false,
        RequestSendPopup_2: false,
        RequestSendPopup_3: false,
        RequestAcceptedPopup: false
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
            state.RequestSendPopup_1= false;
            state.RequestSendPopup_2= false;
            state.RequestSendPopup_3= false;
            state.RequestAcceptedPopup= false;
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

        //RequestSend1
        showRequestSendPopup_1(state) {
            this.commit('hideEverything');
            state.RequestSendPopup_1= true;
        },
        hideRequestSendPopup_1 (state) {
            state.RequestSendPopup_1= false;
        },

        //RequestSend2
        showRequestSendPopup_2(state) {
            this.commit('hideEverything');
            state.RequestSendPopup_2= true;
        },
        hideRequestSendPopup_2 (state) {
            state.RequestSendPopup_2= false;
        },

        //RequestSend
        showRequestSendPopup_3(state) {
            this.commit('hideEverything');
            state.RequestSendPopup_3= true;
        },
        hideRequestSendPopup_3 (state) {
            state.RequestSendPopup_3= false;
        },

        //RequestSend
        showRequestAcceptedPopup(state) {
            this.commit('hideEverything');
            state.RequestAcceptedPopup= true;
        },
        hideRequestAcceptedPopup (state) {
            state.RequestAcceptedPopup= false;
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

        showRequestSendPopup_1({ commit }) {
            commit('showRequestSendPopup_1')
        },
        hideRequestSendPopup_1 ({ commit }) {
            commit('hideRequestSendPopup_1')
        },

        showRequestSendPopup_2({ commit }) {
            commit('showRequestSendPopup_2')
        },
        hideRequestSendPopup_2 ({ commit }) {
            commit('hideRequestSendPopup_2')
        },

        showRequestSendPopup_3({ commit }) {
            commit('showRequestSendPopup_3')
        },
        hideRequestSendPopup_3 ({ commit }) {
            commit('hideRequestSendPopup_3')
        },

        showRequestAcceptedPopup({ commit }) {
            commit('showRequestAcceptedPopup')
        },
        hideRequestAcceptedPopup ({ commit }) {
            commit('hideRequestAcceptedPopup')
        },
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
        getRequestSendPopup_1 (state) {
            return state.RequestSendPopup_1;
        },
        getRequestSendPopup_2 (state) {
            return state.RequestSendPopup_2;
        },
        getRequestSendPopup_3 (state) {
            return state.RequestSendPopup_3;
        },
        getRequestAcceptedPopup (state) {
            return state.RequestAcceptedPopup;
        }
    }
}
