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
            <v-card
                v-if="showRegistrationPopup"
            >
                <div class="popup popup_register">
                    <div
                        class="popup_close_btn"
                        @click="this.hideRegistrationPopup"
                    />

                    <form
                        action=""
                        class="popup_one_column"
                    >
                        <v-card-title>
                            {{ $vuetify.lang.t('$vuetify.register') }}
                        </v-card-title>

                        <label class="input_wrap">
                            <input
                                type="text"
                                placeholder="Номер телефона"
                                v-focus
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
            </v-card>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pass_img: require('@/assets/i/icons/show_pass.svg'),
            type: 'password',
            btnText: 'Show Password'
        }
    },
    computed: {
        showRegistrationPopup() {
            return this.$store.getters.getRegisterPopup
        }
    },
    methods: {
        hideRegistrationPopup () {
            this.$store.dispatch('hideRegistrationPopup')
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
            this.$store.dispatch('showLoginPopup')
        },
        showConfirmPopup () {
            this.$store.dispatch('showConfirmPopup')
        }
    }
}
</script>
