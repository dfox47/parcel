<template>
    <div class="content">
        <h1>Parcel Send</h1>

        <router-link
            to="/popupLogin"
        >
            POPUP
        </router-link>

        <router-view />

        <send-menu />
    </div>
</template>



<script>
import SendMenu from "../components/SendMenu";
export default {
    name: 'ParcelSend',
    components: {
        sendMenu: SendMenu
    },
    watch: {
        $route: {
            immediate: true,
            handler: function(newVal) {
                // this.showModal = newVal.meta && newVal.meta.showModal;
            }
        }
    }
}
</script>


