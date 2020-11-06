<template>
    <ul class="nav nav-tabs mt-4">
        <li class="nav-item">
            <router-link class="nav-link" to="/take" active-class="active" exact>Создать заявку</router-link>
        </li>
        <li class="nav-item" role="presentation">
            <router-link class="nav-link" to="/take/search" active-class="active" exact>Поиск предложений</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: "TakeMenu"
}
</script>

<style scoped>
    .nav-item {
        width: 50%;
    }

    .nav-link {
        text-align: center;
    }
</style>
