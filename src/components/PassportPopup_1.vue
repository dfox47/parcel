<template id="modal-template">
    <div>
        <transition
            name="fade"
            appear
        >
            <v-card
                v-if="showPassportPopup_1"
            >
                <div
                    class="popup_overlay"
                    v-if="showPassportPopup_1"
                    @click="this.hidePassportPopup_1"
                />

                <div class="popup_one_column popup">
                    <span
                        class="popup_close_btn"
                        @click="this.hidePassportPopup_1"
                    />

                    <v-card-title>
                        {{ $vuetify.lang.t('$vuetify.steps.1_of_3') }}
                    </v-card-title>

                    <form
                        action=""
                    >
                        <v-btn
                            small
                            color="secondary"
                            @click="chooseFiles"
                        >
                            {{ btn_text }}
                        </v-btn>

                        <div class="hidden">
                            <v-file-input
                                id="file_input"
                            />
                        </div>

                        <v-card-subtitle>
                            {{ $vuetify.lang.t('$vuetify.passport_upload_text') }}
                        </v-card-subtitle>

                        <div class="popup_two_columns__one">
                            <v-btn
                                block
                                color="secondary"
                                @click="this.showPassportPopup_2"
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
    data: () => ({
        btn_text: "продолжить",
    }),
    computed: {
        showPassportPopup_1() {
            return this.$store.getters.getPassportPopup_1
        }
    },
    methods: {
        hidePassportPopup_1 () {
            this.$store.dispatch('hidePassportPopup_1')
        },
        showPassportPopup_2 () {
            this.$store.dispatch('showPassportPopup_2')
        },
        chooseFiles(event) {
            var file_input = document.querySelector("#file_input")
            file_input.click();
            // var text = document.querySelector(".v-file-input__text").textContent;
            // console.log(text);
            // this.btn_text = text;
        }
    }
}
</script>
