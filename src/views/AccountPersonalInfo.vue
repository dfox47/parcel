<template>
    <div
        class="content"
        v-if="isUserLoggedIn"
    >
        <div class="account">
            <div class="wrap">
                <ul class="breadcrumbs">
                    <li>
                        <router-link to="/">
                            {{ $vuetify.lang.t('$vuetify.breadcrumbs.home') }}
                        </router-link>
                    </li>

                    <li>
                        <router-link to="/account/">
                            {{ $vuetify.lang.t('$vuetify.breadcrumbs.account') }}
                        </router-link>
                    </li>

                    <li>
                        <span>
                            {{ $vuetify.lang.t('$vuetify.breadcrumbs.personal_info') }}
                        </span>
                    </li>
                </ul>

                <div class="title_with_btn">
                    <a
                        href="/"
                        class="link_back"
                    >
                        {{ $vuetify.lang.t('$vuetify.back') }}
                    </a>

                    <h1>{{ $vuetify.lang.t('$vuetify.breadcrumbs.account') }}</h1>
                </div>

                <ul class="submenu">
                    <li>
                        <router-link to="/account/personal-info">
                            {{ $vuetify.lang.t('$vuetify.breadcrumbs.personal_info') }}
                        </router-link>
                    </li>

                    <li>
                        <router-link to="/account/payments">
                            {{ $vuetify.lang.t('$vuetify.breadcrumbs.payments') }}
                        </router-link>
                    </li>
                </ul>

                <div class="account_wrap">
                    <div class="account_fields">
                        <!-- фото -->
                        <div class="account_fields__item">
                            <div class="account_fields__item__info">
                                <div class="account_fields__photo" />
                            </div>

                            <a
                                class="account_fields__item__edit"
                                href="/"
                            >
                                {{ $vuetify.lang.t('$vuetify.edit') }}
                            </a>
                        </div>

                        <!-- Удостоверение личности -->
                        <div class="account_fields__item">
                            <div class="account_fields__item__info">
                                Удостоверение личности
                            </div>

                            <a
                                class="account_fields__item__edit"
                                href="/"
                            >
                                {{ $vuetify.lang.t('$vuetify.load_document') }}
                            </a>
                        </div>

                        <!-- Номер телефона -->
                        <div class="account_fields__item">
                            <div class="account_fields__item__info">
                                <p>
                                    {{ $vuetify.lang.t('$vuetify.phone_number') }}
                                </p>

                                <p v-if="user && user.info">
                                    {{ user.info.phone }}
                                </p>
                            </div>

                            <a
                                class="account_fields__item__edit"
                                href="/"
                            >
                                {{ $vuetify.lang.t('$vuetify.edit') }}
                            </a>
                        </div>

                        <!-- Номер телефона -->
                        <div class="account_fields__item">
                            <div class="account_fields__item__info">
                                <div class="input_wrap__center">
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
                                </div>
                            </div>


                            <div class="account_fields__btns">
                                <a
                                    class="account_fields__item__edit"
                                    href="/"
                                >
                                    {{ $vuetify.lang.t('$vuetify.save') }}
                                </a>

                                <div class="account_btn account_btn__close" />
                            </div>
                        </div>


                        <!-- Электронный адрес -->
                        <div class="account_fields__item">
                            <div class="account_fields__item__info">
                                <p>
                                    Электронный адрес
                                </p>

                                <p>
                                    test@gmail.com
                                </p>
                            </div>

                            <a
                                class="account_fields__item__edit"
                                href="/"
                            >
                                {{ $vuetify.lang.t('$vuetify.edit') }}
                            </a>
                        </div>
                    </div>

                    <div class="account_info account_info__not_authorized">
                        <p>
                            Для того чтобы начать размещать заявки на отправку и транспортировку посылок, а также общаться с другими пользователями сервиса Вам необходимо подтвердить свою личность.
                        </p>

                        <p>
                            Пожалуста загрузите фотографию где вы держите свой паспорт в открытом виде. Тут нужен текст.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name: 'AccountPersonalInfo',
    data: () => ({
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
        valid: false,
        items: [
            {
                categories: [
                    'Категория 1',
                    'Категория 2'
                ],
                declared_value: 'Нет',
                deposit: 'Нет',
                delivery_price: '5,000 руб.',
                methods: [
                    'Личная встреча',
                    'В аэропорту'
                ],
                orders_new: '7 новых',
                orders_total: '61 заявка',
                send_before: '1 февраля',
                status: 'looking_parcel',
                size_x: '6 см',
                size_y: '15 см',
                size_z: ' 8,5 см',
                to: 'Россия, Москва - Рим, Италия',
                weight: '5 кг',
            },
            {
                categories: [
                    'Категория 1',
                    'Категория 2'
                ],
                declared_value: 'Нет',
                deposit: 'Нет',
                delivery_price: '5,000 руб.',
                methods: [
                    'Личная встреча',
                    'В аэропорту'
                ],
                orders_new: '12 новых',
                orders_total: '59 заявок',
                send_before: '1 февраля',
                status: 'looking_suitcase',
                size_x: '6 см',
                size_y: '15 см',
                size_z: ' 8,5 см',
                to: 'Турция, Стамбул - Россия, Владивосток',
                weight: '5 кг',
            }
        ],
    }),
    computed: {
        loading () {
            return this.$store.getters.loading
        },
        isUserLoggedIn () {
            return this.$store.getters.isUserLoggedIn
        },
        user () {
            return this.$store.getters.user
        }
    },
    mounted() {
        this.$store.dispatch('hideMenuPopup');
        this.$store.dispatch('updateUserData');
    }
}
</script>


