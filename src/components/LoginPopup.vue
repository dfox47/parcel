<template id="modal-template">
    <Portal to="popup">
        <slot name="backdrop"/>
        <div>
            <transition
                name="fade"
                appear
            >
                <div
                    class="popup_overlay"
                    v-if="showLoginPopup"
                    @click="this.hideLoginPopup"
                />
            </transition>

            <transition
                name="fade"
                appear
            >
                <div
                    class="popup popup_login"
                    v-if="showLoginPopup"
                >
                    <div
                        class="popup_close_btn"
                        @click="this.hideLoginPopup"
                    />

                    <form
                        action=""
                        class="popup_one_column"
                    >
                        <h2>
                            {{ $vuetify.lang.t('$vuetify.login') }}
                        </h2>

                        <label class="input_wrap">
                            <input
                                type="text"
                                placeholder="Номер телефона"
                            >
                        </label>

                        <label class="input_wrap">
                            <input
                                :type="type"
                                placeholder="Пароль"
                            >

                            <img
                                class="input_wrap__img"
                                :src="pass_img"
                                @click="showPassword"
                                alt=""
                            >
                        </label>

                        <div class="popup_login_options">
                            <div>
                                <label class="checkbox">
                                    <input
                                        type="checkbox"
                                        class="visually-hidden"
                                    >

                                    <span class="checkbox__box" />

                                    <span class="checkbox__desc">Запомнить меня</span>
                                </label>
                            </div>

                            <span>Забыли пароль?</span>
                        </div>

                        <span
                            class="btn btn_blue btn_large"
                            @click="this.hideLoginPopup"
                        >
                            {{ $vuetify.lang.t('$vuetify.continue_button') }}
                        </span>

                        <div class="popup_bottom">
                            <p>
                                Еще нет аккаунта?
                            </p>

                            <a
                                href=""
                                class="link_blue"
                            >
                                {{ $vuetify.lang.t('$vuetify.register') }}
                            </a>
                        </div>
                    </form>
                </div>
            </transition>
        </div>
    </Portal>
</template>

<script>
import store from "../store";
export default {
    data() {
        return {
            pass_img: require('@/assets/i/icons/show_pass.svg'),
            showLoginPopup: store.getters.getLoginPopup,
            type: 'password',
            btnText: 'Show Password'
        }
    },
    methods: {
        hideLoginPopup () {
            store.commit('hideLoginPopup');
        },
        showPassword () {
            if (this.type === 'password') {
                this.type = 'text'
                this.pass_img = require('@/assets/i/icons/hide_pass.svg')
            }
            else {
                this.type = 'password'
                this.pass_img = require('@/assets/i/icons/show_pass.svg')
            }
        }
    },
    watch: {
        "$store.state.LoginPopup"(nv) {
            this.showLoginPopup = nv;
        }
    }
}
</script>
