<template id="modal-template">
    <div>
        <transition
            name="fade"
            appear
        >
            <v-card
                v-if="showLoginPopup"
            >
                <div
                    class="popup_overlay"
                    v-if="showLoginPopup"
                    @click="this.hideLoginPopup"
                />

                <div class="popup popup_one_column  popup_login">
                    <span
                        class="popup_close_btn"
                        @click="this.hideLoginPopup"
                    />

                    <v-form
                        v-model="valid"
                        ref="form"
                        lazy
                        action=""
                        class="popup_one_column__wrap"
                    >
                        <v-card-title>
                            {{ $vuetify.lang.t('$vuetify.login') }}
                        </v-card-title>

                        <v-text-field-integer
                            v-model="phone"
                            class="input_wrap"
                            name="phone"
                            label="Ваш телефон"
                            :properties="{
                                prefix: mask,
                                suffix: '',
                                'prepend-icon': 'mdi-phone',
                                rules: [
                                    v => !!v || 'Укажите пожалуйста Ваш телефон',
                                    v => (v !== null && v.length >= 15) || 'Слишком короткий номер телефона'
                                ],
                                readonly: false,
                                disabled: false,
                                outlined: false,
                                clearable: true,
                                placeholder: '',
                            }"
                            :options="{
                                inputMask: '(###) ###-##-##',
                                outputMask: '##########',
                                empty: null,
                                applyAfter: false,
                                alphanumeric: true,
                                lowerCase: false,
                            }"
                            @focus="mask = '+7'"
                            @blur="checkBlur"
                        />

                        <div class="input_wrap">
                            <v-text-field
                                id="password"
                                prepend-icon="mdi-lock"
                                name="password"
                                label="Пароль"
                                :type="type"
                                counter
                                :rules="passwordRules"
                                v-model="password"
                            />
                            <img
                                class="input_wrap__img"
                                :src="pass_img"
                                @click="showPassword"
                                alt=""
                            >
                        </div>

                        <div class="popup_login_options">
                            <div>
                                <v-checkbox
                                    v-model="checkbox"
                                    class="v-checkbox"
                                    :label="$vuetify.lang.t('$vuetify.login.remember')"
                                />
                            </div>

                            <span>{{ $vuetify.lang.t('$vuetify.login.forgot_pass') }}</span>
                        </div>

                        <v-btn
                            block
                            color="primary"
                            @click="onSubmit"
                            :loading="loading"
                            :disabled="!valid || loading"
                        >
                            {{ $vuetify.lang.t('$vuetify.continue_button') }}
                        </v-btn>

                        <div class="popup_bottom">
                            <p>
                                {{ $vuetify.lang.t('$vuetify.login.dont_have_account') }}
                            </p>

                            <a
                                class="link_primary"
                                @click="this.showRegistrationPopup"
                            >
                                {{ $vuetify.lang.t('$vuetify.register') }}
                            </a>
                        </div>
                    </v-form>
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
            phone: null,
            focus: false,
            mask: '',
            password: '',
            passwordRules: [
                v => !!v || 'Введите пароль!',
                v => (v && v.length >= 8) || 'Пароль не может быть меньше 8 символов!',
                v => /(?=.*[A-Z])/.test(v) || 'Пароль должен содержать хотя бы 1 заглавную букву',
                v => /(?=.*[a-z])/.test(v) || 'Пароль должен содержать хотя бы 1 строчную букву',
                v => /(?=.*\d)/.test(v) || 'Пароль должен содержать хотя бы 1 цифру',
                v => /^[a-zA-Z0-9@#$%^&+=*.\-_]{0,100}$/.test(v) || 'Недопустимые символы'
            ],
            checkbox: true,
            valid: false
        }
    },
    computed: {
        showLoginPopup() {
            return this.$store.getters.getLoginPopup
        },
        loading () {
            return this.$store.getters.loading
        }
    },
    methods: {
        hideLoginPopup () {
            this.$store.dispatch('hideLoginPopup')
        },
        checkBlur () {
            if (this.phone === null || this.phone === '') {
                this.mask = ''
            }
        },
        showPassword () {
            if (this.type === 'password') {
                this.type = 'text'
                this.pass_img = require('@/assets/i/icons/hide_pass.svg')
            }
            else {
                this.type = 'password'
                this.pass_img = require('@/assets/i/icons/show_pass.svg')
            }
        },
        showRegistrationPopup () {
            this.$store.dispatch('showRegistrationPopup')
        },
        onSubmit () {
            this.$store.dispatch('clearError');
            this.$store.dispatch('setLoading', true);

            console.log(this.phone + ' - ' + this.password)

            axios.post(`https://api.wwprcl.ru/auth/login`, {
                phone: '+7' + this.phone,
                password: this.password
            })
                .then(response => {
                    this.$store.dispatch('setLoading', false);
                    let data = response.data
                    if (data.success === true) {
                        this.$store.dispatch('autoLoginUser', data.user);
                        this.$store.dispatch('hideLoginPopup')

                        if (this.checkbox === true)
                        {
                            const parsed = JSON.stringify(data.user);
                            localStorage.setItem('user', parsed);
                        }


                        this.$router.push('/account/personal-info')
                    } else {
                        this.$store.dispatch('setError', data.message);
                    }
                }, error => {
                    //console.log(error);
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
    }
}
</script>
