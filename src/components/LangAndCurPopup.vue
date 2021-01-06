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
                            v-model="checkRu"
                            class="v-checkbox_v2"
                            label="Русский"
                        />
                        <v-checkbox
                            v-model="checkEn"
                            class="v-checkbox_v2"
                            label="English"
                        />
                    </div>
                    <div>
                        <v-checkbox
                            v-model="checkRub"
                            class="v-checkbox_v2"
                            label="Рубль, ₽"
                        />
                        <v-checkbox
                            v-model="checkEur"
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
            windowWidth: window.innerWidth,
            checkRu: true,
            checkEn: false,
            checkRub: true,
            checkEur: false
        }
    },
    mounted() {
        if (this.curLang === 'ru') {
            this.checkRu = true
            this.checkEn = false
        } else {
            this.checkRu = false
            this.checkEn = true
        }

        if (this.currency === 'rub') {
            this.checkRub = true
            this.checkEur = false
        } else {
            this.checkEur = true
            this.checkRub = false
        }

        window.addEventListener ('resize', () => {
            this.windowWidth = window.innerWidth;
        })
    },
    computed: {
        showLangAndCurPopup () {
            return this.$store.getters.getLangAndCurPopup
        },
        curLang () {
            return this.$store.getters.getLang
        },
        currency () {
            return this.$store.getters.getCur
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
        },
        curLang () {
            if (this.curLang === 'ru') {
                this.checkRu = true
                this.checkEn = false
            } else {
                this.checkRu = false
                this.checkEn = true
            }
        },
        checkRu () {
            if (this.checkRu === true) {
                this.checkEn = false
                this.$store.dispatch('setLang', 'ru')
                this.$vuetify.lang.current = 'ru'
            } else {
                this.checkEn = true
                this.$store.dispatch('setLang', 'en')
                this.$vuetify.lang.current = 'en'
            }
        },
        checkEn () {
            if (this.checkEn === true) {
                this.checkRu = false
                this.$store.dispatch('setLang', 'en')
                this.$vuetify.lang.current = 'en'
            } else {
                this.checkRu = true
                this.$store.dispatch('setLang', 'ru')
                this.$vuetify.lang.current = 'ru'
            }
        },

        currency () {
            if (this.currency === 'rub') {
                this.checkRub = true
                this.checkEur = false
            } else {
                this.checkEur = true
                this.checkRub = false
            }
        },
        checkRub () {
            if (this.checkRub === true) {
                this.checkEur = false
                this.$store.dispatch('setCur', 'rub')
            } else {
                this.checkEur = true
                this.$store.dispatch('setCur', 'eur')
            }
        },
        checkEur () {
            if (this.checkEur === true) {
                this.checkRub = false
                this.$store.dispatch('setCur', 'eur')
            } else {
                this.checkRub = true
                this.$store.dispatch('setCur', 'rub')
            }
        }
    }
}
</script>
