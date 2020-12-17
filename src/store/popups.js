export default {
    state: {
        ConfirmPopup: false,
        LoginPopup: false,
        RegistrationPopup: false,
        SendOrGrubPopup: false
    },
    mutations: {
        //Hide All popup's
        hideEverything (state) {
            state.ConfirmPopup = false;
            state.LoginPopup = false;
            state.RegistrationPopup = false;
            state.SendOrGrubPopup = false;
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
        }
    }
}