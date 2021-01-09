<template>
    <ul class="rules__menu">
        <li>
            <router-link to="/rules">
                Условия предоставления услуг
            </router-link>
        </li>

        <li>
            <router-link to="/rules/service-policy">
                Политика сервиса
            </router-link>
        </li>

        <li>
            <router-link to="/rules/conditions">
                Условия обработки платежей
            </router-link>
        </li>

        <li>
            <router-link to="/rules/privacy-policy">
                Политика конфиденциальности
            </router-link>
        </li>

        <li>
            <router-link to="/rules/guarantee-owners">
                Гарантия для хозяев
            </router-link>
        </li>

        <li>
            <router-link to="/rules/return">
                Возврат
            </router-link>
        </li>

        <li>
            <router-link to="/rules/intellectual-policy">
                Политика в области интеллектуальной собственности
            </router-link>
        </li>

        <li>
            <router-link to="/rules/cookie-policy">
                Политика в отношении файлов «cookie»
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: "RulesMenu"
}
</script>


