<template>
    <div class="content">
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
                            {{ id }}
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

                    <h2>Россия, Москва — Рим, Италия</h2>
                </div>

                <div class="parcel_view">
                    <div class="parcel_view__info">
                        <div class="parcel_view__item">
                            <div class="parcel_view__person">
                                <div class="parcel_view__photo">
                                    <img
                                        src="../assets/i/photo.png"
                                        alt="user name"
                                    >
                                </div>

                                <div class="parcel_view__name__wrap">
                                    <span class="parcel_view__name">Анастасия</span>&nbsp;
                                    <span class="parcel_view__lastname">Серебрянникова</span>
                                    <span class="person_rating">4.5</span>
                                </div>
                            </div>
                        </div>

                        <div class="parcel_view__item">
                            <div class="parcel_view__status">
                                <ul>
                                    <li>10 завершенных перевозок</li>
                                    <li>Оценка на основании 5-и отзывов</li>
                                </ul>
                            </div>
                        </div>

                        <div class="parcel_view__item">
                            <h3>Отправить до</h3>

                            <ul>
                                <li>25 марта 2021</li>
                            </ul>
                        </div>

                        <div class="parcel_view__item">
                            <h3>Способ передачи получателю</h3>

                            <ul>
                                <li>Личная встреча</li>
                                <li>В аэропорту</li>
                            </ul>
                        </div>

                        <div class="parcel_view__item">
                            <h3>Данные получателя</h3>

                            <ul>
                                <li>Александра Степанова</li>
                                <li>Германия</li>
                            </ul>
                        </div>

                        <div class="parcel_view__item">
                            <h3>Категория товара</h3>

                            <ul>
                                <li>Медикаменты</li>
                                <li>Категория 1</li>
                            </ul>
                        </div>

                        <div class="parcel_view__item">
                            <h3>Габариты</h3>

                            <ul>
                                <li>Вес: 5 кг</li>
                                <li>Глубина: 6 см</li>
                                <li>Высота: 15 см</li>
                                <li>Ширина: 8,5 см</li>
                            </ul>
                        </div>

                        <div class="parcel_view__item">
                            <h3>Залог за сохранность</h3>

                            <ul>
                                <li>Нет</li>
                            </ul>
                        </div>

                        <div class="parcel_view__item">
                            <h3> Объявленная ценность</h3>

                            <ul>
                                <li>Нет</li>
                            </ul>
                        </div>

                        <div class="parcel_view__item">
                            <h3>Цена доставки</h3>

                            <ul>
                                <li>5,000 руб</li>
                            </ul>
                        </div>
                    </div>

                    <div class="parcel_view__description">
                        <h3>Описание посылки</h3>

                        <p>
                            Enecab ius, ommodis ut odition sequod quat quam que sinusam quistet imus delit ex est landisc iiscilibus reic tore nonestibusam sunt verchicil eum ea simillenis eos dolor ma con reris minciati bere vellau. Enecab ius, ommodis ut odition sequod quat quam que sinusam quistet imus delit ex est landisc iiscilibus reic tore nonestibusam sunt verchicil euris minciati bere vellau. Enecab ius, ommodis ut odition sequod quat quam que sinusam quistet imus delit ex est landisc iiscilibus reic tore nonestibusam sunt verchicil eum ea simillenis eos dolor ma con reris minciati bere vellau. Enecab ius, ommodis ut odition sequod quat quam que sinusam quistet imus delit ex est landisc iiscilibus reic tore nonestibusam sunt verchicil eum ea simillenis eos dolor ma con reris minciati bere vellau.
                        </p>
                    </div>

                    <div class="parcel_view__btns">
                        <v-btn
                            color="primary"
                            medium
                        >
                            {{ $vuetify.lang.t('$vuetify.connect') }}
                        </v-btn>

                        <v-btn
                            color="primary_light"
                            medium
                        >
                            {{ $vuetify.lang.t('$vuetify.back_to_search_results') }}
                        </v-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ParcelOverview",
    data: () => ({
        id: 'ID чемодана'
    }),
}
</script>


