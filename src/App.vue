<template>
    <v-app>
        <app-header />

        <!--<app-login_popup />-->

        <div>
            <button class="button" @click="showLoginPopup = true">
                popup регистрации
            </button>
            <transition name="fade" appear>
                <div class="modal-overlay" v-if="showLoginPopup" @click="showLoginPopup = false"></div>
            </transition>
            <transition name="fade" appear>
                <div class="modal" v-if="showLoginPopup">
                    <h1>Lorem Ipsum</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem provident explicabo accusamus laudantium voluptatum nobis sed nesciunt neque possimus molestiae?</p>
                    <button class="button" @click="showLoginPopup = false">
                        Закрыть
                    </button>
                </div>
            </transition>
        </div>

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
        closeError () {
            this.$store.dispatch('clearError')
        }
    }
}
</script>

<style lang="scss">
@import 'styles/_styles.scss';
</style>
