import axios from 'axios'
import router from '../router'

class User {
    constructor (login, user_id, access_token) {
        this.login = login
        this.user_id = user_id
        this.access_token = access_token
        this.info = null
    }
}

export default {
    state: {
        user: null,
        loginError: false,
        lang: 'ru',
        cur: 'rub'
    },
    mutations: {
        setUser (state, payload) {
            state.user = payload
        },
        setLoginError (state, payload) {
            state.loginError = payload
        },
        setLang (state, payload) {
            state.lang = payload
            localStorage.setItem('lang', payload);
        },
        setCur (state, payload) {
            state.cur = payload
            localStorage.setItem('cur', payload);
        },
        setInfo (state, payload) {
            state.user.info = payload
        }
    },
    actions: {
        autoLoginUser ({ commit }, payload) {
            commit('setUser', new User(payload.login, payload.user_id, payload.access_token))
        },

        async logoutUser ({ commit, getters }) {
            let token = getters.user.access_token
            commit('setUser', null)
            localStorage.removeItem('user')

            commit('clearError')
            commit('setLoading', true)

            try {
                axios.post(`https://api.wwprcl.ru/auth/logout`, {}, {
                    headers: {
                        'X-Api-AuthKey': token
                    },
                    withCredentials: true
                })
                    .then(response => {
                        console.log(response.data)
                        router.push('/')
                    }, error => {
                        console.log(error)
                    });
            } catch (error) {
                console.log('error - ' + error)
                commit('setError', error.message)
                throw error
            }
            commit('hideMenuPopup')
            commit('setLoading', false)
        },

        async updateUserData ({ commit, state }, payload) {
            //console.log(state.user)
            if (state.user !== null) {
                let token = state.user.access_token
                commit('clearError')
                commit('setLoading', true)

                try {
                    axios.get(`https://api.wwprcl.ru/api/profile/personal`, {
                        headers: {
                            'X-Api-AuthKey': token
                        }
                    })
                        .then(response => {
                            commit('setLoading', false);
                            commit('setInfo', response.data)
                            //console.log(state.user)
                        }, error => {
                            commit('setLoading', false);
                            commit('setError', error.toJSON().message);
                        });
                } catch(e) {
                    console.log(e)
                    throw e
                }
            }
        },

        setLoginError ({ commit }, payload) {
            commit('setLoginError', payload)
        },
        setLang ({ commit }, payload) {
            commit('setLang', payload)
        },
        setCur ({ commit }, payload) {
            commit('setCur', payload)
        }
    },
    getters: {
        user (state) {
            return state.user
        },
        isUserLoggedIn (state) {
            return state.user !== null
        },
        getLoginError (state) {
            return state.loginError
        },
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
