export default {
    state: {
        ConfirmPopup: false,

        InternationalPopup_1: false,
        InternationalPopup_2: false,

        LangAndCurPopup: false,
        LoginPopup: false,
        MenuPopup: false,

        PassportPopup_1: false,
        PassportPopup_2: false,
        PassportPopup_3: false,
        PassportLoadedPopup: false,

        RegistrationPopup: false,

        RequestAcceptedPopup: false,
        RequestPlacePopup_1: false,
        RequestPlacePopup_2: false,
        RequestSendPopup_1: false,
        RequestSendPopup_2: false,
        RequestSendPopup_3: false,

        SendOrGrubPopup: false
    },
    mutations: {
        //Hide All popup's
        hideEverything (state) {
            state.ConfirmPopup = false;

            state.InternationalPopup_1 = false;
            state.InternationalPopup_2 = false;

            state.LangAndCurPopup = false;
            state.LoginPopup = false;
            state.MenuPopup = false;

            state.PassportPopup_1 = false;
            state.PassportPopup_2 = false;
            state.PassportPopup_3 = false;
            state.PassportLoadedPopup = false;

            state.RegistrationPopup = false;

            state.RequestPlacePopup_1 = false;
            state.RequestPlacePopup_2 = false;
            state.RequestSendPopup_1 = false;
            state.RequestSendPopup_2 = false;
            state.RequestSendPopup_3 = false;
            state.RequestAcceptedPopup = false;

            state.SendOrGrubPopup = false;
        },

        //CONFIRM
        showConfirmPopup(state) {
            this.commit('hideEverything');
            state.ConfirmPopup = true;
        },
        hideConfirmPopup(state) {
            state.ConfirmPopup = false;
        },

        //RequestPlace1
        showInternationalPopup_1(state) {
            console.log('showInternationalPopup_1');
            this.commit('hideEverything');
            state.InternationalPopup_1 = true;
        },
        hideInternationalPopup_1 (state) {
            state.InternationalPopup_1 = false;
        },

        //RequestPlace2
        showInternationalPopup_2(state) {
            this.commit('hideEverything');
            state.InternationalPopup_2 = true;
        },
        hideInternationalPopup_2 (state) {
            state.InternationalPopup_2 = false;
        },

        //LangAndCur
        showLangAndCurPopup(state) {
            this.commit('hideEverything');
            state.LangAndCurPopup = true;
        },
        hideLangAndCurPopup (state) {
            state.LangAndCurPopup = false;
        },

        //LOGIN
        showLoginPopup(state) {
            this.commit('hideEverything');
            state.LoginPopup = true;
        },
        hideLoginPopup(state) {
            state.LoginPopup = false;
        },

        //Menu
        showMenuPopup(state) {
            this.commit('hideEverything');
            state.MenuPopup = true;
        },
        hideMenuPopup (state) {
            state.MenuPopup = false;
        },

        //PassportPopup_1
        showPassportPopup_1(state) {
            this.commit('hideEverything');
            state.PassportPopup_1 = true;
        },
        hidePassportPopup_1 (state) {
            state.PassportPopup_1 = false;
        },

        //PassportPopup_2
        showPassportPopup_2(state) {
            this.commit('hideEverything');
            state.PassportPopup_2 = true;
        },
        hidePassportPopup_2 (state) {
            state.PassportPopup_2 = false;
        },

        //PassportPopup_3
        showPassportPopup_3(state) {
            this.commit('hideEverything');
            state.PassportPopup_3 = true;
        },
        hidePassportPopup_3(state) {
            state.PassportPopup_3 = false;
        },

        //PassportLoadedPopup
        showPassportLoadedPopup(state) {
            this.commit('hideEverything');
            state.PassportLoadedPopup = true;
        },
        hidePassportLoadedPopup (state) {
            state.PassportLoadedPopup = false;
        },

        //REGISTRATION
        showRegistrationPopup(state) {
            this.commit('hideEverything');
            state.RegistrationPopup = true;
        },
        hideRegistrationPopup(state) {
            state.RegistrationPopup = false;
        },

        //SendOrGrub
        showSendOrGrubPopup(state) {
            this.commit('hideEverything');
            state.SendOrGrubPopup = true;
        },
        hideSendOrGrubPopup(state) {
            state.SendOrGrubPopup = false;
        },

        //RequestPlace1
        showRequestPlacePopup_1(state) {
            this.commit('hideEverything');
            state.RequestPlacePopup_1 = true;
        },
        hideRequestPlacePopup_1 (state) {
            state.RequestPlacePopup_1 = false;
        },

        //RequestPlace2
        showRequestPlacePopup_2(state) {
            this.commit('hideEverything');
            state.RequestPlacePopup_2 = true;
        },
        hideRequestPlacePopup_2 (state) {
            state.RequestPlacePopup_2 = false;
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

        //RequestSend3
        showRequestSendPopup_3(state) {
            this.commit('hideEverything');
            state.RequestSendPopup_3= true;
        },
        hideRequestSendPopup_3 (state) {
            state.RequestSendPopup_3= false;
        },

        //RequestAcceptedPopup
        showRequestAcceptedPopup(state) {
            this.commit('hideEverything');
            state.RequestAcceptedPopup= true;
        },
        hideRequestAcceptedPopup (state) {
            state.RequestAcceptedPopup= false;
        }
    },
    actions: {
        showConfirmPopup ({ commit }) {
            commit('showConfirmPopup')
        },
        hideConfirmPopup ({ commit }) {
            commit('hideConfirmPopup')
        },

        showInternationalPopup_1 ({ commit }) {
            // console.log('showInternationalPopup_1');
            commit('showInternationalPopup_1');
        },
        hideInternationalPopup_1 ({ commit }) {
            commit('hideInternationalPopup_1');
        },
        showInternationalPopup_2({ commit }) {
            commit('showInternationalPopup_2')
        },
        hideInternationalPopup_2 ({ commit }) {
            commit('hideInternationalPopup_2')
        },

        showLangAndCurPopup ({ commit }) {
            commit('showLangAndCurPopup')
        },
        hideLangAndCurPopup ({ commit }) {
            commit('hideLangAndCurPopup')
        },
        showLoginPopup ({ commit }) {
            commit('showLoginPopup')
        },
        hideLoginPopup({ commit }) {
            commit('hideLoginPopup')
        },
        showMenuPopup ({ commit }) {
            commit('showMenuPopup')
        },
        hideMenuPopup ({ commit }) {
            commit('hideMenuPopup')
        },

        showPassportPopup_1({ commit }) {
            commit('showPassportPopup_1')
        },
        hidePassportPopup_1 ({ commit }) {
            commit('hidePassportPopup_1')
        },
        showPassportPopup_2({ commit }) {
            commit('showPassportPopup_2')
        },
        hidePassportPopup_2 ({ commit }) {
            commit('hidePassportPopup_2')
        },
        showPassportPopup_3({ commit }) {
            commit('showPassportPopup_3')
        },
        hidePassportPopup_3 ({ commit }) {
            commit('hidePassportPopup_3')
        },
        showPassportLoadedPopup({ commit }) {
            commit('showPassportLoadedPopup')
        },
        hidePassportLoadedPopup ({ commit }) {
            commit('hidePassportLoadedPopup')
        },

        showRegistrationPopup ({ commit }) {
            commit('showRegistrationPopup')
        },
        hideRegistrationPopup ({ commit }) {
            commit('hideRegistrationPopup')
        },

        showRequestAcceptedPopup({ commit }) {
            commit('showRequestAcceptedPopup')
        },
        hideRequestAcceptedPopup ({ commit }) {
            commit('hideRequestAcceptedPopup')
        },
        showRequestPlacePopup_1({ commit }) {
            commit('showRequestPlacePopup_1')
        },
        hideRequestPlacePopup_1 ({ commit }) {
            commit('hideRequestPlacePopup_1')
        },
        showRequestPlacePopup_2({ commit }) {
            commit('showRequestPlacePopup_2')
        },
        hideRequestPlacePopup_2 ({ commit }) {
            commit('hideRequestPlacePopup_2')
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

        showSendOrGrubPopup ({ commit }) {
            commit('showSendOrGrubPopup')
        },
        hideSendOrGrubPopup ({ commit }) {
            commit('hideSendOrGrubPopup')
        },
    },
    getters: {
        getConfirmPopup (state) {
            return state.ConfirmPopup;
        },

        getInternationalPopup_1 (state) {
            return state.InternationalPopup_1;
        },
        getInternationalPopup_2 (state) {
            return state.InternationalPopup_2;
        },

        getLangAndCurPopup (state) {
            return state.LangAndCurPopup;
        },
        getLoginPopup (state) {
            return state.LoginPopup;
        },
        getMenuPopup (state) {
            return state.MenuPopup;
        },

        getPassportPopup_1 (state) {
            return state.PassportPopup_1;
        },
        getPassportPopup_2 (state) {
            return state.PassportPopup_2;
        },
        getPassportPopup_3 (state) {
            return state.PassportPopup_3;
        },
        getPassportLoadedPopup (state) {
            return state.PassportLoadedPopup;
        },

        getRegisterPopup (state) {
            return state.RegistrationPopup;
        },

        getRequestAcceptedPopup (state) {
            return state.RequestAcceptedPopup;
        },
        getRequestPlacePopup_1 (state) {
            return state.RequestPlacePopup_1;
        },
        getRequestPlacePopup_2 (state) {
            return state.RequestPlacePopup_2;
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

        getSendOrGrub (state) {
            return state.SendOrGrubPopup;
        }
    }
}
