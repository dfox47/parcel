<template id="modal-template">
    <div>
        <transition
            name="fade"
            appear
        >
            <div
                class="popup_overlay"
                v-if="showRequestSendPopup_2"
                @click="this.hideRequestSendPopup_2"
            />
        </transition>

        <transition
            name="fade"
            appear
        >
            <v-card
                v-if="showRequestSendPopup_2"
            >
                <div class="popup">
                    <span
                        class="popup_close_btn"
                        @click="this.hideRequestSendPopup_2"
                    />

                    <v-card-title>
                        {{ $vuetify.lang.t('$vuetify.steps.2_of_3') }}
                    </v-card-title>

                    <form
                        action=""
                        class="popup_two_columns"
                    >
                        <label class="input_wrap">
                            <v-text-field
                                label="Номер телефона"
                                v-focus
                            />
                        </label>

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
                            @click="this.showRequestSendPopup_3"
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
