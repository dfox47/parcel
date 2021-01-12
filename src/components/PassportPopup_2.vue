<template id="modal-template">
    <div>
        <transition
            name="fade"
            appear
        >
            <div
                class="popup_overlay"
                v-if="showPassportPopup_2"
                @click="this.hidePassportPopup_2"
            />
        </transition>

        <transition
            name="fade"
            appear
        >
            <v-card
                v-if="showPassportPopup_2"
            >
                <div class="popup_two_columns popup">
                    <span
                        class="popup_close_btn"
                        @click="this.hidePassportPopup_2"
                    />

                    <v-card-title>
                        {{ $vuetify.lang.t('$vuetify.steps.2_of_3') }}
                    </v-card-title>

                    <form
                        action=""
                    >
                        <div class="popup_two_columns__two">
                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.number') }}</span>

                                <label class="input_wrap">
                                    <v-text-field
                                        label="Номер телефона"
                                        v-focus
                                    />
                                </label>
                            </div>

                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.series') }}</span>

                                <label class="input_wrap">
                                    <v-text-field
                                        label="Номер телефона"
                                        v-focus
                                    />
                                </label>
                            </div>
                        </div>

                        <div class="popup_two_columns__block">
                            <span class="popup_title">{{ $vuetify.lang.t('$vuetify.issuing_authority') }}</span>

                            <label class="input_wrap">
                                <v-text-field
                                    label="Номер телефона"
                                    v-focus
                                />
                            </label>
                        </div>

                        <div class="popup_two_columns__two">
                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.date_of_issue') }}</span>

                                <label class="input_wrap">
                                    <v-text-field
                                        label="Номер телефона"
                                        v-focus
                                    />
                                </label>
                            </div>

                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.date_of_expiration') }}</span>

                                <label class="input_wrap">
                                    <v-text-field
                                        label="Номер телефона"
                                        v-focus
                                    />
                                </label>
                            </div>
                        </div>

                        <div class="popup_two_columns__two">
                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.surname') }}</span>

                                <label class="input_wrap">
                                    <v-text-field
                                        label="Номер телефона"
                                        v-focus
                                    />
                                </label>
                            </div>

                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.name') }}</span>

                                <label class="input_wrap">
                                    <v-text-field
                                        label="Номер телефона"
                                        v-focus
                                    />
                                </label>
                            </div>
                        </div>

                        <div class="popup_two_columns__two">
                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.gender') }}</span>

                                <label class="input_wrap">
                                    <v-text-field
                                        label="Номер телефона"
                                        v-focus
                                    />
                                </label>
                            </div>

                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.date_of_birth') }}</span>

                                <label class="input_wrap">
                                    <v-text-field
                                        label="Номер телефона"
                                        v-focus
                                    />
                                </label>
                            </div>
                        </div>

                        <div class="popup_two_columns__block">
                            <span class="popup_title">{{ $vuetify.lang.t('$vuetify.place_of_birth') }}</span>

                            <label class="input_wrap">
                                <v-text-field
                                    label="Номер телефона"
                                    v-focus
                                />
                            </label>
                        </div>

                        <div class="popup_two_columns__two">
                            <div>
                                <v-btn
                                    block
                                    color="secondary"
                                    @click="this.showPassportPopup_3"
                                >
                                    {{ $vuetify.lang.t('$vuetify.edit') }}
                                </v-btn>
                            </div>

                            <div>
                                <v-btn
                                    block
                                    color="secondary"
                                    @click="this.showPassportPopup_3"
                                >
                                    {{ $vuetify.lang.t('$vuetify.continue_button') }}
                                </v-btn>
                            </div>
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
        showPassportPopup_2() {
            return this.$store.getters.getPassportPopup_2
        }
    },
    methods: {
        hidePassportPopup_2 () {
            this.$store.dispatch('hidePassportPopup_2')
        },
        showPassportPopup_3 () {
            this.$store.dispatch('showPassportPopup_3')
        }
    }
}
</script>
