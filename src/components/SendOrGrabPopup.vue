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
                <div class="popup popup_send_or_grab">
                    <span
                        class="popup_close_btn"
                        @click="this.hideSendOrGrub"
                    />

                    <v-card-title>
                        {{ $vuetify.lang.t('$vuetify.add_application') }}
                    </v-card-title>

                    <div class="send_or_grab__wrap">
                        <span class="send_or_grab__outer">
                            <span
                                class="send_or_grab__inner"
                            >
                                <img
                                    src="../assets/i/send.svg"
                                    alt="send"
                                >
                                <span>{{ $vuetify.lang.t('$vuetify.menu_button_send') }}</span>
                            </span>
                        </span>

                        <span class="send_or_grab__outer">
                            <span class="send_or_grab__inner">
                                <img
                                    src="../assets/i/grab.svg"
                                    alt="grab"
                                >
                                <span>{{ $vuetify.lang.t('$vuetify.menu_button_take') }}</span>
                            </span>
                        </span>
                    </div>
                </div>
            </v-card>
        </transition>
    </div>
</template>

<script>
export default {
    computed: {
        showSendOrGrub () {
            return this.$store.getters.getSendOrGrub
        }
    },
    methods: {
        hideSendOrGrub () {
            this.$store.dispatch('hideSendOrGrubPopup')
        }
    }
}
</script>
