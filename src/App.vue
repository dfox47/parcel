<template>
    <v-app>
        <!-- header -->
        <app-header />
        <v-progress-linear
            :active="loading"
            :indeterminate="loading"
            fixed
            bottom
            color="deep-purple accent-4"
        />
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

        <app-confirm_popup />

        <app-international_popup_1 />
        <app-international_popup_2 />

        <app-login_popup />

        <app-passport_loaded_popup />
        <app-passport_popup_1 />
        <app-passport_popup_2 />
        <app-passport_popup_3 />

        <app-register_popup />

        <app-request_accepted_popup />
        <app-request_place_popup_1 />
        <app-request_place_popup_2 />
        <app-request_send_popup_1 />
        <app-request_send_popup_2 />
        <app-request_send_popup_3 />

        <app-send_or_grub_popup />
    </v-app>
</template>

<script>
export default {
    computed: {
        error () {
            return this.$store.getters.error
        },
        loading() {
            return this.$store.getters.loading
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
