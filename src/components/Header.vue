<template>
    <div class="header">
        <div class="wrap">
            <header class="header_wrap">
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
                    <ul class="header_nav">
                        <li class="header_nav__item">
                            <router-link to="/send">
                                Хочу отправить
                            </router-link>
                        </li>

                        <li class="header_nav__item">
                            <router-link to="/take">
                                Могу захватить
                            </router-link>
                        </li>

                        <li class="header_nav__item">
                            <router-link to="/registration">
                                Русский, ₽
                            </router-link>
                        </li>
                    </ul>

                    <ul class="login_nav">
                        <li class="login_nav__item">
                            <router-link
                                class="btn btn_main"
                                to="/registration"
                            >
                                Вход
                            </router-link>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    </div>
</template>



<script>
export default {
    name: 'Header'
}
</script>


