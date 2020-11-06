<template>
    <div>
        <div>
            <send-menu />
            <div>
                <send-search />
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
