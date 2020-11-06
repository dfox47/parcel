<template>
    <div>
        <div class="container mb-5">
            <send-menu></send-menu>
            <div class="send_search">
                <send-search></send-search>
            </div>
        </div>
    </div>
</template>

<script>
import SendMenu from "../components/SendMenu";
import SendSearch from "../components/SendSearch";
export default {
    components: {
        sendMenu: SendMenu,
        sendSearch: SendSearch
    }
}
</script>

<style scoped>
</style>
