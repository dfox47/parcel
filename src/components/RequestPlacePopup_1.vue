<template id="modal-template">
    <div>
        <transition
            name="fade"
            appear
        >
            <div
                class="popup_overlay"
                v-if="showRequestPlacePopup_1"
                @click="this.hideRequestPlacePopup_1"
            />
        </transition>

        <transition
            name="fade"
            appear
        >
            <v-card
                v-if="showRequestPlacePopup_1"
            >
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
    // data() {},
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
