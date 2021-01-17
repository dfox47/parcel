<template id="modal-template">
    <div>
        <transition
            name="fade"
            appear
        >
            <v-card
                v-if="showRequestPlacePopup_2"
            >
                <div
                    class="popup_overlay"
                    v-if="showRequestPlacePopup_2"
                    @click="this.hideRequestPlacePopup_2"
                />

                <div class="popup_two_columns popup">
                    <span
                        class="popup_close_btn"
                        @click="this.hideRequestPlacePopup_2"
                    />

                    <v-card-title>
                        {{ $vuetify.lang.t('$vuetify.steps.2_of_2') }}
                    </v-card-title>

                    <form
                        action=""
                    >
                        <div class="popup_two_columns__four">
                            <span class="popup_title">{{ $vuetify.lang.t('$vuetify.dimensions') }}</span>

                            <div>
                                <label class="input_wrap">
                                    <v-text-field
                                        :label="$vuetify.lang.t('$vuetify.weight')"
                                        v-focus
                                    />
                                </label>
                            </div>

                            <div>
                                <label class="input_wrap">
                                    <v-text-field
                                        :label="$vuetify.lang.t('$vuetify.height')"
                                    />
                                </label>
                            </div>

                            <div>
                                <label class="input_wrap">
                                    <v-text-field
                                        :label="$vuetify.lang.t('$vuetify.depth')"
                                    />
                                </label>
                            </div>

                            <div>
                                <label class="input_wrap">
                                    <v-text-field
                                        :label="$vuetify.lang.t('$vuetify.width')"
                                    />
                                </label>
                            </div>
                        </div>

                        <div class="popup_two_columns__two">
                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.pay_a_deposit_for_safety') }}</span>

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

                                <span class="popup_description">
                                    При использовании депозита курьер должен будет перевести указанную сумму на счёт сервиса для обеспечения безопасности доставки. После доставки он получит сумму депозита обратно в полном объёме. Залог за сохранность увеличивает стоимость доставки и уменьшает количество курьеров.
                                </span>
                            </div>

                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.take_consolidated_cargo') }}</span>

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
                                        label="Сумма"
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
                                color="secondary"
                                @click="this.showRequestAcceptedPopup"
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
        currency: ['rub', 'eur'],
    }),
    computed: {
        showRequestPlacePopup_2() {
            return this.$store.getters.getRequestPlacePopup_2
        }
    },
    methods: {
        hideRequestPlacePopup_2 () {
            this.$store.dispatch('hideRequestPlacePopup_2')
        },
        showRequestAcceptedPopup () {
            this.$store.dispatch('showRequestAcceptedPopup')
        }
    }
}
</script>
