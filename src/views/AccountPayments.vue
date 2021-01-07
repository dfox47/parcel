<template>
    <div class="content">
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
                            {{ $vuetify.lang.t('$vuetify.breadcrumbs.payments') }}
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
                        <div class="account_fields__info">
                            <p>
                                <strong>Способы оплаты залога</strong>
                            </p>

                            <p>
                                Добавляйте способы оплаты и управляйте ими с помощью нашей безопасной платежной системы Robokassa.
                            </p>
                        </div>

                        <!-- visa -->
                        <div class="account_fields__item">
                            <div class="account_fields__item__info">
                                <div class="account_card">
                                    <div class="account_card__type account_card__type__visa" />

                                    <div class="account_card__desc">
                                        <p>
                                            Visa ***** 9619
                                        </p>

                                        <p>
                                            Срок действия: 01/2029
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="account_fields__item__edit">
                                <div class="account_btn account_btn__done" />

                                <div class="account_btn account_btn__close" />
                            </div>
                        </div>

                        <!-- master -->
                        <div class="account_fields__item">
                            <div class="account_fields__item__info">
                                <div class="account_card">
                                    <div class="account_card__type account_card__type__master" />

                                    <div class="account_card__desc">
                                        <p>
                                            MasterCard ***** 9619
                                        </p>

                                        <p>
                                            Срок действия: 01/2029
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="account_fields__item__edit">
                                <div class="account_btn account_btn__close" />
                            </div>
                        </div>

                        <!-- maestro -->
                        <div class="account_fields__item">
                            <div class="account_fields__item__info">
                                <div class="account_card">
                                    <div class="account_card__type account_card__type__maestro" />

                                    <div class="account_card__desc">
                                        <p>
                                            Maestro ***** 9619
                                        </p>

                                        <p>
                                            Срок действия: 06/2028
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="account_fields__item__edit">
                                <div class="account_btn account_btn__close" />
                            </div>
                        </div>

                        <div class="account_fields__item">
                            <div class="account_card__add">
                                <v-btn
                                    small
                                    color="secondary"
                                    to="/"
                                    active-class="active"
                                >
                                    {{ $vuetify.lang.t('$vuetify.connect_card') }}
                                </v-btn>
                            </div>
                        </div>
                    </div>

                    <div class="account_info">
                        <p>
                            В целях безопасности совершайте платежи и общайтесь только на платформе нашего сервиса.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name: 'AccountPersonalInfo'
}
</script>


