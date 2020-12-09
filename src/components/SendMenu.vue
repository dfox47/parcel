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
                {{ $vuetify.lang.t('$vuetify.create_new_request') }}
            </v-btn>

            <v-btn
                color="primary"
                to="/send/search"
                active-class="active"
            >
                {{ $vuetify.lang.t('$vuetify.search_for_offers') }}
            </v-btn>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "SendMenu"
}
</script>


