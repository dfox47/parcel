<template id="modal-template">
    <div>
        <transition
            name="fade"
            appear
        >
            <div
                class="popup_overlay"
                v-if="showRequestAcceptedPopup"
                @click="this.hideRequestAcceptedPopup"
            />
        </transition>

        <transition
            name="fade"
            appear
        >
            <v-card
                v-if="showRequestAcceptedPopup"
            >
                <div class="popup">
                    <span
                        class="popup_close_btn"
                        @click="this.hideRequestAcceptedPopup"
                    />

                    <div class="popup_one_column">
                        <img
                            src="../assets/i/done.svg"
                            @click="showPassword"
                            alt=""
                        >

                        <v-card-title>
                            Спасибо!
                        </v-card-title>

                        <span>
                            Ваша заявка принята.
                        </span>

                        <div class="popup_bottom">
                            <router-link
                                to="/"
                            >
                                Посмотреть заявку
                            </router-link>
                        </div>
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
