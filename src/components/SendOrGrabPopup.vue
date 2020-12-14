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

                    <v-card-title>
                        {{ $vuetify.lang.t('$vuetify.add_application') }}
                    </v-card-title>

                    <div class="send_or_grab">
                        <div @click="this.showSendOrGrubPopup">
                            <span
                                class="send_or_grab__inner"
                                @click="this.showSendOrGrubPopup"
                            >
                                <img
                                    src="../assets/i/send.svg"
                                    alt="send"
                                >
                                <span>{{ $vuetify.lang.t('$vuetify.menu_button_send') }}</span>
                            </span>
                        </div>

                        <div>
                            <span class="send_or_grab__inner">
                                <img
                                    src="../assets/i/grab.svg"
                                    alt="grab"
                                >
                                <span>{{ $vuetify.lang.t('$vuetify.menu_button_take') }}</span>
                            </span>
                        </div>
                    </div>
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
            showSendOrGrub: store.getters.SendOrGrubPopup,
            // showSendOrGrub: true,
            type: 'password',
            btnText: 'Show Password'
        }
    },
    methods: {
        hideSendOrGrub () {
            store.commit('hideSendOrGrubPopup');
        }
    },
    //here we listen for a new value,if it changes,we change our value
    watch: {
        "$store.state.SendOrGrubPopup"(nv) {
            this.showSendOrGrub = nv;
        },
    }
}
</script>
