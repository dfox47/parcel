<template id="modal-template">
    <div>
        <transition
            name="fade"
            appear
        >
            <v-card
                v-if="showRegistrationPopup"
            >
                <div
                    class="popup_overlay"
                    v-if="showRegistrationPopup"
                    @click="this.hideRegistrationPopup"
                />

                <div class="popup popup_one_column  popup_register">
                    <span
                        class="popup_close_btn"
                        @click="this.hideRegistrationPopup"
                    />

                    <form
                        action=""
                        class="popup_one_column__wrap"
                    >
                        <v-card-title>
                            {{ $vuetify.lang.t('$vuetify.register') }}
                        </v-card-title>

                        <label class="input_wrap">
                            <v-text-field
                                label="Номер телефона"
                                v-focus
                            />
                        </label>

                        <label class="input_wrap">
                            <v-text-field
                                :type="type"
                                label="Придумайте пароль"
                            />

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

                        <v-btn
                            block
                            color="primary"
                            @click="this.showConfirmPopup"
                        >
                            {{ $vuetify.lang.t('$vuetify.continue_button') }}
                        </v-btn>

                        <div class="popup_bottom">
                            <p>
                                {{ $vuetify.lang.t('$vuetify.registration.login') }}
                            </p>

                            <a
                                class="link_primary"
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
