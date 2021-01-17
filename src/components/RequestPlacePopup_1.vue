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

                                <label class="input_wrap">
                                    <v-autocomplete
                                        :label="$vuetify.lang.t('$vuetify.country')"
                                        :items="items"
                                    />
                                </label>

                                <label class="input_wrap">
                                    <v-autocomplete
                                        :label="$vuetify.lang.t('$vuetify.city')"
                                        :items="items"
                                    />
                                </label>
                            </div>

                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.where_to') }}</span>

                                <label class="input_wrap">
                                    <v-autocomplete
                                        :label="$vuetify.lang.t('$vuetify.country')"
                                        :items="items"
                                    />
                                </label>

                                <label class="input_wrap">
                                    <v-autocomplete
                                        :label="$vuetify.lang.t('$vuetify.city')"
                                        :items="items"
                                    />
                                </label>
                            </div>
                        </div>

                        <div class="popup_two_columns__two">
                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.parcel_category') }}</span>

                                <label class="input_wrap">
                                    <v-autocomplete
                                        :label="$vuetify.lang.t('$vuetify.parcel_category')"
                                        :items="items"
                                    />
                                </label>
                            </div>

                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.send_before') }}</span>

                                <label class="input_wrap">
                                    <v-text-field
                                        :label="$vuetify.lang.t('$vuetify.calendar')"
                                    />
                                </label>
                            </div>
                        </div>

                        <div class="popup_two_columns__two">
                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.transfer_method') }}</span>

                                <label class="input_wrap">
                                    <v-autocomplete
                                        :label="$vuetify.lang.t('$vuetify.how')"
                                        :items="items"
                                    />
                                </label>
                            </div>

                            <div>
                                <span class="popup_title">{{ $vuetify.lang.t('$vuetify.transfer_method_to_recipient') }}</span>

                                <label class="input_wrap">
                                    <v-autocomplete
                                        :label="$vuetify.lang.t('$vuetify.how')"
                                        :items="items"
                                    />
                                </label>

                                <label class="input_wrap">
                                    <v-autocomplete
                                        :label="$vuetify.lang.t('$vuetify.where')"
                                        :items="items"
                                        hint="Возможно несколько вариантов"
                                        persistent-hint
                                    />
                                </label>
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
