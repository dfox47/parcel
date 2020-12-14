<template id="modal-template">
    <div>
        <transition
            name="fade"
            appear
        >
            <div
                class="popup_overlay"
                v-if="showConfirmPopup"
                @click="this.hideConfirmPopup"
            />
        </transition>

        <transition

            name="fade"
            appear
        >
            <v-card
                v-if="showConfirmPopup"
            >
                <div class="popup popup_confirm">
                    <div
                        class="popup_close_btn"
                        @click="this.hideConfirmPopup"
                    />

                    <form
                        action=""
                        class="popup_one_column"
                    >
                        <v-card-title>
                            {{ $vuetify.lang.t('$vuetify.confirmation') }}
                        </v-card-title>

                        <v-card-subtitle>
                            {{ $vuetify.lang.t('$vuetify.confirmation_text') }}
                        </v-card-subtitle>

                        <label class="input_confirm">
                            <input
                                type="text"
                                placeholder=""
                                v-focus
                                @input="focus2"
                            ><!--v-focus sets focus automatically-->
                            <input
                                type="text"
                                placeholder=""
                                ref="inp_2"
                                @input="focus3"
                            >
                            <input
                                type="text"
                                placeholder=""
                                ref="inp_3"
                                @input="focus4"
                            >
                            <input
                                type="text"
                                placeholder=""
                                ref="inp_4"
                                @input="focus5"
                            >
                            <input
                                type="text"
                                placeholder=""
                                ref="inp_5"
                            >
                        </label>

                        <span
                            class="btn btn_blue btn_large"
                            @click="this.hideConfirmPopup"
                            ref="btn"
                        >
                            {{ $vuetify.lang.t('$vuetify.continue_button') }}
                        </span>

                        <div class="popup_bottom">
                            <p>
                                Не получили SMS?

                                <a
                                    href=""
                                    class="link_dark"
                                    @click="this.hideConfirmPopup"
                                >
                                    Отправить повторно
                                </a>
                            </p>

                            <a
                                href=""
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
import store from "../store";
export default {
    data() {
        return {
            pass_img: require('@/assets/i/icons/show_pass.svg'),
            showConfirmPopup: store.getters.ConfirmPopup,
            // showConfirmPopup: true,
            type: 'password',
            btnText: 'Show Password'
        }
    },
    methods: {
        hideConfirmPopup () {
            store.commit('hideConfirmPopup');
        },
        showLoginPopup () {
            console.log('worked')
            store.commit('showLoginPopup');
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
        focusBtn () {
            this.$refs.btn.focus();
        }
    },
    //here we listen for a new value,if it changes,we change our value
    watch: {
        "$store.state.ConfirmPopup"(nv) {
            this.showConfirmPopup = nv;
        },

    }
}
</script>
