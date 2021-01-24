<template id="modal-template">
    <div>
        <transition
            name="fade"
            appear
        >
            <v-card
                v-if="showRequestAcceptedPopup"
            >
                <div
                    class="popup_overlay"
                    v-if="showRequestAcceptedPopup"
                    @click="this.hideRequestAcceptedPopup"
                />

                <div class="popup popup_one_column">
                    <span
                        class="popup_close_btn"
                        @click="this.hideRequestAcceptedPopup"
                    />

                    <img
                        src="../assets/i/done.svg"
                        alt=""
                    >

                    <v-card-title>
                        Спасибо! <br>
                        Ваша заявка принята.
                    </v-card-title>

                    <div class="popup_bottom">
                        <router-link
                            to="/"
                        >
                            Посмотреть заявку
                        </router-link>
                    </div>
                </div>
            </v-card>
        </transition>
    </div>
</template>

<script>
export default {
    // data() {},
    computed: {
        showRequestAcceptedPopup() {
            return this.$store.getters.getRequestAcceptedPopup
        }
    },
    methods: {
        hideRequestAcceptedPopup () {
            this.$store.dispatch('hideRequestAcceptedPopup')
        }
    }
}
</script>
