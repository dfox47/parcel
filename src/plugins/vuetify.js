import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)
import ru from '../locale/ru.json'
import en from '../locale/en.json'

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#3f51b5',
                secondary: '#b0bec5',
                accent: '#8c9eff',
                error: '#b71c1c'
            }
        }
    },
    lang: {
        locales: { ru, en },
        current: 'ru'
    }
})
