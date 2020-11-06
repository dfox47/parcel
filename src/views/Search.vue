<template>
    <div class="container">
        <b-tabs content-class="search_content"  class="search_tabs mt-4">
            <b-tab title="Искать заказ" active><send-search></send-search></b-tab>
            <b-tab title="Искать курьера"><take-search></take-search></b-tab>
        </b-tabs>
    </div>
</template>

<script>
export default {
    name: "Search"
}
</script>

<style>
    .search_tabs .nav-item {
        width: 50%;
    }

    .search_tabs .nav-link {
        text-align: center;
    }

    .search_content {
        width: 100%;
        min-height: 500px;
        border-left: 1px solid #dee2e6;
        border-right: 1px solid #dee2e6;
        border-bottom: 1px solid #dee2e6;
    }
</style>
