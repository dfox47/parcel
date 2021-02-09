<template id="modal-template">
    <div>
        <transition
            name="fade"
            appear
        >
            <div
                class="popup_overlay"
                v-if="showConfirmPopup"
                @click="this.hideConfirmPopup"
            />
        </transition>

        <transition
            name="fade"
            appear
        >
            <v-card
                v-if="showConfirmPopup"
            >
                <div class="popup popup_one_column  popup_confirm">
                    <span
                        class="popup_close_btn"
                        @click="this.hideConfirmPopup"
                    />

                    <form
                        action=""
                        class="popup_one_column"
                    >
                        <v-card-title>
                            {{ $vuetify.lang.t('$vuetify.confirmation') }}
                        </v-card-title>

                        <v-card-subtitle>
                            {{ $vuetify.lang.t('$vuetify.confirmation_text') }} <br> {{ registeredPhone }}
                        </v-card-subtitle>

                        <label class="input_confirm">
                            <input
                                v-model="inp1"
                                maxlength="1"
                                type="text"
                                placeholder=""
                                v-focus
                                @input="focus2"
                                @focus="clearThis($event.target)"
                            ><!--v-focus sets focus automatically-->
                            <input
                                v-model="inp2"
                                maxlength="1"
                                type="text"
                                placeholder=""
                                ref="inp_2"
                                @input="focus3"
                                @focus="clearThis($event.target)"
                            >
                            <input
                                v-model="inp3"
                                maxlength="1"
                                type="text"
                                placeholder=""
                                ref="inp_3"
                                @input="focus4"
                                @focus="clearThis($event.target)"
                            >
                            <input
                                v-model="inp4"
                                maxlength="1"
                                type="text"
                                placeholder=""
                                ref="inp_4"
                                @input="focus5"
                                @focus="clearThis($event.target)"
                            >
                            <input
                                v-model="inp5"
                                maxlength="1"
                                type="text"
                                placeholder=""
                                ref="inp_5"
                                @focus="clearThis($event.target)"
                            >
                        </label>

                        <v-btn
                            block
                            color="primary"
                            @click="onSubmit"
                            :disabled="loading || !valid"
                        >
                            {{ $vuetify.lang.t('$vuetify.continue_button') }}
                        </v-btn>

                        <div class="popup_bottom">
                            <p>
                                Не получили SMS?

                                <a
                                    class="link_dark"
                                    @click="sendAgain"
                                >
                                    Отправить повторно
                                </a>
                            </p>

                            <a
                                class="link_dark"
                                @click="changePhone"
                            >
                                Получить SMS на дургой номер
                            </a>
                        </div>
                    </form>
                </div>
            </v-card>
        </transition>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            pass_img: require('@/assets/i/icons/show_pass.svg'),
            type: 'password',
            btnText: 'Show Password',
            inp1: null,
            inp2: null,
            inp3: null,
            inp4: null,
            inp5: null,
            valid: false

        }
    },
    computed: {
        showConfirmPopup () {
            return this.$store.getters.getConfirmPopup
        },
        registeredPhone () {
            return this.$store.getters.getRegisteredPhone
        },
        loading () {
            return this.$store.getters.loading
        }
    },
    methods: {
        hideConfirmPopup () {
            this.$store.dispatch('hideConfirmPopup')
        },
        showLoginPopup () {
            this.$store.dispatch('showLoginPopup')
        },
        changePhone () {
            this.$store.dispatch('setSuccessRegistration', false)
            this.$store.dispatch('setRegisteredPhone', null)
            this.$store.dispatch('hideConfirmPopup')
            this.$store.dispatch('showRegistrationPopup')
        },
        sendAgain () {
            this.$store.dispatch('setSuccessRegistration', false)
            this.$store.dispatch('setRegisteredPhone', null)
            this.$store.dispatch('hideConfirmPopup')
            this.$store.dispatch('showRegistrationPopup')
        },
        focus2 () {
            this.$refs.inp_2.focus();
        },
        focus3 () {
            this.$refs.inp_3.focus();
        },
        focus4 () {
            this.$refs.inp_4.focus();
        },
        focus5 () {
            this.$refs.inp_5.focus();
        },
        clearThis (event) {
            event.value = ''
        },
        buttonReady () {
            let btn = this.inp1 + this.inp2 + this.inp3 + this.inp4 + this.inp5
            this.valid = btn.length === 5
        },
        onSubmit () {
            this.$store.dispatch('clearError');
            this.$store.dispatch('setLoading', true);

            let phone = this.registeredPhone
            let btn = this.inp1 + this.inp2 + this.inp3 + this.inp4 + this.inp5

            console.log(phone + ' - ' + btn)

            axios.post(`https://api.wwprcl.ru/auth/confirm/phone`, {
                phone: phone,
                code: btn
            })
                .then(response => {
                    this.$store.dispatch('setLoading', false);
                    let data = response.data
                    if (data.success === true) {
                        this.$store.dispatch('autoLoginUser', data.user);
                        this.$store.dispatch('hideConfirmPopup')

                        const parsed = JSON.stringify(data.user);
                        localStorage.setItem('user', parsed);

                        this.$router.push('/account/personal-info')
                    } else {
                        this.$store.dispatch('setError', data.message);
                    }
                }, error => {
                    this.$store.dispatch('setLoading', false);

                    if (error.toJSON().message === '') {
                        this.$store.dispatch('setError', 'Неизвестная ошибка запроса к серверу');
                    }
                    else {
                        this.$store.dispatch('setError', error.toJSON().message);
                    }
                    throw error;
                });
        }
    },
    watch: {
        inp1 () {
            this.buttonReady()
        },
        inp2 () {
            this.buttonReady()
        },
        inp3 () {
            this.buttonReady()
        },
        inp4 () {
            this.buttonReady()
        },
        inp5 () {
            this.buttonReady()
        }
    }
}
</script>
