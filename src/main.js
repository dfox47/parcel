import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import Header from './components/Header';
import Footer from './components/Footer';

import Login_popup from './components/LoginPopup';
import Register_popup from './components/RegisterPopup';
import RequestSend_popup from './components/RequestSendPopup';
import Confirm_popup from './components/ConfirmPopup';
import SendOrGrab_popup from './components/SendOrGrabPopup';
import LangAndCur_popup from './components/LangAndCurPopup';
import Menu_popup from './components/MenuPopup';

import CountryFlag from 'vue-country-flag';

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('app-login_popup', Login_popup);
Vue.component('app-register_popup', Register_popup);
Vue.component('app-request_send_popup', RequestSend_popup);
Vue.component('app-confirm_popup', Confirm_popup);
Vue.component('app-send_or_grub_popup', SendOrGrab_popup);
Vue.component('app-lang_and_cur_popup', LangAndCur_popup);
Vue.component('app-menu_popup', Menu_popup);

Vue.component('country-flag', CountryFlag);



Vue.config.productionTip = false;

Vue.directive('focus', {
    // Когда привязанный элемент вставлен в DOM...
    inserted: function (el) {
        // Переключаем фокус на элемент
        el.focus()
    }
})


new Vue({
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
            console.log(cur)
            if (cur === 'rub') {
                this.$store.dispatch('setCur', 'rub')
            } else {
                this.$vuetify.lang.current = 'ru'
                this.$store.dispatch('setCur', 'eur')
            }
        }
    }
}).$mount('#app')
