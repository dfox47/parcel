<template id="modal-template">
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
            <v-card
                v-if="showLoginPopup"
            >
                <div class="popup popup_login">
                    <div
                        class="popup_close_btn"
                        @click="this.hideLoginPopup"
                    />

                    <form
                        action=""
                        class="popup_one_column"
                    >
                        <v-card-title>
                            {{ $vuetify.lang.t('$vuetify.login') }}
                        </v-card-title>

                        <label class="input_wrap">
                            <v-text-field
                                label="Номер телефона"
                                v-focus
                            />
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
                                <v-checkbox
                                    v-model="checkbox"
                                    :label="$vuetify.lang.t('$vuetify.login.remember')"
                                />
                            </div>

                            <span>{{ $vuetify.lang.t('$vuetify.login.forgot_pass') }}</span>
                        </div>

                        <span
                            class="btn btn_blue btn_large"
                            @click="this.hideLoginPopup"
                        >
                            {{ $vuetify.lang.t('$vuetify.continue_button') }}
                        </span>

                        <div class="popup_bottom">
                            <p>
                                {{ $vuetify.lang.t('$vuetify.login.dont_have_account') }}
                            </p>

                            <a
                                class="link_blue"
                                @click="this.showRegistrationPopup"
                            >
                                {{ $vuetify.lang.t('$vuetify.register') }}
                            </a>
                        </div>
                    </form>
                </div>
            </v-card>
        </transition>
    </div>
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
        },
        showRegistrationPopup () {
            store.commit('showRegistrationPopup');
        }
    },
    watch: {
        "$store.state.LoginPopup"(nv) {
            this.showLoginPopup = nv;
        }
    }
}
</script>
