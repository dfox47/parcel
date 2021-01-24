<template id="modal-template">
    <div>
        <transition
            name="fade"
            appear
        >
            <v-card
                v-if="showConfirmPopup"
            >
                <div
                    class="popup_overlay"
                    v-if="showConfirmPopup"
                    @click="this.hideConfirmPopup"
                />

                <div class="popup popup_one_column  popup_confirm">
                    <span
                        class="popup_close_btn"
                        @click="this.hideConfirmPopup"
                    />

                    <form
                        action=""
                        class="popup_one_column__wrap"
                    >
                        <v-card-title>
                            {{ $vuetify.lang.t('$vuetify.confirmation') }}
                        </v-card-title>

                        <v-card-subtitle>
                            {{ $vuetify.lang.t('$vuetify.confirmation_text') }}
                        </v-card-subtitle>

                        <label class="input_confirm">
                            <input
                                maxlength="1"
                                type="text"
                                placeholder=""
                                v-focus
                                @input="focus2"
                                @focus="clearThis($event.target)"
                            ><!--v-focus sets focus automatically-->
                            <input
                                maxlength="1"
                                type="text"
                                placeholder=""
                                ref="inp_2"
                                @input="focus3"
                                @focus="clearThis($event.target)"
                            >
                            <input
                                maxlength="1"
                                type="text"
                                placeholder=""
                                ref="inp_3"
                                @input="focus4"
                                @focus="clearThis($event.target)"
                            >
                            <input
                                maxlength="1"
                                type="text"
                                placeholder=""
                                ref="inp_4"
                                @input="focus5"
                                @focus="clearThis($event.target)"
                            >
                            <input
                                maxlength="1"
                                type="text"
                                placeholder=""
                                ref="inp_5"
                                @focus="clearThis($event.target)"
                            >
                        </label>

                        <v-btn
                            block
                            color="primary"
                            @click="this.hideConfirmPopup"
                        >
                            {{ $vuetify.lang.t('$vuetify.continue_button') }}
                        </v-btn>

                        <div class="popup_bottom">
                            <p>
                                Не получили SMS?

                                <a
                                    href="/"
                                    class="link_dark"
                                    @click="this.hideConfirmPopup"
                                >
                                    Отправить повторно
                                </a>
                            </p>

                            <a
                                href="/"
                                class="link_dark"
                            >
                                Получить SMS на дургой номер
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
        showConfirmPopup () {
            return this.$store.getters.getConfirmPopup
        }
    },
    methods: {
        hideConfirmPopup () {
            this.$store.dispatch('hideConfirmPopup')
        },
        showLoginPopup () {
            this.$store.dispatch('showLoginPopup')
        },
        focus2 () {
            this.$refs.inp_2.focus();
        },
        focus3 () {
            this.$refs.inp_3.focus();
        },
        focus4 () {
            this.$refs.inp_4.focus();
        },
        focus5 () {
            this.$refs.inp_5.focus();
        },
        clearThis (event) {
            event.value = ''
        }
    }
}
</script>
