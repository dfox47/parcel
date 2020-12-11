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
            <div
                class="popup popup_confirm"
                v-if="showConfirmPopup"
            >
                <div
                    class="popup_close_btn"
                    @click="this.hideConfirmPopup"
                />

                <form
                    action=""
                    class="popup_one_column"
                >
                    <h3>
                        {{ $vuetify.lang.t('$vuetify.confirmation') }}
                    </h3>

                    <div class="popup_top">
                        <p>
                            {{ $vuetify.lang.t('$vuetify.confirmation_text') }}
                        </p>
                    </div>

                    <label class="input_confirm">
                        <input
                            type="text"
                            placeholder=""
                            ref="inp_1"
                        >
                        <input
                            type="text"
                            placeholder=""
                            ref="inp_2"
                        >
                        <input
                            type="text"
                            placeholder=""
                            ref="inp_3"
                        >
                        <input
                            type="text"
                            placeholder=""
                            ref="inp_4"
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
        </transition>
    </div>
</template>

<script>
import store from "../store";
export default {
    data() {
        return {
            pass_img: require('@/assets/i/icons/show_pass.svg'),
            // showConfirmPopup: store.getters.ConfirmPopup,
            showConfirmPopup: true,
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
        }
    },
    //here we listen for a new value,if it changes,we change our value
    watch: {
        "$store.state.ConfirmPopup"(nv) {
            this.showConfirmPopup = nv;
            if ( this.showConfirmPopup ) {
                this.$refs.inp_1.focus();
            }
        }
    }
}
</script>
