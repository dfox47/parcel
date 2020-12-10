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
                    <h2>
                        {{ $vuetify.lang.t('$vuetify.confirmation') }}
                    </h2>

                    <label class="input_confirm">
                        <input
                            type="text"
                            placeholder=""
                        >
                        <input
                            type="text"
                            placeholder=""
                        >
                        <input
                            type="text"
                            placeholder=""
                        >
                        <input
                            type="text"
                            placeholder=""
                        >
                        <input
                            type="text"
                            placeholder=""
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
                            Не получили смс??
                        </p>

                        <a
                            class="link_blue"
                            @click="this.hideConfirmPopup"
                        >
                            Отправить повторно
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
    watch: {
        "$store.state.ConfirmPopup"(nv) {
            this.showConfirmPopup = nv;
        }
    }
}
</script>
