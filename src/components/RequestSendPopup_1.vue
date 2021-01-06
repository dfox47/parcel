<template id="modal-template">
    <div>
        <transition
            name="fade"
            appear
        >
            <div
                class="popup_overlay"
                v-if="showRequestSendPopup_1"
                @click="this.hideRequestSendPopup_1"
            />
        </transition>

        <transition
            name="fade"
            appear
        >
            <v-card
                v-if="showRequestSendPopup_1"
            >
                <div class="popup">
                    <span
                        class="popup_close_btn"
                        @click="this.hideRequestSendPopup_1"
                    />

                    <v-card-title>
                        {{ $vuetify.lang.t('$vuetify.steps.1_of_3') }}
                    </v-card-title>

                    <form
                        action=""
                        class="popup_two_columns"
                    >
                        <div class="popup_two_columns__wrap">
                            <div>
                                <span>Откуда</span>

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
                                <span>Куда</span>

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

                        <label class="input_wrap">
                            <input
                                :type="type"
                                placeholder="Пароль"
                            >

                            <img
                                class="input_wrap__img"
                                :src="pass_img"
                                @click="showPassword"
                                alt=""
                            >
                        </label>

                        <v-btn
                            block
                            color="primary"
                            @click="this.showRequestSendPopup_2"
                        >
                            {{ $vuetify.lang.t('$vuetify.continue_button') }}
                        </v-btn>
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
        showRequestSendPopup_1() {
            return this.$store.getters.getRequestSendPopup_1
        }
    },
    methods: {
        hideRequestSendPopup_1 () {
            this.$store.dispatch('hideRequestSendPopup_1')
        },
        showRequestSendPopup_2 () {
            this.$store.dispatch('showRequestSendPopup_2')
        }
    }
}
</script>
