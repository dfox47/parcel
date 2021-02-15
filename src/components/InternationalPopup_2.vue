<template id="modal-template">
    <div>
        <transition
            name="fade"
            appear
        >
            <v-card
                v-if="showInternationalPopup_2"
            >
                <div
                    class="popup_overlay"
                    v-if="showInternationalPopup_2"
                    @click="this.hideInternationalPopup_2"
                />

                <div class="popup_two_columns popup">
                    <span
                        class="popup_close_btn"
                        @click="this.hideInternationalPopup_2"
                    />

                    <v-card-title>
                        {{ $vuetify.lang.t('$vuetify.steps.2_of_2') }}
                    </v-card-title>

                    <v-card-subtitle>
                        {{ $vuetify.lang.t('$vuetify.data_check') }}
                    </v-card-subtitle>

                    <form
                        action=""
                    >
                        <div class="popup_two_columns__three">
                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.country_code') }}</span>

                                <div class="input_wrap">
                                    <v-text-field
                                        label="RUS"
                                        v-focus
                                    />
                                </div>
                            </div>

                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.number') }}</span>

                                <div class="input_wrap">
                                    <v-text-field
                                        :label="$vuetify.lang.t('$vuetify.dots')"
                                        v-focus
                                    />
                                </div>
                            </div>

                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.series') }}</span>

                                <div class="input_wrap">
                                    <v-text-field
                                        :label="$vuetify.lang.t('$vuetify.dots')"
                                        v-focus
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="popup_two_columns__block">
                            <span class="popup_title">{{ $vuetify.lang.t('$vuetify.issuing_authority') }}</span>

                            <div class="input_wrap">
                                <v-text-field
                                    :label="$vuetify.lang.t('$vuetify.dots')"
                                    v-focus
                                />
                            </div>
                        </div>

                        <div class="popup_two_columns__two">
                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.date_of_issue') }}</span>

                                <div class="input_wrap">
                                    <v-text-field
                                        :label="$vuetify.lang.t('$vuetify.calendar')"
                                        v-focus
                                    />
                                </div>
                            </div>

                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.date_of_expiration') }}</span>

                                <div class="input_wrap">
                                    <v-text-field
                                        :label="$vuetify.lang.t('$vuetify.calendar')"
                                        v-focus
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="popup_two_columns__two">
                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.surname') }}</span>

                                <div class="input_wrap">
                                    <v-text-field
                                        :label="$vuetify.lang.t('$vuetify.dots')"
                                        v-focus
                                    />
                                </div>
                            </div>

                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.name') }}</span>

                                <div class="input_wrap">
                                    <v-text-field
                                        :label="$vuetify.lang.t('$vuetify.dots')"
                                        v-focus
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="popup_two_columns__two">
                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.gender') }}</span>

                                <div class="input_wrap">
                                    <v-text-field
                                        :label="$vuetify.lang.t('$vuetify.dots')"
                                        v-focus
                                    />
                                </div>
                            </div>

                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.date_of_birth') }}</span>

                                <div class="input_wrap">
                                    <v-text-field
                                        :label="$vuetify.lang.t('$vuetify.calendar')"
                                        v-focus
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="popup_two_columns__block">
                            <span class="popup_title">{{ $vuetify.lang.t('$vuetify.place_of_birth') }}</span>

                            <div class="input_wrap">
                                <v-text-field
                                    :label="$vuetify.lang.t('$vuetify.dots')"
                                    v-focus
                                />
                            </div>
                        </div>

                        <div class="popup_two_columns__two">
                            <div>
                                <v-btn
                                    block
                                    color="secondary"
                                    @click="this.showPassportLoadedPopup"
                                >
                                    {{ $vuetify.lang.t('$vuetify.edit') }}
                                </v-btn>
                            </div>

                            <div>
                                <v-btn
                                    block
                                    color="secondary"
                                    @click="this.showPassportLoadedPopup"
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
        showInternationalPopup_2() {
            return this.$store.getters.getInternationalPopup_2
        }
    },
    methods: {
        hideInternationalPopup_2 () {
            this.$store.dispatch('hideInternationalPopup_2')
        },
        showPassportLoadedPopup () {
            this.$store.dispatch('showPassportLoadedPopup')
        }
    }
}
</script>
