<template id="modal-template">
    <div>
        <div
            class="popup_overlay__transparent"
            v-if="showLangAndCurPopup"
            @click="this.hideLangAndCurPopup"
        />
        <transition
            :name="animation"
            appear
        >
            <div
                class="popup_lang_n_cur"
                v-if="showLangAndCurPopup"
            >
                <div class="popup_lang_n_cur__wrap">
                    <div>
                        <v-checkbox
                            v-model="checkbox"
                            class="v-checkbox_v2"
                            label="Русский"
                        />
                        <v-checkbox
                            v-model="checkbox"
                            class="v-checkbox_v2"
                            label="English"
                        />
                    </div>
                    <div>
                        <v-checkbox
                            v-model="checkbox"
                            class="v-checkbox_v2"
                            label="Рубль, ₽"
                        />
                        <v-checkbox
                            v-model="checkbox"
                            class="v-checkbox_v2"
                            label="Доллар, $"
                        />
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            animation: 'fade',
            lang: this.$vuetify.lang.current,
            currency: 'rub',
            windowWidth: window.innerWidth
        }
    },
    mounted() {
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth;
        })
    },
    computed: {
        showLangAndCurPopup() {
            return this.$store.getters.getLangAndCurPopup
        }
    },
    methods: {
        hideLangAndCurPopup () {
            this.$store.dispatch('hideLangAndCurPopup')
        }
    },
    watch: {
        windowWidth(newWidth) {
            if (980 > newWidth) {
                this.animation = 'fade  ';
            }
            else if (980 < newWidth) {
                this.animation = 'fade';
            }
        }
    }
}
</script>
