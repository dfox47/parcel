<template id="modal-template">
    <div>
        <div
            class="popup_overlay__transparent"
            v-if="showMenuPopup"
            @click="this.hideMenuPopup"
        />

        <transition
            name="fade"
            appear
        >
            <div
                class="popup_menu"
                v-if="showMenuPopup"
            >
                <div class="popup_menu__photo">
                    <img
                        src="../assets/i/photo.png"
                        alt="login_icon"
                    >
                </div>

                <span class="popup_menu__name">
                    Александр <br>
                    Константиновский
                </span>

                <div class="popup_menu__rating">
                    <span class="icon-star_w" />
                    4.5
                </div>

                <ul class="popup_menu__items">
                    <li class="popup_menu__item">
                        Мои посылки
                        <span class="icon-bell popup_menu__icon" />
                    </li>
                    <li class="popup_menu__item">
                        Сообщения
                        <span class="popup_menu__number">55</span>
                    </li>
                    <li class="popup_menu__item">
                        Добавить заявку
                    </li>
                    <li class="popup_menu__item">
                        Искать заявки
                    </li>
                    <li class="popup_menu__item">
                        Автопоиск
                        <span class="popup_menu__number">99</span>
                    </li>
                    <li class="popup_menu__item">
                        Аккаунт
                    </li>
                    <li class="popup_menu__item">
                        Выход
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pass_img: require('@/assets/i/icons/show_pass.svg'),
            type: 'password',
            btnText: 'Show Password'
        }
    },
    computed: {
        showMenuPopup() {
            return this.$store.getters.getMenuPopup
        }
    },
    methods: {
        hideMenuPopup () {
            this.$store.dispatch('hideMenuPopup')
        },
    }
}
</script>
