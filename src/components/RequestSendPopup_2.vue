<template id="modal-template">
    <div>
        <transition
            name="fade"
            appear
        >
            <div
                class="popup_overlay"
                v-if="showRequestSendPopup_2"
                @click="this.hideRequestSendPopup_2"
            />
        </transition>

        <transition
            name="fade"
            appear
        >
            <v-card
                v-if="showRequestSendPopup_2"
            >
                <div class="popup popup_two_columns">
                    <span
                        class="popup_close_btn"
                        @click="this.hideRequestSendPopup_2"
                    />

                    <v-card-title>
                        {{ $vuetify.lang.t('$vuetify.steps.2_of_3') }}
                    </v-card-title>

                    <form
                        action=""
                    >
                        <div class="popup_two_columns__four">
                            <span class="popup_title">{{ $vuetify.lang.t('$vuetify.dimensions') }}</span>

                            <div>
                                <label class="input_wrap">
                                    <v-text-field
                                        label="Номер телефона"
                                        v-focus
                                    />
                                </label>
                            </div>

                            <div>
                                <label class="input_wrap">
                                    <v-text-field
                                        label="Номер телефона"
                                        v-focus
                                    />
                                </label>
                            </div>

                            <div>
                                <label class="input_wrap">
                                    <v-text-field
                                        label="Номер телефона"
                                        v-focus
                                    />
                                </label>
                            </div>

                            <div>
                                <label class="input_wrap">
                                    <v-text-field
                                        label="Номер телефона"
                                        v-focus
                                    />
                                </label>
                            </div>
                        </div>

                        <span class="popup_title">{{ $vuetify.lang.t('$vuetify.dimensions') }}</span>

                        <v-textarea
                            counter="500"
                            rows="4"
                        />

                        <div class="popup_two_columns__one">
                            <v-btn
                                block
                                color="primary"
                                @click="this.showRequestSendPopup_3"
                            >
                                {{ $vuetify.lang.t('$vuetify.continue_button') }}
                            </v-btn>
                        </div>
                    </form>
                </div>
            </v-card>
        </transition>
    </div>
</template>

<script>
export default {
    // data() {},
    computed: {
        showRequestSendPopup_2() {
            return this.$store.getters.getRequestSendPopup_2
        }
    },
    methods: {
        hideRequestSendPopup_2 () {
            this.$store.dispatch('hideRequestSendPopup_2')
        },
        showRequestSendPopup_3 () {
            this.$store.dispatch('showRequestSendPopup_3')
        }
    }
}
</script>
