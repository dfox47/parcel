<template id="modal-template">
    <div>
        <transition
            name="fade"
            appear
        >
            <v-card
                v-if="showRequestSendPopup_2"
            >
                <div
                    class="popup_overlay"
                    v-if="showRequestSendPopup_2"
                    @click="this.hideRequestSendPopup_2"
                />

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
                                <div class="input_wrap">
                                    <v-text-field
                                        :label="$vuetify.lang.t('$vuetify.weight')"
                                        v-focus
                                    />
                                </div>
                            </div>

                            <div>
                                <div class="input_wrap">
                                    <v-text-field
                                        :label="$vuetify.lang.t('$vuetify.height')"
                                    />
                                </div>
                            </div>

                            <div>
                                <div class="input_wrap">
                                    <v-text-field
                                        :label="$vuetify.lang.t('$vuetify.depth')"
                                    />
                                </div>
                            </div>

                            <div>
                                <div class="input_wrap">
                                    <v-text-field
                                        :label="$vuetify.lang.t('$vuetify.width')"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="popup_two_columns__block">
                            <span class="popup_title">{{ $vuetify.lang.t('$vuetify.parcel_description') }}</span>

                            <v-textarea
                                counter="500"
                                label="Enecab ius, ommodis ut odition sequod quat quam que sinusam quistet imus delit ex est landisc iiscilibus reic tore nonestibusam sunt verchicil eum ea simillenis eos dolor ma con reris minciati bere vellau. Enecab ius, ommodis ut odition sequod quat quam que sinusam quistet imus delit ex est landisc iiscilibus reic tore nonestibusam sunt verchicil euris minciati bere vellau. Enecab ius, ommodis ut odition sequod quat quam que sinusam quistet imus delit ex est landisc iiscilibus reic tore nonestibusam sunt verchicil eum ea simillenis eos dolor ma con reris minciati bere vellau. Enecab ius, ommodis ut odition sequod quat quam que sinusam quistet imus delit ex est landisc iiscilibus reic tore nonestibusam sunt verchicil eum ea simillenis eos dolor ma con reris minciati bere vellau."
                                rows="7"
                            />
                        </div>

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
