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

                <div class="parcel_view">
                    <a
                        href="/"
                        class="link_back"
                    >
                        Назад
                    </a>

                    <div class="parcel_view__wrap">
                        <h2>Россия, Москва - Рим, Италия</h2>

                        <div class="parcel_view__info">
                            <div class="parcel_view__person">
                                <div class="photo">
                                    <img
                                        src="../assets/i/photo.png"
                                        alt="person's photo"
                                    >
                                </div>
                                <div class="parcel_view__name">
                                    Анастасия <br>
                                    Серебрянникова <br>
                                    <span class="person_rating">
                                        4.5
                                    </span>
                                </div>
                            </div>
                            <div class="parcel_view__status">
                                10 завершенных перевозок <br>
                                Оценка на основании 5-и отзывов
                            </div>
                            <div class="parcel_view__info__item">
                                <h3> Отправить до</h3>
                                <span>
                                    25 марта 2021
                                </span>
                            </div>
                            <div class="parcel_view__info__item">
                                <h3> Способ передачи получателю</h3>
                                <span>
                                    Личная встреча <br>
                                    В аэропорту
                                </span>
                            </div>
                            <div class="parcel_view__info__item">
                                <h3> Данные получателя</h3>
                                <span>
                                    Александра Степанова <br>
                                    Германия
                                </span>
                            </div>
                            <div class="parcel_view__info__item">
                                <h3> Категория товара</h3>
                                <span>
                                    Медикаменты <br>
                                    Категория 1
                                </span>
                            </div>
                            <div class="parcel_view__info__item">
                                <h3> Габариты</h3>
                                <span>
                                    Вес: 5 кг<br>
                                    Глубина: 6 см<br>
                                    Высота: 15 см<br>
                                    Ширина: 8,5 см
                                </span>
                            </div>
                            <div class="parcel_view__info__item">
                                <h3> Залог за сохранность</h3>
                                <span>
                                    Нет
                                </span>
                            </div>
                            <div class="parcel_view__info__item">
                                <h3> Объявленная ценность</h3>
                                <span>
                                    Нет
                                </span>
                            </div>
                            <div class="parcel_view__info__item">
                                <h3> Цена доставки</h3>
                                <span>
                                    5,000 руб
                                </span>
                            </div>
                        </div>
                        <div class="parcel_view__description">
                            <h3>Описание посылки</h3>
                            <span>
                                Enecab ius, ommodis ut odition sequod quat quam que sinusam quistet imus delit ex est landisc iiscilibus reic tore nonestibusam sunt verchicil eum ea simillenis eos dolor ma con reris minciati bere vellau. Enecab ius, ommodis ut odition sequod quat quam que sinusam quistet imus delit ex est landisc iiscilibus reic tore nonestibusam sunt verchicil euris minciati bere vellau. Enecab ius, ommodis ut odition sequod quat quam que sinusam quistet imus delit ex est landisc iiscilibus reic tore nonestibusam sunt verchicil eum ea simillenis eos dolor ma con reris minciati bere vellau. Enecab ius, ommodis ut odition sequod quat quam que sinusam quistet imus delit ex est landisc iiscilibus reic tore nonestibusam sunt verchicil eum ea simillenis eos dolor ma con reris minciati bere vellau.
                            </span>
                        </div>

                        <div class="btn btn_connect">
                            Связаться
                        </div>



                        <div class="btn btn_back">
                            {{ $vuetify.lang.t('$vuetify.back_to_search_results') }}
                        </div>
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
        id: 'ID посылки'
    }),
}
</script>
