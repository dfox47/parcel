<template id="modal-template">
    <div>
        <transition
            name="fade"
            appear
        >
            <v-card
                v-if="showRequestPlacePopup_1"
            >
                <div
                    class="popup_overlay"
                    v-if="showRequestPlacePopup_1"
                    @click="this.hideRequestPlacePopup_1"
                />

                <div class="popup_two_columns popup">
                    <span
                        class="popup_close_btn"
                        @click="this.hideRequestPlacePopup_1"
                    />

                    <v-card-title>
                        {{ $vuetify.lang.t('$vuetify.steps.1_of_2') }}
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
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.parcel_category') }}</span>

                                <div class="input_wrap">
                                    <v-autocomplete
                                        :label="$vuetify.lang.t('$vuetify.parcel_category')"
                                        :items="items"
                                    />
                                </div>
                            </div>

                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.send_before') }}</span>

                                <div class="input_wrap">
                                    <v-text-field
                                        :label="$vuetify.lang.t('$vuetify.calendar')"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="popup_two_columns__two">
                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.transfer_method') }}</span>

                                <div class="input_wrap">
                                    <v-autocomplete
                                        :label="$vuetify.lang.t('$vuetify.how')"
                                        :items="items"
                                    />
                                </div>
                            </div>

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
                                        hint="Возможно несколько вариантов"
                                        persistent-hint
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="popup_two_columns__one">
                            <v-btn
                                block
                                color="secondary"
                                @click="this.showRequestPlacePopup_2"
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
    data() {
        return {
            items: ['option 1', 'option 2', 'option 3', 'option 4']
        }
    },
    computed: {
        showRequestPlacePopup_1() {
            return this.$store.getters.getRequestPlacePopup_1
        }
    },
    methods: {
        hideRequestPlacePopup_1 () {
            this.$store.dispatch('hideRequestPlacePopup_1')
        },
        showRequestPlacePopup_2 () {
            this.$store.dispatch('showRequestPlacePopup_2')
        }
    }
}
</script>
