<template>
    <div>
        <div class="take_wrap">
            <div class="wrap">
                <ul class="breadcrumbs">
                    <li>
                        <router-link to="/">
                            {{ $vuetify.lang.t('$vuetify.breadcrumbs.home') }}
                        </router-link>
                    </li>

                    <li>
                        <span>
                            {{ $vuetify.lang.t('$vuetify.breadcrumbs.search_parcel') }}
                        </span>
                    </li>
                </ul>

                <div class="take_menu__wrap">
                    <ul class="take_menu">
                        <li>
                            <span class="take_menu__item active">
                                {{ $vuetify.lang.t('$vuetify.take.parcel_search') }}
                            </span>
                        </li>

                        <li>
                            <span
                                class="take_menu__item"
                                @click="showSendOrGrubPopup"
                            >
                                {{ $vuetify.lang.t('$vuetify.add_new_order') }}
                            </span>
                        </li>
                    </ul>
                </div>

                <form
                    class="take_destinations_search"
                    action="/"
                    method="post"
                >
                    <div class="take_destinations">
                        <div class="take_destinations__item">
                            <div class="take_destinations__title">
                                {{ $vuetify.lang.t('$vuetify.take.from') }}
                            </div>

                            <v-select
                                class="take_destinations__select"
                                :items="fromCountry"
                                :label="fromCountry[0]"
                                outlined
                            />

                            <v-select
                                class="take_destinations__select"
                                :items="fromCity"
                                :label="fromCity[0]"
                                outlined
                            />
                        </div>

                        <div class="take_destinations__item">
                            <div class="take_destinations__title">
                                {{ $vuetify.lang.t('$vuetify.take.to') }}
                            </div>

                            <v-select
                                class="take_destinations__select"
                                :items="toCountry"
                                :label="toCountry[0]"
                                outlined
                            />

                            <v-select
                                class="take_destinations__select"
                                :items="toCity"
                                :label="toCity[0]"
                                outlined
                            />
                        </div>
                    </div>

                    <div class="text-center">
                        <v-btn
                            color="secondary"
                            medium
                            @click="loadOrders"
                            :disabled="loading"
                            :loading="loading"
                        >
                            {{ $vuetify.lang.t('$vuetify.take.search') }}
                        </v-btn>
                    </div>

                    <div class="take_destinations__link_additional">
                        <router-link to="/">
                            {{ $vuetify.lang.t('$vuetify.take.additional_search') }}
                        </router-link>
                    </div>
                </form>

                <div class="take_results">
                    <div class="wrap">
                        <div class="take_results__title">
                            {{ $vuetify.lang.t('$vuetify.take.results_title_1') }}&nbsp;<span>25</span>&nbsp;{{ $vuetify.lang.t('$vuetify.take.results_title_2') }}
                        </div>

                        <div class="take_results__destination">
                            <span>{{ $vuetify.lang.t('$vuetify.take.from') }}:</span> Северная Ирландия, Каррикфергус
                        </div>

                        <div class="take_results__destination">
                            <span>{{ $vuetify.lang.t('$vuetify.take.to') }}:</span> Россия, Москва
                        </div>
                    </div>



                    <div class="take_results_items">
                        <router-link
                            tag="div"
                            to="/parcel-overview"
                            v-for="item in items"
                            :key="item.message"
                            class="take_results_item"
                        >
                            <div class="take_results_item__img_wrap">
                                <img
                                    class="take_results_item__img"
                                    :src="item.img"
                                    alt=""
                                >

                                <div class="take_results_item__name_wrap">
                                    <div class="take_results_item__name">
                                        {{ item.name }}<br>
                                        {{ item.surname }}
                                    </div>

                                    <div class="person_rating">
                                        {{ item.rating }}
                                    </div>
                                </div>
                            </div>

                            <div class="take_results_item__info">
                                <div class="take_results_item__list">
                                    <p>
                                        <span>Срок:</span> {{ item.till }}
                                    </p>

                                    <p>
                                        <span>Вес:</span> {{ item.weight }}
                                    </p>

                                    <p>
                                        <span>Депозит:</span> {{ item.deposit }}
                                    </p>
                                </div>

                                <div class="take_results_item__category">
                                    <p>
                                        <span>Категория</span>
                                    </p>

                                    <p
                                        v-for="cat in item.categories"
                                        :key="cat"
                                    >
                                        {{ cat }}
                                    </p>
                                </div>

                                <div class="take_results_item__link">
                                    <a
                                        class="btn btn_primary btn_size_l"
                                        href="/parcel-overview"
                                    >
                                        {{ $vuetify.lang.t('$vuetify.readmore') }}
                                    </a>

                                    <!--<v-btn-->
                                    <!--     small-->
                                    <!--     color="secondary"-->
                                    <!--     to="/parcel-overview"-->
                                    <!-- >-->
                                    <!--    {{ $vuetify.lang.t('$vuetify.readmore') }}-->
                                    <!--</v-btn>-->
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>



                <ul class="pagination">
                    <li>
                        <a href="">1</a>
                    </li>

                    <li>
                        <a
                            class="active"
                            href=""
                        >2</a>
                    </li>

                    <li>
                        <span>...</span>
                    </li>

                    <li>
                        <a href="">8</a>
                    </li>

                    <li>
                        <a href="">9</a>
                    </li>
                </ul>

                <div class="text-center">
                    <a
                        class="btn btn_more btn_size_m"
                        href="#"
                    >Изменить параметры поиска</a>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name: 'ParcelTake',
    data: () => ({
        fromCity: [
            'Любой город',
            'Москва',
            'Нижний Новгород'
        ],
        fromCountry: [
            'Выберите страну',
            'Россия',
            'США'
        ],
        toCity: [
            'Любой город',
            'Москва',
            'Нижний Новгород'
        ],
        toCountry: [
            'Выберите страну',
            'Россия',
            'США'
        ],

        items: [
            {
                categories: [
                    'Категория 1','Категория 2','Категория 3'
                ],
                message: 'Foo',
                name: 'Сергей',
                surname: 'Иванов',
                rating: 2.5,
                img: require('@/assets/i/photo2.png'),
                till: 'до 31 февраля',
                weight: '0,5 кг',
                deposit: '5000 руб'
            },
            {
                categories: [
                    'Категория 1','Категория 2','Категория 3'
                ],
                message: 'Foo',
                name: 'Сергей',
                surname: 'Иванов',
                rating: 2.5,
                img: require('@/assets/i/photo2.png'),
                till: 'до 31 февраля',
                weight: '0,5 кг',
                deposit: '5000 руб'
            },
            {
                categories: [
                    'Категория 1','Категория 2','Категория 3'
                ],
                message: 'Foo',
                name: 'Сергей',
                surname: 'Иванов',
                rating: 2.5,
                img: require('@/assets/i/photo2.png'),
                till: 'до 31 февраля',
                weight: '0,5 кг',
                deposit: '5000 руб'
            },
            {
                categories: [
                    'Категория 1','Категория 2','Категория 3'
                ],
                message: 'Foo',
                name: 'Сергей',
                surname: 'Иванов',
                rating: 2.5,
                img: require('@/assets/i/photo2.png'),
                till: 'до 31 февраля',
                weight: '0,5 кг',
                deposit: '5000 руб'
            },
            {
                categories: [
                    'Категория 1','Категория 2','Категория 3'
                ],
                message: 'Foo',
                name: 'Сергей',
                surname: 'Иванов',
                rating: 2.5,
                img: require('@/assets/i/photo2.png'),
                till: 'до 31 февраля',
                weight: '0,5 кг',
                deposit: '5000 руб'
            },
            {
                categories: [
                    'Категория 1','Категория 2','Категория 3'
                ],
                message: 'Foo',
                name: 'Сергей',
                surname: 'Иванов',
                rating: 2.5,
                img: require('@/assets/i/photo2.png'),
                till: 'до 31 февраля',
                weight: '0,5 кг',
                deposit: '5000 руб'
            },
            {
                categories: [
                    'Категория 1','Категория 2','Категория 3'
                ],
                message: 'Foo',
                name: 'Сергей',
                surname: 'Иванов',
                rating: 2.5,
                img: require('@/assets/i/photo2.png'),
                till: 'до 31 февраля',
                weight: '0,5 кг',
                deposit: '5000 руб'
            },
            {
                categories: [
                    'Категория 1','Категория 2','Категория 3'
                ],
                message: 'Foo',
                name: 'Сергей',
                surname: 'Иванов',
                rating: 2.5,
                img: require('@/assets/i/photo2.png'),
                till: 'до 31 февраля',
                weight: '0,5 кг',
                deposit: '5000 руб'
            }
        ]
    }),
    methods: {
        showSendOrGrubPopup () {
            this.$store.dispatch('showSendOrGrubPopup')
        }
    }
}
</script>


