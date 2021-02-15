<template id="modal-template">
    <div>
        <transition
            name="fade"
            appear
        >
            <v-card
                v-if="showRequestSendPopup_1"
            >
                <div
                    class="popup_overlay"
                    v-if="showRequestSendPopup_1"
                    @click="this.hideRequestSendPopup_1"
                />

                <div class="popup_two_columns popup">
                    <span
                        class="popup_close_btn"
                        @click="this.hideRequestSendPopup_1"
                    />

                    <v-card-title>
                        {{ $vuetify.lang.t('$vuetify.steps.1_of_3') }}
                    </v-card-title>

                    <form
                        action=""
                    >
                        <div class="popup_two_columns__two">
                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.from') }}</span>

                                <div class="input_wrap">
                                    <v-autocomplete
                                        :label="$vuetify.lang.t('$vuetify.country')"
                                        :items="items"
                                    />
                                </div>

                                <div class="input_wrap">
                                    <v-autocomplete
                                        :label="$vuetify.lang.t('$vuetify.city')"
                                        :items="items"
                                    />
                                </div>
                            </div>

                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.where_to') }}</span>

                                <div class="input_wrap">
                                    <v-autocomplete
                                        :label="$vuetify.lang.t('$vuetify.country')"
                                        :items="items"
                                    />
                                </div>

                                <div class="input_wrap">
                                    <v-autocomplete
                                        :label="$vuetify.lang.t('$vuetify.city')"
                                        :items="items"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="popup_two_columns__two">
                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.transfer_method_to_recipient') }}</span>

                                <div class="input_wrap">
                                    <v-autocomplete
                                        :label="$vuetify.lang.t('$vuetify.how')"
                                        :items="items"
                                    />
                                </div>

                                <div class="input_wrap">
                                    <v-autocomplete
                                        :label="$vuetify.lang.t('$vuetify.where')"
                                        :items="items"
                                    />
                                </div>
                            </div>

                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.recipient_data') }}</span>

                                <div class="input_wrap">
                                    <v-autocomplete
                                        :label="$vuetify.lang.t('$vuetify.phone_number')"
                                        :items="items"
                                    />
                                </div>

                                <div class="input_wrap">
                                    <v-autocomplete
                                        :label="$vuetify.lang.t('$vuetify.names')"
                                        :items="items"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="popup_two_columns__two">
                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.product_category') }}</span>

                                <div class="input_wrap">
                                    <v-autocomplete
                                        :label="$vuetify.lang.t('$vuetify.choose_category')"
                                        :items="items"
                                    />
                                </div>
                            </div>

                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.send_before') }}</span>

                                <div class="input_wrap">
                                    <v-autocomplete
                                        :label="$vuetify.lang.t('$vuetify.calendar')"
                                        :items="items"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="popup_two_columns__one">
                            <v-btn
                                block
                                color="secondary"
                                @click="this.showRequestSendPopup_2"
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
    data: () => ({
        items: ['Нижний новгород', 'Bar', 'Fizz', 'Buzz', 'sadhfkas', 'text', 'ne text'],
    }),
    computed: {
        showRequestSendPopup_1() {
            return this.$store.getters.getRequestSendPopup_1
        }
    },
    methods: {
        hideRequestSendPopup_1 () {
            this.$store.dispatch('hideRequestSendPopup_1')
        },
        showRequestSendPopup_2 () {
            this.$store.dispatch('showRequestSendPopup_2')
        }
    }
}
</script>
