


<template>
    <div
        class="rules_menu"
        :class="{'active': isActive}"
        v-click-outside="mobileClose"
    >
        <div
            :key="currentLink.src"
            class="rules_menu__mobile_toggle"
            v-for="currentLink in currentLinks"
            @click="mobileToggle"
        >
            {{ currentLink.title }}
        </div>

        <ul class="rules_menu__list">
            <li
                v-for="link in links"
                :key="link.title"
            >
                <router-link :to="link.src">
                    {{ link.title }}
                </router-link>
            </li>
        </ul>
    </div>
</template>



<script>
export default {
    computed: {
        currentLinks: function() {
            return this.links.filter(function (link) {
                return link.src === window.location.pathname;
            });
        }
    },
    data: () => ({
        isActive: false,
        links: [
            {
                src: '/rules',
                title: 'Условия предоставления услуг'
            },
            {
                src: '/rules/service-policy',
                title: 'Политика сервиса'
            },
            {
                src: '/rules/conditions',
                title: 'Условия обработки платежей'
            },
            {
                src: '/rules/privacy-policy',
                title: 'Политика конфиденциальности'
            },
            {
                src: '/rules/guarantee-owners',
                title: 'Гарантия для хозяев'
            },
            {
                src: '/rules/return',
                title: 'Возврат'
            },
            {
                src: '/rules/intellectual-policy',
                title: 'Политика в области интеллектуальной собственности'
            },
            {
                src: '/rules/cookie-policy',
                title: 'Политика в отношении файлов «cookie»'
            }
        ]
    }),
    methods: {
        mobileClose () {
            this.isActive = false;
        },
        mobileToggle: function () {
            this.isActive = !this.isActive;
        },
    },
    name: "RulesMenu"
}
</script>


