<template id="modal-template">
    <div>
        <transition
            name="fade"
            appear
        >
            <div
                class="popup_overlay"
                v-if="showSendOrGrub"
                @click="this.hideSendOrGrub"
            />
        </transition>

        <transition

            name="fade"
            appear
        >
            <v-card
                v-if="showSendOrGrub"
            >
                <div class="popup popup_confirm">
                    <div
                        class="popup_close_btn"
                        @click="this.hideSendOrGrub"
                    />

                    <form
                        action=""
                        class="popup_one_column"
                    >
                        <h3>
                            {{ $vuetify.lang.t('$vuetify.add_application') }}
                        </h3>



                        <span
                            class="btn btn_blue btn_large"
                            @click="this.hideSendOrGrub"
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
                                    @click="this.hideSendOrGrub"
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
            // showSendOrGrub: store.getters.SendOrGrub,
            showSendOrGrub: true,
            type: 'password',
            btnText: 'Show Password'
        }
    },
    methods: {
        hideSendOrGrub () {
            store.commit('hideSendOrGrub');
        },
        showLoginPopup () {
            console.log('worked')
            store.commit('showLoginPopup');
        }
    },
    //here we listen for a new value,if it changes,we change our value
    watch: {
        "$store.state.SendOrGrub"(nv) {
            this.showSendOrGrub = nv;
        },
    }
}
</script>
