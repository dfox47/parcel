import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VueResource from 'vue-resource';
import Header from './components/Header';
import Footer from './components/Footer';
import Login_popup from './components/LoginPopup';
import Register_popup from './components/RegisterPopup';
import Confirm_popup from './components/ConfirmPopup';
import CountryFlag from 'vue-country-flag';

import PortalVue from 'portal-vue'

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('app-login_popup', Login_popup);
Vue.component('app-register_popup', Register_popup);
Vue.component('app-confirm_popup', Confirm_popup);
Vue.component('country-flag', CountryFlag);

Vue.use(VueResource);

Vue.use(PortalVue);

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
}).$mount('#app')
