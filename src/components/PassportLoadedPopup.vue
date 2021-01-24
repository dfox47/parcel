<template id="modal-template">
    <div>
        <transition
            name="fade"
            appear
        >
            <div
                class="popup_overlay"
                v-if="showPassportLoadedPopup"
                @click="this.hidePassportLoadedPopup"
            />
        </transition>

        <transition
            name="fade"
            appear
        >
            <v-card
                v-if="showPassportLoadedPopup"
            >
                <div class="popup">
                    <span
                        class="popup_close_btn"
                        @click="this.hidePassportLoadedPopup"
                    />

                    <div class="popup_one_column">
                        <img
                            src="../assets/i/done.svg"
                            alt=""
                        >

                        <v-card-title>
                            Спасибо!
                        </v-card-title>

                        <span>
                            Ваши данные приняты. Они будут проверены модератором в ближайшее время
                        </span>
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
        showPassportLoadedPopup() {
            return this.$store.getters.getPassportLoadedPopup
        }
    },
    methods: {
        hidePassportLoadedPopup () {
            this.$store.dispatch('hidePassportLoadedPopup')
        }
    }
}
</script>
