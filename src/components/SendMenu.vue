<template>
    <v-container>
        <v-row
            align="center"
            justify="center"
        >
            <v-btn
                color="primary"
                to="/send"
                active-class="active"
            >
                Создать заявку
            </v-btn>
            <v-btn
                color="primary"
                to="/send/search"
                active-class="active"
            >
                Поиск предложений
            </v-btn>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "SendMenu"
}
</script>

<style scoped>
</style>
