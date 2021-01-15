<template id="modal-template">
    <div>
        <transition
            name="fade"
            appear
        >
            <v-card
                v-if="showRequestSendPopup_3"
            >
                <div
                    class="popup_overlay"
                    v-if="showRequestSendPopup_3"
                    @click="this.hideRequestSendPopup_3"
                />

                <div class="popup popup_two_columns">
                    <span
                        class="popup_close_btn"
                        @click="this.hideRequestSendPopup_3"
                    />

                    <v-card-title>
                        {{ $vuetify.lang.t('$vuetify.steps.3_of_3') }}
                    </v-card-title>

                    <form
                        action=""
                    >
                        <div class="popup_two_columns__two">
                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.dimensions') }}</span>

                                <v-radio-group
                                    v-model="row"
                                    row
                                >
                                    <v-radio
                                        label="Нет"
                                        value="radio-1"
                                    />

                                    <v-radio
                                        label="Да"
                                        value="radio-2"
                                    />
                                </v-radio-group>

                                <div class="input_n_select_wrap">
                                    <v-text-field
                                        :label="$vuetify.lang.t('$vuetify.sum')"
                                        v-focus
                                    />

                                    <v-select
                                        class="take_destinations__select"
                                        :items="currency"
                                        :label="currency[0]"
                                    />
                                </div>

                                <span class="popup_description">
                                    При использовании депозита курьер должен будет перевести указанную сумму на счёт сервиса для обеспечения безопасности доставки. После доставки он получит сумму депозита обратно в полном объёме. Залог за сохранность увеличивает стоимость доставки и уменьшает количество курьеров.
                                </span>
                            </div>

                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.dimensions') }}</span>

                                <v-radio-group
                                    v-model="row"
                                    row
                                >
                                    <v-radio
                                        label="Точная"
                                        value="radio-1"
                                    />

                                    <v-radio
                                        label="Договорная"
                                        value="radio-2"
                                    />
                                </v-radio-group>

                                <div class="input_n_select_wrap">
                                    <v-text-field
                                        :label="$vuetify.lang.t('$vuetify.sum')"
                                        v-focus
                                    />

                                    <v-select
                                        class="take_destinations__select"
                                        :items="currency"
                                        :label="currency[0]"
                                    />
                                </div>

                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.dimensions') }}</span>

                                <div class="input_n_select_wrap">
                                    <v-text-field
                                        :label="$vuetify.lang.t('$vuetify.sum')"
                                        v-focus
                                    />

                                    <v-select
                                        class="take_destinations__select"
                                        :items="currency"
                                        :label="currency[0]"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="popup_two_columns__one">
                            <v-btn
                                block
                                color="primary"
                                @click="this.showRequestAcceptedPopup"
                            >
                                {{ $vuetify.lang.t('$vuetify.publish_request') }}
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
        currency: ['rub', 'eur'],
    }),
    computed: {
        showRequestSendPopup_3() {
            return this.$store.getters.getRequestSendPopup_3
        }
    },
    methods: {
        hideRequestSendPopup_3 () {
            this.$store.dispatch('hideRequestSendPopup_3')
        },
        showRequestAcceptedPopup () {
            this.$store.dispatch('showRequestAcceptedPopup')
        }
    }
}
</script>
