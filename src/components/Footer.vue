<template>
    <footer class="footer">
        <v-container>
            <v-row justify="center">
                <v-col
                    md="2"
                    class="text-center d-flex justify-center align-start"
                >
                    <country-flag
                        country="us"
                        class="border_flag"
                    />

                    <v-switch
                        class="mx-2 mt-0"
                        v-model="switch1"
                        @change="changeLocale"
                    />

                    <country-flag
                        country="ru"
                        class="border_flag"
                    />
                </v-col>
            </v-row>
        </v-container>

        <div class="wrap">
            <div class="footer_wrap">
                <ul class="footer_menu">
                    <li class="footer_menu__item">
                        <router-link to="/send">
                            Хочу отправить
                        </router-link>
                    </li>

                    <li class="footer_menu__item">
                        <router-link to="/">
                            Правила
                        </router-link>
                    </li>

                    <li class="footer_menu__item">
                        <router-link to="/">
                            Поддержка
                        </router-link>
                    </li>

                    <li class="footer_menu__item">
                        <router-link to="/take">
                            Могу захватить
                        </router-link>
                    </li>

                    <li class="footer_menu__item">
                        <router-link to="/registration">
                            Русский, ₽
                        </router-link>
                    </li>

                    <li class="footer_menu__item">
                        <router-link to="/">
                            Контакты
                        </router-link>
                    </li>
                </ul>

                <ul class="footer_app">
                    <li class="footer_app__item">
                        <a
                            href="javascript:void(0);"
                            target="_blank"
                            title="Google Play"
                        >
                            <img
                                src="../assets/i/icons/googleplay.svg"
                                alt="GooglePlay"
                            >
                        </a>
                    </li>

                    <li class="footer_app__item">
                        <a
                            href="javascript:void(0);"
                            target="_blank"
                            title="Apple Store"
                        >
                            <img
                                src="../assets/i/icons/appstore.svg"
                                alt="AppleStore"
                            >
                        </a>
                    </li>
                </ul>
            </div>

            <ul class="footer_social">
                <li class="footer_social__item">
                    <a
                        href="javascript:void(0);"
                        target="_blank"
                        title="Facebook"
                    >
                        <img
                            src="../assets/i/icons/social/facebook.svg"
                            alt="facebook"
                        >
                    </a>
                </li>

                <li class="footer_social__item">
                    <a
                        href="javascript:void(0);"
                        target="_blank"
                        title="Google"
                    >
                        <img
                            src="../assets/i/icons/social/google.svg"
                            alt="google"
                        >
                    </a>
                </li>

                <li class="footer_social__item">
                    <a
                        href="javascript:void(0);"
                        target="_blank"
                        title="LinkedIn"
                    >
                        <img
                            src="../assets/i/icons/social/linked.svg"
                            alt="linkedin"
                        >
                    </a>
                </li>

                <li class="footer_social__item">
                    <a
                        href="javascript:void(0);"
                        target="_blank"
                        title="Twitter"
                    >
                        <img
                            src="../assets/i/icons/social/twitter.svg"
                            alt="twitter"
                        >
                    </a>
                </li>

                <li class="footer_social__item">
                    <a
                        href="javascript:void(0);"
                        target="_blank"
                        title="Pinterest"
                    >
                        <img
                            src="../assets/i/icons/social/pinterest.svg"
                            alt="pinterest"
                        >
                    </a>
                </li>

                <li class="footer_social__item">
                    <a
                        href="javascript:void(0);"
                        target="_blank"
                        title="Instagram"
                    >
                        <img
                            src="../assets/i/icons/social/instagram.svg"
                            alt="instagram"
                        >
                    </a>
                </li>
            </ul>

            <div class="footer_copyright">
                © Копирайт 2020
            </div>
        </div>
    </footer>
</template>



<script>
export default {
    name: 'Footer',
    data () {
        return {
            switch1: true,
        }
    },
    methods: {
        changeLocale () {
            if (this.switch1 === true) this.$vuetify.lang.current = 'ru'
            else this.$vuetify.lang.current = 'en'
        }
    },
}
</script>

<style scoped>
    .border_flag {
        box-shadow: 0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12) !important;
    }
</style>
