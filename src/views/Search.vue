<template>
    <div class="container">
        <b-tabs
            class="search_tabs mt-4"
            content-class="search_content"
        >
            <b-tab
                title="Искать заказ"
                active
            >
                <send-search />
            </b-tab>

            <b-tab title="Искать курьера">
                <take-search />
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
export default {
    name: "Search"
}
</script>


