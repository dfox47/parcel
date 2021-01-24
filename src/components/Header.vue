<template>
    <div class="header">
        <div class="wrap">
            <header class="header_wrap">
                <div
                    class="header_bars header_mobile"
                    @click="this.showLangAndCurPopup"
                >
                    <span />
                    <span />
                    <span />
                </div>

                <router-link
                    class="logo"
                    to="/"
                >
                    <img
                        class="logo__img"
                        src="../assets/i/icons/logo.svg"
                        alt=""
                    >

                    <img
                        class="logo__text"
                        src="../assets/i/icons/logo_text.svg"
                        alt=""
                    >
                </router-link>

                <div class="header_right">
                    <img
                        src="../assets/i/photo.png"
                        alt="login_icon"
                        class="header_login_icon header_mobile"
                        @click="showMenuPopup"
                    >

                    <ul class="header_nav">
                        <li class="header_nav__item">
                            <router-link to="/send">
                                {{ $vuetify.lang.t('$vuetify.menu_button_send') }}
                            </router-link>
                        </li>

                        <li class="header_nav__item">
                            <router-link to="/take">
                                {{ $vuetify.lang.t('$vuetify.menu_button_take') }}
                            </router-link>
                        </li>

                        <li class="header_nav__item">
                            <span
                                href="javascript:void(0);"
                                @click="this.showLangAndCurPopup"
                            >
                                {{ $vuetify.lang.t('$vuetify.language_name') }}, {{ getCurSymbol() }}
                            </span>
                        </li>
                    </ul>

                    <app-lang_and_cur_popup />

                    <ul class="login_nav">
                        <li class="login_nav__item">
                            <v-btn
                                color="secondary"
                                small
                                @click="showMenuPopup"
                            >
                                {{ $vuetify.lang.t('$vuetify.login.button') }}
                            </v-btn>
                        </li>
                    </ul>

                    <app-menu_popup />
                </div>
            </header>
        </div>
    </div>
</template>



<script>
export default {
    methods: {
        showLangAndCurPopup () {
            this.$store.dispatch('showLangAndCurPopup')
        },
        showMenuPopup () {
            this.$store.dispatch('showMenuPopup')
        },
        getCurSymbol () {
            return this.$store.getters.getCurSymbol
        }
    }
}
</script>


