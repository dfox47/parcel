<template>
    <div class="content">
        <div class="auto_search">
            <div class="wrap">
                <ul class="breadcrumbs">
                    <li>
                        <router-link to="/">
                            {{ $vuetify.lang.t('$vuetify.breadcrumbs.home') }}
                        </router-link>
                    </li>

                    <li>
                        <span>
                            {{ $vuetify.lang.t('$vuetify.auto_search') }}
                        </span>
                    </li>
                </ul>

                <div class="title_with_btn">
                    <a
                        href="/"
                        class="link_back"
                    >
                        Назад
                    </a>

                    <h1>{{ $vuetify.lang.t('$vuetify.auto_search') }}</h1>
                </div>

                <div class="auto_search__list">
                    <router-link
                        tag="div"
                        to="/parcel-overview"
                        v-for="item in items"
                        :key="item.status"
                        class="auto_search__item"
                    >
                        <div class="auto_search_status">
                            <div class="auto_search_status__wrap">
                                <div :class="'auto_search_status__img auto_search_status__img__' + item.status" />

                                <div class="auto_search_status__desc">
                                    {{ $vuetify.lang.t('$vuetify.status.' + item.status) }}
                                </div>

                                <div class="auto_search_close btn popup_close_btn" />
                            </div>

                            <div class="auto_search_numbers">
                                {{ item.orders_total }}
                            </div>

                            <div class="auto_search_numbers auto_search_numbers__new">
                                {{ item.orders_new }}
                            </div>
                        </div>

                        <div class="auto_search__desc">
                            <h2>{{ item.to }}</h2>

                            <div class="auto_search_info">
                                <div class="auto_search_info__col">
                                    <h3>Отправить до</h3>

                                    <ul class="auto_search_info__list">
                                        <li>{{ item.send_before }}</li>
                                    </ul>

                                    <h3>Способ передачи</h3>

                                    <ul class="auto_search_info__list">
                                        <li
                                            v-for="method in item.methods"
                                            :key="method"
                                        >
                                            {{ method }}
                                        </li>
                                    </ul>

                                    <h3>Габариты</h3>

                                    <ul class="auto_search_info__list">
                                        <li>Вес: {{ item.weight }}</li>
                                        <li>Глубина: {{ item.size_x }}</li>
                                        <li>Высота: {{ item.size_y }}</li>
                                        <li>Ширина: {{ item.size_z }}</li>
                                    </ul>
                                </div>

                                <div class="auto_search_info__col">
                                    <h3>Категория товара</h3>

                                    <ul class="auto_search_info__list">
                                        <li
                                            v-for="category in item.categories"
                                            :key="category"
                                        >
                                            {{ category }}
                                        </li>
                                    </ul>

                                    <h3>Залог</h3>

                                    <ul class="auto_search_info__list">
                                        <li>{{ item.deposit }}</li>
                                    </ul>

                                    <h3>Объявленная ценность</h3>

                                    <ul class="auto_search_info__list">
                                        <li>{{ item.declared_value }}</li>
                                    </ul>

                                    <h3>Цена доставки</h3>

                                    <ul class="auto_search_info__list">
                                        <li>{{ item.delivery_price }}</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="auto_search_more">
                                <v-btn
                                    small
                                    color="secondary"
                                >
                                    Редактировать
                                </v-btn>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name: 'AutoSearch',
    data: () => ({
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
        ]
    })
}
</script>


