import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import axios from './plugins/axios'
import Header from './components/Header';
import Footer from './components/Footer';
import RulesMenu from './components/RulesMenu';

// popup [START]
import Confirm_popup from './components/ConfirmPopup';

import International_popup_1 from './components/InternationalPopup_1';
import International_popup_2 from './components/InternationalPopup_2';

import LangAndCur_popup from './components/LangAndCurPopup';
import Login_popup from './components/LoginPopup';
import Menu_popup from './components/MenuPopup';

import Passport_popup_1 from './components/PassportPopup_1';
import Passport_popup_2 from './components/PassportPopup_2';
import Passport_popup_3 from './components/PassportPopup_3';

import PassportLoaded_popup from './components/PassportLoadedPopup';

import Register_popup from './components/RegisterPopup';

import RequestAccepted_popup from './components/RequestAcceptedPopup';

import RequestSend_popup_1 from './components/RequestSendPopup_1';
import RequestSend_popup_2 from './components/RequestSendPopup_2';
import RequestSend_popup_3 from './components/RequestSendPopup_3';

import RequestPlace_popup_1 from './components/RequestPlacePopup_1';
import RequestPlace_popup_2 from './components/RequestPlacePopup_2';

import SendOrGrab_popup from './components/SendOrGrabPopup';
// popup [END]

import CountryFlag from 'vue-country-flag';
import VCalendar from "v-calendar";
import moment from 'moment';
import './plugins/vuetify-mask.js';
import axios from "axios";

Vue.component('app-confirm_popup', Confirm_popup);
Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('app-rules_menu', RulesMenu);

Vue.component('app-international_popup_1', International_popup_1);
Vue.component('app-international_popup_2', International_popup_2);

Vue.component('app-lang_and_cur_popup', LangAndCur_popup);
Vue.component('app-login_popup', Login_popup);

Vue.component('app-menu_popup', Menu_popup);

Vue.component('app-passport_popup_1', Passport_popup_1);
Vue.component('app-passport_popup_2', Passport_popup_2);
Vue.component('app-passport_popup_3', Passport_popup_3);

Vue.component('app-passport_loaded_popup', PassportLoaded_popup);

Vue.component('app-register_popup', Register_popup);

Vue.component('app-request_send_popup_1', RequestSend_popup_1);
Vue.component('app-request_send_popup_2', RequestSend_popup_2);
Vue.component('app-request_send_popup_3', RequestSend_popup_3);

Vue.component('app-request_place_popup_1', RequestPlace_popup_1);
Vue.component('app-request_place_popup_2', RequestPlace_popup_2);

Vue.component('app-request_accepted_popup', RequestAccepted_popup);

Vue.component('app-send_or_grub_popup', SendOrGrab_popup);

Vue.component('country-flag', CountryFlag);

Vue.component('calendar', VCalendar)

Vue.config.productionTip = false;
Vue.prototype.$moment = moment;

Vue.directive('focus', {
    // Когда привязанный элемент вставлен в DOM...
    inserted: function (el) {
        // Переключаем фокус на элемент
        el.focus()
    }
})

new Vue({
    axios,
    router,
    store,
    vuetify,
    render: h => h(App),
    created () {
        if (localStorage.getItem('lang')) {
            let lang = localStorage.getItem('lang')
            if (lang === 'en') {
                this.$vuetify.lang.current = 'en'
                this.$store.dispatch('setLang', 'en')
            } else {
                this.$vuetify.lang.current = 'ru'
                this.$store.dispatch('setLang', 'ru')
            }
        }

        if (localStorage.getItem('cur')) {
            let cur = localStorage.getItem('cur')
            //console.log(cur)
            if (cur === 'rub') {
                this.$store.dispatch('setCur', 'rub')
            } else {
                this.$vuetify.lang.current = 'ru'
                this.$store.dispatch('setCur', 'eur')
            }
        }

        if (localStorage.getItem('user')) {
            try {
                this.$store.dispatch('clearError');
                this.$store.dispatch('setLoading', true);

                let user = JSON.parse(localStorage.getItem('user'));

                axios.post(`https://api.wwprcl.ru/auth/session`, {
                    phone: user.login,
                    apiKey: user.access_token
                },{
                    headers: {
                        'X-Api-AuthKey': user.access_token
                    }
                }).then(response => {
                    this.$store.dispatch('setLoading', false);
                    let data = response.data
                    if (data.success === true) {
                        this.$store.dispatch('autoLoginUser', user);
                        this.$store.dispatch('updateUserData');
                    } else {
                        localStorage.removeItem('user');
                    }
                }, error => {
                    this.$store.dispatch('setLoading', false);
                    this.$store.dispatch('setError', error.toJSON().message);
                    localStorage.removeItem('user');
                });
            } catch(e) {
                localStorage.removeItem('user');
            }
        }
    }
}).$mount('#app')


