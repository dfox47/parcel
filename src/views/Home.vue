<template>
    <div class="home">
        <div class="wrap">
            <div class="home_intro">
                <div class="home_intro_text">
                    <h2>{{ $vuetify.lang.t('$vuetify.home.title') }}</h2>

                    <span>Duciam repersp erunt, officiis nam quam, cus aciania et que que eveles volorio cum nobis molestrum denimagnam laceris excepudam id es quid qui nobitatur sapissed molorpo rehent mossusciisti optatquibus earchil</span>

                    <a
                        to="/popupLogin"
                        class="btn btn_blue btn_medium"
                    >{{ $vuetify.lang.t('$vuetify.registration') }}</a>

                    <router-link
                        to="/popupLogin"
                    >
                        POPUP
                    </router-link>

                    <slot
                        name="backdrop"
                        slot="backdrop"
                    />

                    <RouterView />
                </div>

                <div class="home_intro_img">
                    <img
                        src="../assets/i/intro.png"
                        alt="Intro"
                    >
                </div>
            </div>
        </div>

        <div class="home_send_or_grab">
            <div class="wrap">
                <div class="home_send_or_grab__content">
                    <h2>{{ $vuetify.lang.t('$vuetify.what_do_you_need') }}</h2>

                    <div class="send_or_grab">
                        <div>
                            <span class="send_or_grab__inner">
                                <img
                                    src="../assets/i/send.svg"
                                    alt="send"
                                >
                                <span>{{ $vuetify.lang.t('$vuetify.menu_button_send') }}</span>
                            </span>
                        </div>

                        <div>
                            <span class="send_or_grab__inner">
                                <img
                                    src="../assets/i/grab.svg"
                                    alt="grab"
                                >
                                <span>{{ $vuetify.lang.t('$vuetify.menu_button_take') }}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="home_advantages">
            <div class="wrap">
                <div class="home_advantages__content">
                    <h2>{{ $vuetify.lang.t('$vuetify.our_advantages') }}</h2>

                    <div class="home_advantages_left">
                        <div class="home_advantages_item">
                            <img
                                src="../assets/i/speed.svg"
                                alt="speed"
                            >
                            <p>
                                <span>Скорость</span>
                                Temperc hillandictur modis et ut andit, nullabore volestem nitatus andaecae volore sanderumquis
                            </p>
                        </div>

                        <div class="home_advantages_item">
                            <img
                                src="../assets/i/clearance.svg"
                                alt="customs clearance"
                            >
                            <p>
                                <span>Растаможка</span>
                                Temperc hillandictur modis et ut andit, nullabore volestem nitatus andaecae volore sanderumquis
                            </p>
                        </div>

                        <div class="home_advantages_item">
                            <img
                                src="../assets/i/cost.svg"
                                alt="cost"
                            >
                            <p>
                                <span>Стоимость</span>
                                Temperc hillandictur modis et ut andit, nullabore volestem nitatus andaecae volore sanderumquis
                            </p>
                        </div>
                    </div>

                    <div class="home_advantages_right">
                        <div class="home_advantages_item">
                            <img
                                src="../assets/i/clarity.svg"
                                alt="clarity"
                            >
                            <p>
                                <span>Прозрачность</span>
                                Temperc hillandictur modis et ut andit, nullabore volestem nitatus andaecae volore sanderumquis
                            </p>
                        </div>

                        <div class="home_advantages_item">
                            <img
                                src="../assets/i/responsibility.svg"
                                alt="responsibility"
                            >
                            <p>
                                <span>Ответственность</span>
                                Temperc hillandictur modis et ut andit, nullabore volestem nitatus andaecae volore sanderumquis
                            </p>
                        </div>

                        <div class="home_advantages_item">
                            <img
                                src="../assets/i/association.svg"
                                alt="association"
                            >
                            <p>
                                <span>Содружество</span>
                                Temperc hillandictur modis et ut andit, nullabore volestem nitatus andaecae volore sanderumquis
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="home_mobile_app">
            <div class="wrap">
                <div class="home_mobile_app__content">
                    <img
                        src="../assets/i/mobile_app.svg"
                        alt=""
                    >

                    <div class="home_mobile_app_text">
                        <h2>{{ $vuetify.lang.t('$vuetify.we_have_mobile_app') }}</h2>

                        <span>Ipsum eatam vid etur, adiatem que con provitaqui dente perumet libus aut reperep udaecti isquiatia di omnim estrupienet, ut voluptatus, con commoluptias eum rerci</span>

                        <div>
                            <img
                                src="../assets/i/appstore.svg"
                                alt=""
                            >

                            <img
                                src="../assets/i/googleplay.svg"
                                alt=""
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="home_how_it_works">
            <div class="wrap">
                <div class="home_how_it_works__content">
                    <h2>{{ $vuetify.lang.t('$vuetify.home.how_it_works') }}</h2>

                    <img
                        src="../assets/i/how_it_works.svg"
                        alt=""
                    >

                    <div class="home_how_it_works_text">
                        <p>
                            <span>1. Temperc hillandictur </span>
                            Modis et ut andit, nullabore volestem nitatus andaecae volore sanderumquis
                        </p>

                        <p>
                            <span>2. Aximus alignis mod quis</span>
                            quidusa ntibusant accae perio quunto demo consed ut aperum quodis et rest
                        </p>

                        <p>
                            <span>3. Resto omnim et is non</span>
                            rehendi rerchil molorum qui quas rem volupta tionsed que dolupic
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import store from "../store";
export default {
    methods: {
        showLoginPopup () {
            store.commit('showLoginPopup');
        },
        hideLoginPopup () {
            store.commit('hideLoginPopup');
        }
    }
}
</script>


