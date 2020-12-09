<template>
    <div class="content">
        <h1>Parcel Send</h1>

        <send-menu />
    </div>
</template>



<script>
import SendMenu from "../components/SendMenu";
export default {
    name: 'ParcelSend',
    components: {
        sendMenu: SendMenu
    }
}
</script>


