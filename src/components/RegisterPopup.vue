<template id="modal-template">
    <div>
        <transition
            name="fade"
            appear
        >
            <div
                class="popup_overlay"
                v-if="showRegistrationPopup"
                @click="this.hideRegistrationPopup"
            />
        </transition>

        <transition

            name="fade"
            appear
        >
            <div
                class="popup popup_register"
                v-if="showRegistrationPopup"
            >
                <div
                    class="popup_close_btn"
                    @click="this.hideRegistrationPopup"
                />

                <form
                    action=""
                    class="popup_one_column"
                >
                    <h3>
                        {{ $vuetify.lang.t('$vuetify.register') }}
                    </h3>

                    <label class="input_wrap">
                        <input
                            type="text"
                            placeholder="Номер телефона"
                        >
                    </label>

                    <label class="input_wrap">
                        <input
                            :type="type"
                            placeholder="Придумайте Пароль"
                        >

                        <img
                            class="input_wrap__img"
                            :src="pass_img"
                            @click="showPassword"
                            alt=""
                        >
                    </label>

                    <div class="popup_login_options">
                        {{ $vuetify.lang.t('$vuetify.registration_text') }}
                    </div>

                    <span
                        class="btn btn_blue btn_large"
                        @click="this.showConfirmPopup"
                    >
                        {{ $vuetify.lang.t('$vuetify.continue_button') }}
                    </span>

                    <div class="popup_bottom">
                        <p>
                            {{ $vuetify.lang.t('$vuetify.registration.login') }}
                        </p>

                        <a
                            class="link_blue"
                            @click="this.showLoginPopup"
                        >
                            {{ $vuetify.lang.t('$vuetify.login') }}
                        </a>
                    </div>
                </form>
            </div>
        </transition>
    </div>
</template>

<script>
import store from "../store";
export default {
    data() {
        return {
            pass_img: require('@/assets/i/icons/show_pass.svg'),
            showRegistrationPopup: store.getters.RegistrationPopup,
            type: 'password',
            btnText: 'Show Password'
        }
    },
    methods: {
        hideRegistrationPopup () {
            store.commit('hideRegistrationPopup');
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
        },
        showLoginPopup () {
            store.commit('showLoginPopup');
        },
        showConfirmPopup () {
            store.commit('showConfirmPopup');
        }
    },
    watch: {
        "$store.state.RegistrationPopup"(nv) {
            this.showRegistrationPopup = nv;
        }
    }
}
</script>
