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
                        <router-link to="/rules">
                            {{ $vuetify.lang.t('$vuetify.breadcrumbs.rules') }}
                        </router-link>
                    </li>

                    <li>
                        <span>
                            Условия обработки платежей
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

                    <h1>{{ $vuetify.lang.t('$vuetify.breadcrumbs.rules') }}</h1>
                </div>

                <div class="rules">
                    <app-rules_menu />

                    <div class="rules__content">
                        <h2>Условия обработки платежей</h2>

                        <p>
                            Текст будет здесь
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name: 'Rules'
}
</script>


