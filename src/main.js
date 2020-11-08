import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VueResource from 'vue-resource';
import Header from './components/Header';
import Footer from './components/Footer';

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);

Vue.use(VueResource);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
}).$mount('#app')
