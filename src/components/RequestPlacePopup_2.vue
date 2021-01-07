<template id="modal-template">
    <div>
        <transition
            name="fade"
            appear
        >
            <div
                class="popup_overlay"
                v-if="showRequestPlacePopup_2"
                @click="this.hideRequestPlacePopup_2"
            />
        </transition>

        <transition
            name="fade"
            appear
        >
            <v-card
                v-if="showRequestPlacePopup_2"
            >
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
                        <div class="popup_two_columns__two">
                            <div>
                                <span class="popup_title">Откуда</span>

                                <label class="input_wrap">
                                    <v-text-field
                                        label="Номер телефона"
                                        v-focus
                                    />
                                </label>

                                <label class="input_wrap">
                                    <v-text-field
                                        label="Номер телефона"
                                        v-focus
                                    />
                                </label>
                            </div>

                            <div>
                                <span class="popup_title">Куда</span>

                                <label class="input_wrap">
                                    <v-text-field
                                        label="Номер телефона"
                                        v-focus
                                    />
                                </label>

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
                                <span class="popup_title">Откуда</span>

                                <label class="input_wrap">
                                    <v-text-field
                                        label="Номер телефона"
                                        v-focus
                                    />
                                </label>

                                <label class="input_wrap">
                                    <v-text-field
                                        label="Номер телефона"
                                        v-focus
                                    />
                                </label>
                            </div>

                            <div>
                                <span class="popup_title">Куда</span>

                                <label class="input_wrap">
                                    <v-text-field
                                        label="Номер телефона"
                                        v-focus
                                    />
                                </label>

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
                                <span class="popup_title">Откуда</span>

                                <label class="input_wrap">
                                    <v-text-field
                                        label="Номер телефона"
                                        v-focus
                                    />
                                </label>
                            </div>

                            <div>
                                <span class="popup_title">Куда</span>

                                <label class="input_wrap">
                                    <v-text-field
                                        label="Номер телефона"
                                        v-focus
                                    />
                                </label>
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
    // data() {},
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
