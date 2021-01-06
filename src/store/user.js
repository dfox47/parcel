export default {
    state: {
        lang: 'ru',
        cur: 'rub'
    },
    mutations: {
        setLang (state, payload) {
            state.lang = payload
            localStorage.setItem('lang', payload);
        },
        setCur (state, payload) {
            state.cur = payload
            localStorage.setItem('cur', payload);
        }
    },
    actions: {
        setLang ({ commit }, payload) {
            commit('setLang', payload)
        },
        setCur ({ commit }, payload) {
            commit('setCur', payload)
        }
    },
    getters: {
        getLang (state) {
            return state.lang
        },
        getCur (state) {
            return state.cur
        },
        getCurSymbol (state) {
            if (state.cur === 'rub') {
                return '₽'
            } else {
                return '$'
            }
        }
    }
}
