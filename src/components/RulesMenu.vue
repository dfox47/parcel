<template>
    <ul class="rules__menu">
        <li
            v-for="link in links"
            :key="link.title"
        >
            <router-link :to="link.src">
                {{ link.title }}
            </router-link>
        </li>
    </ul>
</template>



<script>
export default {
    data: () => ({
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
    name: "RulesMenu"
}
</script>


