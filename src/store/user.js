import axios from 'axios'

class User {
    constructor (login, SessionId, expired) {
        this.login = login
        this.SessionId = SessionId
        this.expired = expired
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
        }
    },
    actions: {
        async loginUser ({ commit }, { login, password }) {
            commit('clearError')
            commit('setLoading', true)

            try {
                axios({
                    method: 'post',
                    url: 'http://91.236.164.182:8528/AZS/AZSWebCGI.exe/VerifyKMAZS?json=1',
                    data: 'Login='+login+'&Password='+password,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    withCredentials: true,
                    maxRedirects: 0,
                    responseType:"stream"
                })
                    .then(response =>{
                        if(response.data.IsLogin === true && response.data.SessionId.length > 0) {
                            let now = new Date();
                            now.setHours(now.getHours() + 23);
                            let user = {
                                login: login,
                                SessionId: response.data.SessionId,
                                expired: now
                            }
                            //console.log(user)

                            const parsed = JSON.stringify(user);
                            localStorage.setItem('user', parsed);

                            commit('setUser', new User(user.login, user.SessionId, user.expired))
                            commit('setLoading', false)

                            router.push('/lk/')
                        } else {
                            commit('setLoading', false)
                            commit('setError', 'Не верное имя пользователя или пароль!')
                        }
                    })
                    .catch(e => {
                        console.log(e)
                    })
            } catch (error) {
                console.log('error - ' + error)
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        },
        autoLoginUser ({ commit }, payload) {
            commit('setUser', new User(payload.login, payload.SessionId, payload.expired))
        },
        logoutUser ({ commit }) {
            commit('setUser', null)
            localStorage.removeItem('user')
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
