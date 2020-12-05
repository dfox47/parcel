<template>
    <v-app>
        <app-header />

        <app-login_popup
            v-bind:showLoginPopup="showLoginPopup"
            ref="login_popup"
        />

        <div class="content">
            <router-view />
        </div>

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
    data() {
        return { showLoginPopup: true }
    },
    computed: {
        error () {
            return this.$store.getters.error
        }
    },
    methods: {
        show () { //accessing the child component instance through $refs
            this.$refs.login_popup.show()
        }
    },
}
</script>

<style lang="scss">
@import 'styles/_styles.scss';
</style>
