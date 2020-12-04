<template>
    <div class="header">
        <header class="header_wrap">
            <div class="header_bars header_mobile">
                <span></span>
                <span></span>
                <span></span>
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
                <div class="header_login_icon">
                    <img
                        class="header_login_icon header_mobile"
                        src="../assets/i/photo.png"
                        alt="login_icon"
                    >
                </div>

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
                        <router-link to="/registration">
                            {{ $vuetify.lang.t('$vuetify.language_name') }}, ₽
                        </router-link>
                    </li>
                </ul>

                <ul class="login_nav">
                    <li class="login_nav__item">
                        <router-link
                            class="btn btn_main"
                            to="/registration"
                        >
                            {{ $vuetify.lang.t('$vuetify.login_button') }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </header>
    </div>
</template>



<script>
export default {
    name: 'Header'
}
</script>


