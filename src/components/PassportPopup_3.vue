<template id="modal-template">
    <div>
        <transition
            name="fade"
            appear
        >
            <div
                class="popup_overlay"
                v-if="showPassportPopup_3"
                @click="this.hidePassportPopup_3"
            />
        </transition>

        <transition
            name="fade"
            appear
        >
            <v-card
                v-if="showPassportPopup_3"
            >
                <div class="popup_two_columns popup">
                    <span
                        class="popup_close_btn"
                        @click="this.hidePassportPopup_3"
                    />

                    <v-card-title>
                        {{ $vuetify.lang.t('$vuetify.steps.3_of_3') }}
                    </v-card-title>

                    <form
                        action=""
                    >
                        <div class="popup_two_columns__block">
                            <span class="popup_title">{{ $vuetify.lang.t('$vuetify.region') }}</span>

                            <div class="input_wrap">
                                <v-text-field
                                    :label="$vuetify.lang.t('$vuetify.dots')"
                                    v-focus
                                />
                            </div>
                        </div>

                        <div class="popup_two_columns__block">
                            <span class="popup_title">{{ $vuetify.lang.t('$vuetify.street') }}</span>

                            <div class="input_wrap">
                                <v-text-field
                                    :label="$vuetify.lang.t('$vuetify.dots')"
                                    v-focus
                                />
                            </div>
                        </div>

                        <div class="popup_two_columns__two">
                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.house') }}</span>

                                <div class="input_wrap">
                                    <v-text-field
                                        :label="$vuetify.lang.t('$vuetify.dots')"
                                        v-focus
                                    />
                                </div>
                            </div>

                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.building') }}</span>

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
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.apartment') }}</span>

                                <div class="input_wrap">
                                    <v-text-field
                                        :label="$vuetify.lang.t('$vuetify.dots')"
                                        v-focus
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="popup_two_columns__one">
                            <v-btn
                                block
                                color="secondary"
                                @click="this.showPassportLoadedPopup"
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
        showPassportPopup_3() {
            return this.$store.getters.getPassportPopup_3
        }
    },
    methods: {
        hidePassportPopup_3 () {
            this.$store.dispatch('hidePassportPopup_3')
        },
        showPassportLoadedPopup () {
            this.$store.dispatch('showPassportLoadedPopup')
        }
    }
}
</script>
