<template>
    <v-app>
        <app-header />
        <router-view />
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
    </v-app>
</template>

<script>
export default {
    computed: {
        error () {
            return this.$store.getters.error
        }
    },
    methods: {
        closeError () {
            this.$store.dispatch('clearError')
        }
    }
}
</script>

<style lang="scss">
    @import 'styles/_styles.scss';
</style>
