<template>
    <v-app>
        <!-- header -->
        <app-header />

        <!-- content -->
        <router-view />

        <!-- footer -->
        <app-footer />



        <template v-if="error">
            <v-snackbar
                timeout="5000"
                elevation="10"
                color="error"
                @input="closeError"
                :value="true"
            >
                {{ error }}

                <template v-slot:action="{ attrs }">
                    <v-btn
                        color="blue"
                        text
                        v-bind="attrs"
                        @click="closeError"
                    >
                        Close
                    </v-btn>
                </template>
            </v-snackbar>
        </template>

        <app-login_popup />
    </v-app>
</template>

<script>
export default {
    computed: {
        error () {
            return this.$store.getters.error
        }
    }
}
</script>

<style lang="scss">
@import 'styles/_styles.scss';
</style>
